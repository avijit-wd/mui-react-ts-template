import { useRoutes } from 'react-router-dom';
import routes from './router';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { useEffect } from 'react';
import { getTodoReq } from 'redux/api/todoSliceApi';

function App() {
  // Authentication flag
  const isLoggedIn = true;

  const content = useRoutes(routes(isLoggedIn));

  // Please remove code below
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoReq());
  }, []);
  // Please remove code above

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Toaster position="top-left" />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
