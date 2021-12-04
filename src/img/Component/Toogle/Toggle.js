import React, { useContext } from 'react';
import './Toggle.css'
import sun from "../../sun.jpg";
import moon from "../../moon.jpg";
import { ThemeContext } from '../Context';


const Toggle = () => {
    const theme = useContext(ThemeContext)

    
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
    return (
        <div className="t">
            <img src={sun} alt="" className="t-icon" />
            <img src={moon} alt="" className="t-icon" />
            <div className="t-button"onClick={handleClick}  style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    );
};

export default Toggle;