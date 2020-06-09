import { useEffect, useState } from 'react';
// import axios from 'axios';


const useAxiosGet = (url) => {

    const location = '';

    const [file, setFile] = useState({
        loading: false,
        data: null,
        error: false,
    });

    const fileData = async () => {
        try {
            setFile({
                loading: true,
                data: null,
                error: false,
            })
            const resData = await fetch(url);
            const reJSON = await resData.json();
            setFile({
                loading: false,
                data: reJSON,
                error: false,
            })

        } catch (error) {
            setFile({
                loading: false,
                data: null,
                error: true
            })
        }
    }

    useEffect(() => {
        fileData(location);

    }, [location])


    // const [products, setProducts] = useState({
    //     loading: false,
    //     data: null,
    //     error: false,
    // })
    // useEffect(() => {
    //     setProducts({
    //         loading: true,
    //         data: null,
    //         error: false,
    //     });
    //     axios.get(url).then((res) => {
    //         setProducts({
    //             loading: false,
    //             data: res.data,
    //             error: false,
    //         })
    //     })
    //         .catch(() => {
    //             setProducts({
    //                 loading: false,
    //                 data: null,
    //                 error: true,
    //             });
    //         });

    // }, [url])


    return file;
}

export default useAxiosGet;