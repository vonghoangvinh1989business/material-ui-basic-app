import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import jobs from "../jobs.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

function HomePage() {
  return (
    <div>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Grid container rowSpacing={4} columnSpacing={4} mt={2}>
          {jobs.slice(0, 5).map((job) => (
            <Grid key={job.id} item xs={12} md={4} lg={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ mt: 2 }} spacing={2}>
          <Pagination
            count={3}
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </Stack>
      </Container>
    </div>
  );
}

export default HomePage;
