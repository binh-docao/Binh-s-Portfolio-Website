import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { Button, Modal, Box, Typography,Select,MenuItem,TextField, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import dayjs from 'dayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';

const theme = createTheme({
    palette: {
      dp: {
        main: '#ff1493;',
        light: '#ff1493;',
        dark: '#ff1493;',
        contrastText: 'white',
      },
    },
    overrides: {
      MuiStepIcon: {
        root: {
          color: '#ff1493', // your desired color for the "waiting" state
          '&$completed': {
            color: '#ff1493', // your desired color for the "completed" state
          },
          '&$active': {
            color: '#ff1493', // your desired color for the "active" state
          },
        },
      },
    },
  });

function LatePlateModal({ isOpen, onClose, selectedID, name }) {
  if (!isOpen) return null;


  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [comments, setComments] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const currentDayjs = dayjs();

  const lunchCutOff = dayjs().hour(12).minute(30);
  const dinnerCutOff = dayjs().hour(18).minute(0);

  const selectedDayjs = dayjs(selectedDate);
  const isToday = currentDayjs.isSame(selectedDayjs, 'day');

  

  const isLunchTimePassed = isToday && currentDayjs.isAfter(lunchCutOff);
  const isDinnerTimePassed = isToday && currentDayjs.isAfter(dinnerCutOff);
  const [selectedMeal, setSelectedMeal] = useState("lunch"); // Default to lunch
  const submissionTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const steps = ['Select Date', 'Select Meal', 'Add Comments'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
};

const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpenSnackbar(false);
};

  const currentStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(date) => setSelectedDate(dayjs(date))}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </LocalizationProvider>
        );
      case 1:
        return (
          <Select
            label="Select Meal"
            fullWidth
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
            sx={{ marginTop: 2, marginBottom: 3}}
          >
            <MenuItem value="lunch" disabled={isLunchTimePassed}>Lunch</MenuItem>
            <MenuItem value="dinner" disabled={isDinnerTimePassed}>Dinner</MenuItem>
          </Select>
        );
      case 2:
        return (
          <TextField
            label="Comments"
            multiline
            rows={3}
            fullWidth
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Add any additional comments here..."
            variant="outlined"
            margin="normal"
          />
        );
      default:
        return null;
    }
  };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/submitLatePlate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedDate: selectedDayjs.format('YYYY-MM-DD'),
                    meal: selectedMeal,
                    submittedBy: name,
                    comments,
                    selectedID,
                    submissionTime
                })
            });
            const data = await response.json();

            
            if (data && data[0] != '') {
                // Handle success, maybe close the modal and show a success message
                onClose();
                handleOpenSnackbar();
                
            } else {
                // Handle failure
                alert("Failed to submit the request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting late plate request:", error);
            alert("An error occurred. Please try again later.");
        }
    };

  return (
    <Modal open={isOpen} onClose={onClose}>
        <ThemeProvider theme={theme}>
      <Box sx={{ width: '80%', mx: 'auto', my: '5%', padding: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>Late Plate Request</Typography>
        <Typography variant="body1" paragraph>The cut-off for lunch requests is 12:30 PM, and for dinner, it's 6:00 PM</Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {currentStep()}
                <Box sx={{ marginTop: 2 }}>
                  <Button color = "dp" disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                  <Button 
                    variant="contained"
                    color="dp"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    sx={{ marginLeft: 2 }}
                  >
                    {activeStep === steps.length - 1 ? 'Submit Request' : 'Next'}
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
            <Snackbar style={{ zIndex: 1500 }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                message="Some message"
                autoHideDuration={5000}  // 5 seconds
            />
      </Box>
      </ThemeProvider>
    </Modal>
  );
}



export default LatePlateModal;