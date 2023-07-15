import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EnterWord } from './pages/EnterWord/EnterWord';
import { Layout } from './Layout';
import { ProcessWord } from './pages/ProcessWord/ProcessWord';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path='/' Component={Layout}>
            <Route path='/' Component={EnterWord} />
            <Route path='/process' Component={ProcessWord} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
