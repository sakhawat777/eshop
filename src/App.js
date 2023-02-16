import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// For pages
import {Home, Contact, Login, Register, Reset} from './pages/index';
// For components
import { Header, Footer} from './components/index';
// For Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

function App() {
  return (
    <>
			<BrowserRouter>
      <ToastContainer/>
      <Header/>
				<Routes>
					<Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />
				</Routes>
        <Footer/>
			</BrowserRouter>
		</>
  );
}

export default App;
