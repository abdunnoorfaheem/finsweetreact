import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Pricing from './components/pages/Pricing'
import Features from './components/pages/Features'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/feature' element={<Features/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
