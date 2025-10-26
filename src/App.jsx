import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Pricing from './components/pages/Pricing'
import Features from './components/pages/Features'
import { About } from './components/pages/About'
import Work from './components/mehedi/Work'
import ReadCase from './components/pages/ReadCase'
import ReadBlog from './components/pages/ReadBlog'
import Blog from './components/pages/Blog'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import ContactUs from './components/pages/ContactUs'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/read' element={<ReadCase/>} />
          <Route path='/readblog' element={<ReadBlog/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/policy' element={<PrivacyPolicy/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
