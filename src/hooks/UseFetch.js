import { useEffect, useState } from 'react'


const UseFetch = (url, method = "GET") => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [option, setOption] = useState(null)

    const optionData = (data) => {
        if (method === "POST") {
            setOption({
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; Charset=UTF-8"
                },
            })
        }

        if (method === "PATCH") {
            setOption({
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json;Charset=UTF-8"
                },
            })
        }

        if (method === "DELETE") {
            setOption({
                method: "DELETE"
            })
        }
    }

    useEffect(() => {
        const fetchPost = async (option) => {
            setIsPending(true)
            const response = await (fetch(url, { ...option }));
            const jsonResponse = await (response.json())



            if (response.ok) {
                setData(jsonResponse)
                setError("")
                setIsPending(false)

            }
            if (!response.ok) {
                setError(jsonResponse.error)
            }
        }

        if (method === "GET") {
            fetchPost();
        }

        else if ((method === "POST " || method === "PATCH" || method === "DELETE") && option) {
            fetchPost(option)
        }

    }, [url, method, option])

    return { data, error, isPending, optionData }
}

export default UseFetch
