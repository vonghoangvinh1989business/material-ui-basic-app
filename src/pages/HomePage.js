import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import jobs from "../jobs.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../css/HomePage.css";

function HomePage() {
  const JOB_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentJobData, setCurrentJobData] = useState([]);
  const maxPageNumber = Math.ceil(jobs.length / JOB_PER_PAGE);

  useEffect(() => {
    const start = (currentPage - 1) * JOB_PER_PAGE;
    const end = start + JOB_PER_PAGE;
    setCurrentJobData(jobs.slice(start, end));
  }, [currentPage]);

  const handlePageChange = (_, page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPageNumber));
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
        <Grid container rowSpacing={2} columnSpacing={2} mt={2}>
          {currentJobData.map((job) => (
            <Grid key={job.id} item xs={12} sm={6} md={4} lg={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>

        <Stack sx={{ mt: 2, mb: 2 }} spacing={2}>
          <Pagination
            className={"paginationButtonStyle"}
            count={maxPageNumber}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </Container>
    </div>
  );
}

export default HomePage;
