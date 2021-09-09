import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/header';
import DetailsContent from '../components/DetailsContent';
import "./styles/details.css";


export default function Details() {
    return (
        <div id="DetailsRoot">
            <Header whiteBackground={true} detail={true}/>
            <DetailsContent />
            <Footer dark={true}/>
            
        </div>
    )
}
