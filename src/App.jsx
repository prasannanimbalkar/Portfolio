import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      
        <>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Portfolio" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      
    </Router>
  )
}

export default App
