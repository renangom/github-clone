import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import GlobalStyles from './GlobalStyles'
import Profile from './pages/Profile'
import Repo from './pages/Repo'
import 'react-calendar-heatmap/dist/styles.css'


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </div>
  )
}

export default App
