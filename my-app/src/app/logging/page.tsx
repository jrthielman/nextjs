'use client';

import {List, Title} from "@mantine/core";
import {useGet} from "@/app/page";
import {useState} from "react";

export default function logging() {

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
