import './App.css';
import { Button,ThemeProvider } from "@mui/material"
import { Theme } from './components/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ Theme }>
        <Button variant='outlined'>Hello World</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
