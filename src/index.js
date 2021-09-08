import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/global";
import { TaskListProvider } from "./Providers/TaskList";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <TaskListProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </TaskListProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
