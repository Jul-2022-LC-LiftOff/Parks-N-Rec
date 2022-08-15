import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SinglePark() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [park, setPark] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getPark() {
      try {
        const response = await fetch(
          `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=20&api_key=ABWZc9qTpwdEzXasClnO4MLAyxYugwYZeNj0GFxi`
        );
        const data = await response.json();
        if (data.parks) {
          const {
            idPark: id,
            name: fullName,
            code: parkCode,
            detaisl: description,
            image: images,
          } = data.drinks[0];

          const newPark = {
            id,

            fullName,
            parkCode,
            description,
            images,
          };
          setPark(newPark);
        } else {
          setPark(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getPark();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!park) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { id, url, fullName, parkCode, description, images } = park;
    return (
      <section className="section drink-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{fullName}</h2>
        <div className="drink">
          <img src={images} alt={fullName}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {fullName}
            </p>
          </div>
        </div>
      </section>
    );
  }
}