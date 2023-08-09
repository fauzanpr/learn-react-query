# My React Query Daily

## Query Cache
Setelah melakukan fetching data menggunakan React Query. Hasil data tersebut akan disimpan ke dalam cache (by default dalam waktu 5 menit). Ketika pertama kali melakukan fething, maka data tersebut disimpan dalam cache kemudian isLoading akan dibuat true. Untuk operasi selanjutnya (misalkan habis berpindah tab dan kembali ke tab tersebut), react query tidak melakukan fetching ulang dari database pada saat tampilan pertamanya, melainkan mengambil dari cache. Meskipun selanjutnya akan tetap disesuaikan juga dengan data di database, tetapi proses tersebut terjadi dibelakang layar (sehingga tidak menampilkan loading dan langsung mengupdate apabila ada perubahan). 
Flag isLoading akan bernilai true pada saat fetching data pertama kali ke dalam server sedangkan untuk fetching" yang selanjutnya (background fetching), React Query menggunakan booledan isFetching sebagai flag yang diberikan nilai true saat proses fetching tersebut.
```javascript
const { isLoading, isFetching } = useQuery('key', fn);
// isLoading : true when first time data fetching
// isFetching : always true when refetching data
```

### Mengubah Caching Time
By Default, waktu penyimpanan data ke dalam cache tersebut adalah 5 menit dan sudah cukup ideal. Namun, mungkin ada saatnya, mungkin ingin mengubah waktu data tersimpan ke dalam cache. Hal itu bisa dilakukan dengan menambahkan parameter berupa object sebagai argumen ke 3, dengan key cacheTime dan value waktu simpan dengan satuan milisekon.
```javascript
useQuery('key', fn, {
    cacheTime: 5000
});
// caching time diubah menjadi 5 detik atau 5000 ms
```

## Stale, Fresh, and Fetching
Ketika status tersebut merupakan status yang ada di React Query.
- Jika dalam kondisi Stale, data akan dilakukan refetching saat ada window refoccused, component remount, atau network reconnect.
- Apabila dalam kondisi Fresh, ditampilkan data hanya dari cache nya saja. Meskipun terdapat remount, network reconnect, ataupun window refoccused. Artinya, tidak ada proses refetching pada API pada kondisi fresh.
- Fething : kondisi saat refetching data

## StaleTime
Stale time merupakan durasi ketika data berada di kondisi fresh sampai berpindah ke stale. Staletime mempunyai nilai default 0. Stale time bisa diubah, dengan cara berikut
```javascript
useQuery('key', fn, {
    staleTime: 30000
});
```
Kode di atas berarti mengubah staleTime menjadi 30 detik. Sehingga data berada pada kondisi fresh selama 30 detik. Jika kondisi fresh, data tidak akan mengambil data baru dari API selama 30 detik yang artinya akan full mengambil hanya dari cache. 
- Data akan tetap berada di kondisi fresh selama 30 detik meskipun berpindah tab. (Jadi ketika pindah ke tab yang lain dan kembali lagi, maka waktu stale time tidak akan direset menjadi 30 detik kembali melainkan melanjutkan sisa waktunya jika waktu staleTime masih tersisa). Namun, ketika kembali ke tab semula setelah berpindah tab dan waktu stale time nya habis, maka data akan masuk ke fresh kembali dan menunggu sampai 30 detik kembali (waktu menunggu stale time direset lagi menjadi 30 detik)

## Refetch
### RefetchOnMount
Default nya bernilai true. Sehingga ketika component on mount, ia akan melakukan refetch. Namun, jika diubah menjadi false, maka ketika component on mount, misalnya habis berpindah tab, ia tidak akan merefetch ulang.
```javascript
useQuery('key', fn, {
    refetchOnMount: false
})
```
### RefetchOnWindowFocus
Default nya bernilai true. Ketika masuk ke windows tersebut akan melakukan refetch. Namun, bisa diganti menjadi false sehingga ketika kita berpindah windows, misal membuka vscode dan kembali ke browser pada halaman tersebut, ia tidak akan refetching. 
```javascript
useQuery('key', fn, {
    refetchOnWindowFocus: false
})
```

## Fetch when click button
Cegah fetching pada saat onmounting component
```javascript
{
    enabled: false
}
```
Kemudian, menggunakan refetch.
```js
const { refetch } = useQuery();
```

## Success and Error Callback
Prinsipnya sama seperti useEffect, ketika success maka kita dapat memberikan side effect begitu juga pada error.
Menggunakan cara berikut
```js
{
    onSuccess: fnSuccessSideEffect,
    onError: fnErrorSideEffect
}
```