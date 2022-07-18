import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from  "./Pages/Contact"
import { Navbar } from "./Components/Navbar";

function App()
{
    return (
        <>
            <Navbar/>
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
