import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryIndData } from "../api/PostApi";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        const res = await getCountryIndData(id);

        if (res.status === 200) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Country Details Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  // ✅ LOADER WORKS EVERY TIME
  if (loading) {
    return (
      <section className="loader-section">
        <div className="modern-loader"></div>
        <p className="loader-text">Loading country details...</p>
      </section>
    );
  }

  if (!country) return null;

  const nativeNames = country.name?.nativeName
    ? Object.values(country.name.nativeName)[0]?.common
    : country.name.common;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="grid grid-two-cols">

          {/* Flag */}
          <img
            src={country.flags.svg}
            alt={country.flags.alt || country.name.common}
          />

          {/* Info */}
          <div className="infoContainer">
            <h2 className="card-title">{country.name.common}</h2>

            <p>
              <span className="card-description">Native Name:</span>{" "}
              {nativeNames}
            </p>

            <p>
              <span className="card-description">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>

            <p>
              <span className="card-description">Region:</span>{" "}
              {country.region}
            </p>

            <p>
              <span className="card-description">Sub Region:</span>{" "}
              {country.subregion || "N/A"}
            </p>

            <p>
              <span className="card-description">Capital:</span>{" "}
              {country.capital?.[0]}
            </p>

            <div className="country-card-backBtn">
              <NavLink to="/country">
                <button>← Back</button>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;