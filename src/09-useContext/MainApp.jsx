import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import {Navbar} from "./Navbar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar/>
      
      <hr/>
      
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"about"} element={<AboutPage/>}/>
        <Route path={"login"} element={<LoginPage/>}/>
        {/*<Route path={"/*"} element={<LoginPage/>}/>*/}
        <Route path={"/*"} element={<Navigate to={"/about"}/>}/>
      </Routes>
    </UserProvider>
  )
}
