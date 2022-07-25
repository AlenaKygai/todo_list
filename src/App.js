import React  from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ROUTES} from './constants/index';
import HomePage from 'pages/HomePage/HomePage';
import ToDoPage from 'pages/ToDoPage/ToDoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}/>
        <Route path={ROUTES.TODO} element={<ToDoPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
