import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import LoginPage from "./pages/login/LogIn";
import Ticket from "./pages/ticket/Ticket";
import Tickets from "./pages/tickets/Tickets";
import Profile from "./pages/profile/Profile";
import QuoatationsPage from "./pages/quotations/Quotations";
import QuotationPage from "./pages/quotation/Quotation";
import PrivateRoute from "./components/common/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Chat from "./pages/chat/Chat";
import CalenderPage from "./pages/calender/CalenderPage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/*<OnLoadColumnAnimation/>*/}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/calender" element = {<CalenderPage />}/>
            <Route element={<PrivateRoute />}>
              <Route path="/ticket" element={<Ticket />} />
              <Route exact path="/ticketlist" element={<Tickets />} />
              <Route exact path="/quotation" element={<QuotationPage />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/quotations" element={<QuoatationsPage />} />
              <Route exact path="/chat" element={<Chat />} />
            </Route>
            {/*<Route exact path='/article/:id' element={<article/>}/>*/}
            {/*<Route path="/:u" element={<ErrorPage/>}/>*/}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
