import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactPage from './pages/ContactPage';
import YoutubeVideosPage from './pages/YoutubeVideosPage';
import './App.css';

function App() {
  return (
    <div className='container-fluid p-0'>
      <BrowserRouter basename='/'>
        <Header />
        <div className='text-center mt-4'>
          <div className='info'>
            <h2>KhanQha e Sulaimaiya</h2>
            <div className='mt-4 mb-4'>
              <h4>Khalifa-e-Majaaz </h4>
              <h4>HAZRATH MIYA JI PHOOL MOHAMMAD SAB (R) MEWATH</h4>
            </div>
            <h2>Mohammed Mudassir Sulaimani</h2>
            <h5>(Silsila-e-Chistiya, Qadriya, Sahervardiya, Naqshbandiya)</h5>
          </div>
        </div>
        <Routes>
          <Route path='/contact' element={<ContactPage />} />            
        </Routes>
        <YoutubeVideosPage />
        <div className='subscribe-channel'>
          <a href="https://www.youtube.com/@MohammedMudassirSulaimani" className='bg-primary text-white' target="blank">Never miss to subscribe</a>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
