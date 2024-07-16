import { useState, useEffect } from "react";

function useCurrencyInfo(curr) {

    const [data, setData] = useState({}); // Giving empty object to prevent crash when fetch fails

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
            .then((response) => response.json())
            .then((response) => setData(response[curr]));
            // .then((response) => {

            //     // console.log(response)
            //     response[curr].map((res_key)=>{

            //         delete response[curr][res_key]
            //     })
            //     setData(response[curr])
            // });

    }, [curr]);
    console.log(data);
    return data;
};

export default useCurrencyInfo;