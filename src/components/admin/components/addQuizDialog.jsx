import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import BASE_URL from "../server/endpoint";

const subjects = [
  'Music',
  'Sports',
  'Science',
  'Geography',
  'History',
  'Foodie',
  'Entertainment',
  'GK',
  'Cultural',
  'Society',
];

const levels = [
  {
    value: 'easy level',
    label: 'Easy Level',
  },
  {
    value: 'medium level',
    label: 'Medium Level',
  },
  {
    value: 'hard level',
    label: 'Hard Level',
  },
];

export default function AddQuizDialog({ open, handleClose }) {

  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [questions, setQuestions] = useState([]);
  const [creating, setCreating] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async () => {
    //^ Perform field validations
    // const subject = document.getElementById('subject').value;
    // const level = document.getElementById('level').value;
    const duration = document.getElementById('duration').value;
    const megaPrizeAmount = document.getElementById('mega_prize_amount').value;
    const startDate = document.getElementById('start_date').value;
    const startTime = document.getElementById('start_time').value;
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];


    // Check if any field is empty
    if (!selectedSubject || !selectedLevel || !duration || !megaPrizeAmount || !startDate || !startTime || !file) {
      alert('Please fill all fields and choose a .json file.');
      return;
    }

    const parsedMegaPrizeAmount = parseInt(megaPrizeAmount, 10); 
    const parsedDuration = parseInt(duration, 10);

    // Perform additional validations for start date and time formats
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const timePattern = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;

    if (!datePattern.test(startDate)) {
      alert('Please enter the start date in the format dd/mm/yyyy.');
      return;
    }

    if (!timePattern.test(startTime)) {
      alert('Please enter the start time in the format hh:mm AM/PM.');
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
      questions: questions, 
    };
    
    // console.log('Quiz Data:', quizData);

    try {
      setCreating(true);
      const response = await fetch(`${BASE_URL}api/create-quiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create quiz');
      }
  
      // const data = await response.json();
      // console.log('Quiz created:', data);
      setSnackbarSeverity('success');
      setSnackbarMessage('Quiz created successfully');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error creating quiz:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Failed to create quiz');
      setSnackbarOpen(true);
    }
    finally{
      setCreating(false);
      setSelectedLevel('');
      setSelectedSubject('');
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
        setQuestions(json);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} scroll="paper" aria-labelledby="add-quiz-dialog-title" >
        <DialogTitle id="add-quiz-dialog-title" sx={{ color: '#f2709c' }}>Add Quiz</DialogTitle>
        <DialogContent dividers sx={{ minWidth: '500px' }}>
          {creating ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress style={{ color: '#ff9472' }} />
              <p style={{ color: '#f2709c' }}>Creating...</p>
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
                    // sx={{
                    //   '& fieldset': {
                    //     borderColor: '#f2709c',
                    //   },
                    //   '&:hover fieldset': {
                    //     borderColor: '#f2709c',
                    //   },
                    //   '& input:focus + fieldset': {
                    //     borderColor: '#ff9472 !important',
                    //   },
                    //   '& label.Mui-focused': {
                    //     color: '#f2709c',
                    //   },
                    // }}
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff9472 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f2709c',
                        },
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#f2709c',
                    },
                    '& .MuiListItem-root.Mui-selected': {
                        backgroundColor: '#f2709b1a',
                    },
                    }}
                    // SelectProps={{ MenuProps: { sx: { minWidth: '250px' } } }}
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
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff9472 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f2709c',
                        },
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#f2709c',
                    },
                    '& .MuiListItem-root.Mui-selected': {
                        backgroundColor: '#f2709b1a',
                    },
                    }}
                    // SelectProps={{ MenuProps: { sx: { minWidth: '200px' } } }}
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
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff9472 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f2709c',
                        },
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#f2709c',
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
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff9472 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f2709c',
                        },
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#f2709c',
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
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff9472 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f2709c',
                        },
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#f2709c',
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
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff9472 !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f2709c',
                        },
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#f2709c',
                    },
                    }}
                />
            
                <div style={{ color: '#f2709c', fontWeight: 500, marginBottom: '8px', marginTop: '8px', fontSize: '16px' }}>Choose Question File ( .json only )</div>


                <input type="file" accept=".json" onChange={handleFileChange} required style={{ color: '#ff9472' }} />


            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} sx={{ color: '#f2709c' }}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert elevation={6} variant="filled" sx={{ width: '100%' }} onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
