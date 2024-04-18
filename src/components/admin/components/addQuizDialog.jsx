import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const subjects = [
  'Music',
  'Sports',
  'Science',
  'Geography',
  'History',
  'Foodie',
  'Entertainment',
  'General Knowledge',
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
  const handleSubmit = () => {
    // Handle form submission logic here
    handleClose();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const json = JSON.parse(contents);
        console.log(json);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} scroll="paper" aria-labelledby="add-quiz-dialog-title" >
      <DialogTitle id="add-quiz-dialog-title" sx={{ color: '#f2709c' }}>Add Quiz</DialogTitle>
      <DialogContent dividers sx={{ minWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                id="subject"
                label="Subject"
                select
                size="small"
                fullWidth
                required
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} sx={{ color: '#f2709c' }}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
