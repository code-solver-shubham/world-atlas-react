import { useEffect, useTransition, useState, useMemo } from "react";
import { getCountryData } from "../components/api/PostApi";
import CountryCard from "../components/Ui/CountryCard";
import SearchFilter from "../components/Ui/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        startTransition(() => {
          setCountries(res?.data || []);
        });
      } catch (error) {
        console.error("Country API Error:", error);
      }
    };

    fetchCountries();
  }, []);

  // 🔥 Search + Region filter (optimized)
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const name = country?.name?.common?.toLowerCase() || "";
      const region = country?.region?.toLowerCase() || "";

      const matchesSearch = name.includes(search.toLowerCase());
      const matchesRegion = filter === "all" || region === filter;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, filter]);

  if (isPending) {
    return (
      <section className="loader-section">
        <div className="modern-loader"></div>
        <p className="loader-text">Loading countries...</p>
      </section>
    );
  }

  return (
    <section className="section-country">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3 || country.name.common}
            country={country}
          />
        ))}
      </ul>
    </section>
  );
};

export default Country;