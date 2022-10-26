import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/home.css';
import './styles/notes.css';
import './styles/newEntry.css';
import './styles/entriesPage.css';
import './styles/tasks.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
 ,
  document.getElementById('root')
);


