
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import ContactUs from './components/pages/ContactUs'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
