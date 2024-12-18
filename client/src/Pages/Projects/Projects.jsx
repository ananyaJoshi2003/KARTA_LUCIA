import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { getPortfolioByIdOrAll } from "../../services/portfolioService";

const Projects = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchPortfolios();
    }
  }, [isDataFetched]);

  const fetchPortfolios = async () => {
    try {
      const portfoliosData = await getPortfolioByIdOrAll();
      setPortfolios(portfoliosData.data);
      setIsDataFetched(true);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  return (
    <div className="projects-section">
      <div className="projects-heading">
        <h1>Portfolio</h1>
        <p>Discover our creative projects</p>
      </div>

      <div className="projects-grid">
        {portfolios.map((portfolio) => (
          <Link to={`/Details/${portfolio._id}`} key={portfolio._id}>
            <div className="projects-card">
              <div className="projects-card-overlay">
                <h2>{portfolio.title}</h2>
              </div>
              <img src={portfolio.imageUrl} alt={portfolio.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
