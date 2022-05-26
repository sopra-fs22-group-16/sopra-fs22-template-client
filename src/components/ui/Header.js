import React, { useState } from "react";
import HeaderImage from "styles/images/hannibal_header.png";
import PropTypes from "prop-types";
import "styles/ui/Header.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import { defaultTheme } from "../../styles/themes/defaulTheme";
import { ThemeProvider } from "@emotion/react";
import CustomPopUp from "../ui/CustomPopUp";
import { Button } from 'components/ui/Button';

const isRegistered = localStorage.getItem('isRegistered') === 'true' ? true : false;
const userId = localStorage.getItem("userId");



const Header = props => {

    const isRegistered = localStorage.getItem('isRegistered') === 'true' ? true : false;
    const [errorMessage, setErrorMessage] = useState("");
    const showLogOut = (isRegistered  && !(props.noLogOutBool == true))? true : false;
    

    const logOut = () => {

        setErrorMessage("You are now logged out!")
        // I know we don't use userId anywhere right now but I feel like we need it to do the logout
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('isRegistered');
    }
    
    const LogoutIconHeader = () => {
        if(showLogOut) {
            return(
            <LogoutIcon className = "header userInfo"
            onClick={() => logOut()}
            />
            )
        } 
        else {
            return(
                <div> </div>
            )
        }
    }

     return(
    <div>
    <div className="header headerContainer" style={{ height: props.height }}>
        <img src={HeaderImage}/>
        <LogoutIconHeader/>
    </div>
     <ThemeProvider theme={defaultTheme}>
     <CustomPopUp open={errorMessage !== ''} information={errorMessage}>
         <Button onClick={() =>
             setErrorMessage("")
         }>
             Close
         </Button>
     </CustomPopUp>
 </ThemeProvider>
 </div>)
    
        };

Header.propTypes = {
    height: PropTypes.string,
    logOutBool: PropTypes.bool,
    isRegistered: PropTypes.bool,

}



export default Header;