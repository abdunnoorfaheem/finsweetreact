
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import ReadCase from './components/pages/ReadCase'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      {/* <Route index element={<Home/>}/> */}
      <Route index element={<ReadCase/>}/> 
      </Route>
    </Routes>
    </>
  )
}

export default App
