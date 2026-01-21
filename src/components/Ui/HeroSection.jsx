import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World,
            <br /> One Country at a Time 🌍
          </h1>

          <p className="paragraph">
            Discover the history, culture, population, and facts of every nation.
            Search, filter, and explore countries with a beautiful modern
            experience.
          </p>

          <NavLink to="/country">
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=900&auto=format&fit=crop"
            alt="World map representing countries and global exploration"
            className="banner-image"
            loading="lazy"
          />
        </div>

      </div>
    </main>
  );
};

export default HeroSection;