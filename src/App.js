import Aboutus from "./Components/Aboutus";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import NoteState from "./Context/NoteState";
import Notes from "./Components/Notes";
import ReadNote from "./Components/ReadNote";
function App() {
  return (
    <>
    <NoteState>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/Notes" element={ <Notes/> }>
              </Route>
            <Route exact path="/About" element={<Aboutus />}>
              </Route>
            <Route exact path="/Contact" element={<Contact />}>
            </Route>
            <Route exact path="/Signup" element={<Signup />}>
            </Route>
            <Route exact path="/Login" element={<Login />}>
            </Route>
            <Route exact path="/ReadNote" element={ <ReadNote/> }>
            </Route>
          </Routes>
            <Footer />
        </Router>
    </NoteState>
      
    </>
  );
}

export default App;
