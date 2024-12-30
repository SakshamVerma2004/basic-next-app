"use client";

import React, { useEffect, useState } from "react";

export default function NestedRoute() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>This is the nested route page.</h1>
      {data.map((item, ind) => {
        return <p key={ind}>{item.name}</p>;
      })}
    </div>
  );
}
