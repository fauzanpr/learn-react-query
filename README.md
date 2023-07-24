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