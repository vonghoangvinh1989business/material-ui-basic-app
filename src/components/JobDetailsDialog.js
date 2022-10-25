import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  DialogTitle,
  DialogContent,
  Dialog,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import { AiFillFire } from "react-icons/ai";
import api from "../data/fetchData";

function JobDetailsDialog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchJobData = async (id) => {
      try {
        const data = await api.getSingleJobById(id);
        setJobData(data);
      } catch (error) {
        console.log(`Error message: ${error}`);
      }
    };

    fetchJobData(id);
  }, [id]);

  const handleCloseDialog = () => {
    navigate(-1);
  };

  return (
    <div>
      <Dialog maxWidth="sm" open={true} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
          }}
          textAlign="center"
        >
          <AiFillFire size="30" color="red" />
          <Typography sx={{ ml: 1 }}>{jobData?.title}</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mt: 2, mb: 2 }}>
            <Stack direction="row" spacing={1}>
              Skills:
              {jobData?.skills.slice(0, 4).map((skill) => (
                <Chip
                  key={`${jobData?.id}-${skill}`}
                  size="small"
                  label={skill}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "12px",
                    ml: 1,
                  }}
                />
              ))}
            </Stack>
            <Typography
              sx={{ mt: 1 }}
              gutterBottom
              variant="body2"
              component="div"
            >
              City:{" "}
              <Chip
                size="small"
                label={jobData?.city}
                sx={{
                  backgroundColor: "rgb(255, 167, 38);",
                  color: "black",
                  fontSize: "10px",
                  ml: 1,
                }}
              />
            </Typography>
            <Typography sx={{ mt: 1 }} variant="body2">
              {jobData?.description}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default JobDetailsDialog;
