import CountryData from "../components/api/CountryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting <br />
        Countries we're proud of
      </h2>

      <div className="gradient-cards">
        {CountryData.map((country) => (
          <div className="card" key={country.id}>
            <div className="container-card bg-blue-box">
              <h3 className="card-title">{country.countryName}</h3>

              <p>
                <span className="card-description">Capital:</span>{" "}
                {country.capital}
              </p>

              <p>
                <span className="card-description">Population:</span>{" "}
                {country.population}
              </p>

              <p>
                <span className="card-description">Continent:</span>{" "}
                {country.continent}
              </p>

              <p>
                <span className="card-description">Interesting Fact:</span>{" "}
                {country.interestingFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;