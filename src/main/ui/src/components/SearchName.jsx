import React from 'react';


export default function SearchName() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const url = `https://developer.nps.gov/api/v1/parks?stateCode="ALL"&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log('data!!: ', json);
        data.fullName.forEach(v => {
          console.log("name: " + v.fullName);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {}
      {data.map((park, key) => {
        return (
          <p key={key}>
            {park.fullName}
            <br></br>
              <a href={park.url}>
                link
              </a>
          </p>
        )
      })}
    </div>
  );
}
