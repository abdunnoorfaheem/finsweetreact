
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
