import React, { useEffect, useState } from "react";

const FetchingApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(data);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!resp.ok) {
          throw new Error("Something is wrong!");
        }
        const data = await resp.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData()
  }, []);

  return <div>
    {loading && "Loading..."}
    {data.map((item)=><div key={item.id}>{item.name}</div>)}
  </div>;
};

export default FetchingApi;
