import { useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate} from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    console.log(e.target.checked);
    const buttonStat = e.target.checked;
    if (buttonStat === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div data-theme="dark">
      <Nav handleToggle={handleToggle}></Nav>
      <div className="flex justify-around items-center"> 
        <div className="grid grid-cols-3  flex-grow">
        <button onClick={() => navigate(-1)} className="w-[80%] self-start text-start justify-self-start bg-opacity-0 border-[#FCE3AE] hover:bg-opacity-0 hover:border-orange-200 mx-auto">
          <IoMdArrowRoundBack className="text-[#FCE3AE] text-3xl"></IoMdArrowRoundBack>
        </button>
          <img
            className="mt-10 h-36 text-center mx-auto mb-10"
            src="../../../public/Logo.png"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <h1 className="text-center text-5xl font-bold mb-16 text-[#FCE3AE]">
        HIRAJHEEL HOTEL
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
