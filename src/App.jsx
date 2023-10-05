import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import NotesContent from './Components/NotesContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotesContext from './Components/NotesContext'
import NotesCard from './Components/NotesCard'

function App() {

  return (
    <>
      <div className='mainSetUp'>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={
              <NotesContext>
                          <Sidebar />
                <NotesContent />
              </NotesContext>} />
            <Route path='notesCard' element={
              <NotesContext>
                          <Sidebar />

                <NotesCard />
              </NotesContext>
            } />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
