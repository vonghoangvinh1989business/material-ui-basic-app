import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import AuthContext from "../auth/AuthContext";

function JobCard({ job }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLearnMoreClick = (jobId) => {
    if (auth.user) {
      navigate(`/job/${jobId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <Card
      sx={{
        textAlign: "center",
        fontSize: "1rem",
        maxHeight: "400px",
        maxWidth: "300px",
      }}
    >
      <CardContent sx={{ height: "250px" }}>
        <Typography gutterBottom variant="body1">
          {job.title}
        </Typography>
        <Divider />

        <Grid container sx={{ textAlign: "left", mt: 0.5 }} spacing={2}>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              key={`${job.id}-${skill}`}
              size="small"
              label={skill}
              sx={{
                backgroundColor: "red",
                color: "white",
                fontSize: "8px",
                mt: 1,
                mb: 1,
                ml: 1,
                spacing: 1,
              }}
            />
          ))}
        </Grid>
        <Typography gutterBottom variant="body2" component="div">
          {job.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Button
          sx={{
            color: "rgba(0, 0, 0, 0.87)",
            backgroundColor: "rgb(255, 167, 38)",
            borderColor: "black",
            fontSize: "0.7rem",
            padding: "0.5",
            minWidth: "64px",
            ml: 2,
            mr: 2,
            position: "absolute",
            bottom: "15px",
            "&:hover": {
              backgroundColor: "rgb(245, 124, 0)",
            },
          }}
          size="small"
          onClick={() => handleLearnMoreClick(job.id)}
        >
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;
