import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../css/HomePage.css";
import api from "../data/fetchData";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [currentJobData, setCurrentJobData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(0);
  let [search] = useSearchParams();
  const q = search.get("q");

  useEffect(() => {
    const fetchJobData = async () => {
      setLoading(true);
      try {
        const jobData = await api.getAllJobs(currentPage, q);
        if (jobData) {
          setCurrentJobData(jobData.jobs);
          setPageTotal(jobData.pagesTotalNum);
        }
      } catch (error) {
        console.log(`Error message: ${error}`);
      }
      setLoading(false);
    };

    fetchJobData();
  }, [currentPage, q]);

  // handle page change of pagination
  const handlePageChange = (_, page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, pageTotal));
  };

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Grid container rowSpacing={2} columnSpacing={2} mt={2}>
              {currentJobData.map((job) => (
                <Grid
                  container
                  className="gridJobCard"
                  mt={2}
                  key={job.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                >
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>

            <Stack mt={2} spacing={2}>
              <Pagination
                className={"paginationButtonStyle"}
                count={pageTotal}
                page={currentPage}
                onChange={handlePageChange}
              />
            </Stack>
          </>
        )}
      </Container>
    </div>
  );
}

export default HomePage;
