import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // API 비동기 통신을 위해서 fetch 사용
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return data;
}