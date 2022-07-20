import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Content.jsx';
import About from './About.jsx'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'



const contentNode= document.getElementById('container');

const App= ()=>
    (
                <div className='container-fluid'>
                    <div>
                    <Navbar bg='dark' variant='dark' expand="lg" style={{height:90}}>
                            <Navbar.Toggle aria-controls='mynavbar'/>
                        <Navbar.Collapse id='mynavbar'>
                            <div style={{fontFamily:'Sofia', fontSize:18}}>
                        <Nav>
                                <Nav.Link style={{marginLeft:70,color:'gold'}} href='/home' >Home</Nav.Link>
                                <Nav.Link style={{marginLeft:70,color:'gold'}} href='/about'>About</Nav.Link>
                        </Nav>
                                </div>
                            </Navbar.Collapse>
                    </Navbar>
                    </div>
                    <Routes>
                        <Route index element={<Content/>}/>
                        <Route path='home' element={<Content/>}/>
                        <Route path='about' element={<About/>}/>
                    </Routes>
                    <footer className={'end'} style={{textAlign:'center', backgroundColor:'midnightBlue', color:'white',
                    fontFamily:'averiaSerifLibre', marginTop:100, borderRadius: 10, padding:20, fontSize:18}}>
                        <div>Disclaimer</div>
                        <div>Key informations that may have been provided on this website are from the official Expertnaire website. For
                            further enquiries and updates, please refer to their official website</div>
                    </footer>
                    </div>
        )


const RoutedApp=()=>
    (
        <Router>
            <Routes>
                <Route path='/*' element={<App/>}/>
            </Routes>
            </Router>
    )


ReactDOM.render(<RoutedApp/>, contentNode);


if (module.hot){
    module.hot.accept();
}

