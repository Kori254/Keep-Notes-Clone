import React from "react";
import reactDOM from 'react-dom';

function Footer(){
    var date = new Date
    var Year= date.getDate()

    return <footer>Copyright @{Year}</footer>
}

export default Footer;