import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const subjects = [
  "Music",
  "Sports",
  "Science",
  "Geography",
  "History",
  "Foodie",
  "Entertainment",
  "GK",
  "Cultural",
  "Society",
];

const levels = [
  {
    value: "easy level",
    label: "Easy Level",
  },
  {
    value: "medium level",
    label: "Medium Level",
  },
  {
    value: "hard level",
    label: "Hard Level",
  },
];

const UpdateQuizDialog = ({ open, handleClose, quiz }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [quizId, setQuizId] = useState(null);
  const [duration, setDuration] = useState("");
  const [megaPrizeAmount, setMegaPrizeAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [questions, setQuestions] = useState([]);
  const [updatedQuestions, setUpdatedQuestions] = useState([]);
  const [updating, setUpdating] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    // Populate fields with quiz details if provided
    if (quiz) {
      setQuizId(quiz._id);
      setSelectedSubject(quiz.subject);
      setSelectedLevel(quiz.level);
      setDuration(quiz.duration);
      setMegaPrizeAmount(quiz.megaPrizeAmount);
      setQuestions(quiz.questions);
      // Extract date and time from startDateTime
      const dateTimeParts = quiz.startDateTime.split(" ");
      setStartDate(dateTimeParts[0]);
      setStartTime(`${dateTimeParts[1]} ${dateTimeParts[2]}`);
    }
  }, [quiz]);

  const handleSubmit = async() => {
    if (
      !selectedSubject ||
      !selectedLevel ||
      !duration ||
      !megaPrizeAmount ||
      !startDate ||
      !startTime
    ) {
      alert("Please fill all fields");
      return;
    }

    const parsedMegaPrizeAmount = parseInt(megaPrizeAmount, 10);
    const parsedDuration = parseInt(duration, 10);

    // Perform additional validations for start date and time formats
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const timePattern = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;

    if (!datePattern.test(startDate)) {
      alert("Please enter the start date in the format dd/mm/yyyy.");
      return;
    }

    if (!timePattern.test(startTime)) {
      alert("Please enter the start time in the format hh:mm AM/PM.");
      return;
    }

    //^ now all validation done
    const quizData = {
      megaPrizeAmount: parsedMegaPrizeAmount,
      subject: selectedSubject,
      level: selectedLevel,
      status: -1,
      startDateTime: `${startDate} ${startTime}`,
      noOfQuestion: questions.length,
      duration: parsedDuration,
      questions: updatedQuestions.length > 0 ? updatedQuestions :questions,
    };

    console.log(quizData);

    try {
        setUpdating(true);
        const response = await fetch(`http://localhost:5000/api/update-quiz/${quizId}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(quizData),
        });

        if (!response.ok) {
            throw new Error('Failed to update quiz');
        }
        // const data = await response.json();
        // console.log('Quiz created:', data);
        setSnackbarSeverity('success');
        setSnackbarMessage('Quiz updated successfully');
        setSnackbarOpen(true);
    } catch (error) {
        console.error('Error in updating quiz:', error);
        setSnackbarSeverity('error');
        setSnackbarMessage('Failed to update quiz');
        setSnackbarOpen(true);
    }
    finally{
        setUpdating(false);
        handleClose();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const json = JSON.parse(contents);

        // console.log(json);
        setUpdatedQuestions(json);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="add-quiz-dialog-title"
      >
        <DialogTitle id="add-quiz-dialog-title" sx={{ color: "#f2709c" }}>
          Update Quiz
        </DialogTitle>

        <DialogContent dividers sx={{ minWidth: "500px" }}>
          {updating ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CircularProgress style={{ color: "#ff9472" }} />
              <p style={{ color: "#f2709c" }}>Updating...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                id="subject"
                label="Subject"
                select
                size="small"
                fullWidth
                required
                value={selectedSubject}
                onChange={(event) => setSelectedSubject(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9472 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2709c",
                    },
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#f2709c",
                  },
                  "& .MuiListItem-root.Mui-selected": {
                    backgroundColor: "#f2709b1a",
                  },
                }}
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                margin="normal"
                id="level"
                label="Level"
                select
                size="small"
                fullWidth
                required
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9472 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2709c",
                    },
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#f2709c",
                  },
                  "& .MuiListItem-root.Mui-selected": {
                    backgroundColor: "#f2709b1a",
                  },
                }}
              >
                {levels.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                margin="normal"
                id="duration"
                label="Duration ( in second )"
                type="number"
                size="small"
                fullWidth
                required
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9472 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2709c",
                    },
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#f2709c",
                  },
                }}
              />

              <TextField
                margin="normal"
                id="mega_prize_amount"
                label="Mega Prize Amount"
                type="number"
                size="small"
                fullWidth
                required
                value={megaPrizeAmount}
                onChange={(event) => setMegaPrizeAmount(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9472 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2709c",
                    },
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#f2709c",
                  },
                }}
              />

              <TextField
                margin="normal"
                id="start_date"
                label="Start Date ( dd/mm/yyyy )"
                type="text"
                size="small"
                fullWidth
                required
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9472 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2709c",
                    },
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#f2709c",
                  },
                }}
              />

              <TextField
                margin="normal"
                id="start_time"
                label="Start Time ( hh:mm AM )"
                type="text"
                size="small"
                fullWidth
                required
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9472 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2709c",
                    },
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#f2709c",
                  },
                }}
              />

              <div
                style={{
                  color: "#f2709c",
                  fontWeight: 500,
                  marginBottom: "8px",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              >
                Choose Question File ( .json only )
              </div>

              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                required
                style={{ color: "#ff9472" }}
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} sx={{ color: "#f2709c" }}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UpdateQuizDialog;
