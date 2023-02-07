import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// For pages
import {Home, Contact, Login, Register, Reset} from './pages/index';
// For components
import { Header, Footer} from './components/index';

 

function App() {
  return (
    <>
			<BrowserRouter>
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
