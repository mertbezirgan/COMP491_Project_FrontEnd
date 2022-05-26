import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

import './index.css';
import App from './App';
import { getStorageItem, storageKeys } from './services/storage.service';

if (getStorageItem(storageKeys.token)) {
  axios.defaults.headers["Authorization"] = `Bearer ${getStorageItem(storageKeys.token)}`;
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);