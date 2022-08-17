import React from 'react'

//connecting to the api here...
export default function AboutPark(){
const [data, setData] = React.useState([]);
React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
      setData(json.data);
        console.log('data!: ', json);
      })
      .catch((error) => console.log(error));
  }, []);

//trying to display the description here
return (
    <div>
        <p>{data.description}</p>
    </div>

)


}

