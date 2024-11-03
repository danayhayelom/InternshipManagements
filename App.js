import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './page/Home.js'
import Product  from './page/Product'
import Report from './page/Report'
import Register from './forms/Register'
import Dashborde from './components/project/Dashborde.js'
import Postinternship  from './components/project/files/Postinternship'
import Tests from './components/project/files/projects/Tests.js'
import Belay from './Belay.js'
import Login from './Login.js'
import Adviser from './Adviser.js'
import StudentDashbord from './StudentDashbord.js'
import ApplyInternship from'./ApplyInternship.js'
import ProtecRouter from './ProtectRouter'
import ForgotPassword from './ForgotPassword.js'
function App() {
  return (

<BrowserRouter>
            <Routes>
              
              <Route path='/student' element={<Dashborde/>} />
              <Route path='applyInternship' element={<ApplyInternship />} />
                <Route path='/' element={<Login />} />
                <Route path='/forgot' element={<ForgotPassword />} />
                    
                    <Route path='home' element={<Home />} />
                    <Route path='postinternship' element={<Postinternship/>} />
                    <Route path='tests' element={<Tests />} />
            </Routes>
        </BrowserRouter>

  );
        }

export default App
