import './App.css'
import { Route, Routes } from 'react-router'
import Edit from './components/edit'
import Delete from './components/delete'
import Create from './components/create'
import Home from './components/home'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/delete/:id' element={<Delete />} />
          </Routes>
        }
      />
    </>
  )
}

export default App
