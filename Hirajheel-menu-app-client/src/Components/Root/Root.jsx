import { useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
    const [theme, setTheme] = useState('light')
    const handleToggle = e=>{
        console.log(e.target.checked);
        const buttonStat = e.target.checked;
        if(buttonStat === true){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
      }
    return (
           <div data-theme="dark">
           <Nav handleToggle={handleToggle}></Nav>
           <img className="mt-10 h-36 text-center mx-auto mb-10" src="../../../public/Logo.png" alt="" srcset="" />
           <Outlet></Outlet>
        </div>
    );
};

export default Root;