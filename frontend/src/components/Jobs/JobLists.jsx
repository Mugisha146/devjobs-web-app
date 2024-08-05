import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobLists = () => {
  const [jobData, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/jobs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job data.");
        }
        const data = await response.json();
        setJobData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const searchTermValue = searchTerm.toLowerCase();

  // Handle location search
  const locationSearchHandler = () => {
    const filteredData = jobData.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobData(filteredData);
  };

  // Filter job data based on job type
  const filterJobData = (e) => {
    const filterValue = e.target.value;

    let filteredData;
    switch (filterValue) {
      case "full-time":
        filteredData = jobData.filter((job) => job.contract === "Full Time");
        break;
      case "part-time":
        filteredData = jobData.filter((job) => job.contract === "Part Time");
        break;
      case "freelance":
        filteredData = jobData.filter((job) => job.contract === "Freelance");
        break;
      case "contract":
        filteredData = jobData.filter((job) => job.contract === "Contract");
        break;
      default:
        filteredData = jobData;
    }
    setJobData(filteredData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading jobs.</div>;
  }

  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <span>
                <i className="ri-search-line"></i>
              </span>
              <input
                type="text"
                placeholder="Search by title, companies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="search__panel-02">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <input
                type="text"
                placeholder="Search by location"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button className="btn" onClick={locationSearchHandler}>
                Search
              </button>
            </div>

            <div className="search__panel-03">
              <select onChange={filterJobData}>
                <option>Filter job by</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="jobs__wrapper">
            {jobData
              .filter((job) => {
                if (searchTerm === "") return true;
                if (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)
                )
                  return true;
                return false;
              })
              .map((item) => (
                <div className="job__item" key={item._id}>
                  <img src={item.logo} alt="" />

                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item._id}`}>{item.position}</Link>
                    </h1>
                    <p>{item.company}</p>

                    <div className="location">
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobLists;
