import React from 'react';


export default function SearchName() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log('data!: ', json);
      })
      .catch((error) => console.log(error));
  }, []);


    const handleChange = (e) => {
        e.preventDefault();
        setData(e.target.value);
    };

    if (data.length > 0) {
    let url = data.filter((i)  => {
        return i.name.match(data);
    });
    }

return (
    <div>
    <input
    type="text"
    placeholder="Search Park Name"
    onChange = {handleChange}
    />
      {}
      {data.map((park, key) => {
        return (
          <p key={key}>
            {park.fullName}
          </p>
        )
      })}
    </div>
  );
};

