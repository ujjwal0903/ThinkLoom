import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import userAuthForm from "./pages/userAuthForm.page";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar/>}> 
                <Route path="signin" element={<userAuthForm type ="signin"/>} />
                <Route path="signup" element={<userAuthForm type ="signup"/>} />
            </Route>
        </Routes>
    )
}

export default App;