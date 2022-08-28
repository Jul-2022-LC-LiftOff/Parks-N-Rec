import React from 'react';
import {useState, useEffect} from 'react';

export default function () {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const url = "https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=20&=api_key=IJ1FjAb4SkwSyXOqFhyqxTM3xg66eDcMQoDjKS16";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log('data!: ', data);
      })
      .catch((error) => console.log(error));
  }, []);


}

