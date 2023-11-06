import 'assets/css/App.css';
import Home from 'pages/Home';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'components/include/ScrollTop';
import Wrapper from 'components/include/Wrapper';
import Signup from 'pages/Signup';
import Main from 'pages/Main';
import SignupStep1 from 'pages/Signup_step1';
import SignupStep2 from 'pages/Signup_step2';
import SignupStep3 from 'pages/Signup_step3';

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <ScrollTop />
        <Routes>
          {/* <Route path="/" element={<Home />} exact /> */}
          {/* <Route path="/main" element={<Main />}  /> */}
          <Route path="/signup" element={<Signup />}  />
          <Route path="/signup_step1" element={<SignupStep1 />}  />
          <Route path="/signup_step2" element={<SignupStep2 />}  />
          <Route path="/signup_step3" element={<SignupStep3 />}  />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;