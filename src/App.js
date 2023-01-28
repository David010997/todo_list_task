import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task from './TodoList/Task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
