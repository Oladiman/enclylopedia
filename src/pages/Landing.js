import React from 'react';
import "./styles/landing.css";
import Header from "../components/header";
import Overlay from '../components/Overlay';
import Footer from '../components/Footer';

export default function Landing() {
    return (
        <div id="landingRoot">
            <Header />
            <Overlay />
            <Footer />
        </div>
    )
}
