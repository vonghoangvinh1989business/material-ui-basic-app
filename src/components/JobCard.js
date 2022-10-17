import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function JobCard({ job }) {
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
        <Typography gutterBottom variant="subtitle1">
          {job.title}
        </Typography>
        <Divider />

        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            mt: 1,
            mb: 1,
          }}
        >
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              key={`${job.id}-${skill}`}
              size="small"
              label={skill}
              sx={{ backgroundColor: "red", color: "white", fontSize: "8px" }}
            />
          ))}
        </Stack>

        <Typography gutterBottom variant="subtitle2"></Typography>

        <Typography gutterBottom variant="body2" component="div">
          {job.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Button
          sx={{
            color: "black",
            backgroundColor: "orange",
            borderColor: "black",
            fontSize: "12px",
            padding: 0.5,
            ml: 2,
            mr: 2,
            position: "absolute",
            bottom: "15px",
          }}
          size="small"
        >
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;