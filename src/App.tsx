
import './App.css'
import FunPage from './components/FunPage/FunPage';
import Home from './components/HomePage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/awesome/applicant' element={<FunPage />} />
    </Routes>
  </BrowserRouter>
)

export default App;