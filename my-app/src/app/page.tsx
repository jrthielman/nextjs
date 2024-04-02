'use client';

import {List, Title} from "@mantine/core";
import {useState} from "react";

export async function useGet(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response?.json();
    // test
}


export default function dashboard() {
    const [data, setData] = useState<{firstName: string}[]>([]);

    useGet('http://localhost:8080/animals')
        .then(r => setData(r))
        .catch(r => console.log(r));

    if (data) {
        return <>
            <Title mb={10}>
                Database data
            </Title>
            <List>
                {
                    data.map((v, index) => {
                        return <List.Item key={v.firstName + index}>{v.firstName}</List.Item>
                    })
                }
            </List>
        </>
    }

}
