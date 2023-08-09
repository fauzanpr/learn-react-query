import axios from "axios";
import { useQuery } from "react-query";

const useGetSuperheroes = (onSuccess, onError, enabled = true) => {
    const getData = () => {
        return axios.get('http://localhost:8000/superheroes');
    };
    return useQuery('heroes', getData, {
        select: (data) => data.data.map(d => d.name),
        onSuccess,
        onError,
        enabled,
    });
}
 
export default useGetSuperheroes;