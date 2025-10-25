
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Clients from './components/hometwo/Clients'
import Faq from './components/hometwo/Faq'
import Form from './components/hometwo/Form'
import Blog from './components/hometwo/Blog'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
      <Clients/>
      <Faq/>
      <Form/>
      <Blog/>
    </>
  )
}

export default App
