import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
