import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () =>{

        const [isSticky, setIsSticky] = useState(false)

        useEffect(()=>{
            const scrollHandle=()=>{
                setIsSticky(window.scrollY > 50)
            }

            window.addEventListener('scroll', scrollHandle)

            return()=>{
                window.removeEventListener('scroll', scrollHandle)
            }
        },[])

    return(
<section className='navbar-info'>
<Navbar expand="lg" className={`bg-black fixed top-0 right-0 left-0 bg-slate-700 ${isSticky ? 'scrolled' : ''}`}>
    <Container fluid>
        <Navbar.Brand className='text-white fs-1 fw-bolder'>React Site</Navbar.Brand>
        <Navbar.Toggle aria-controls='navMenu' className='bg-white'></Navbar.Toggle>
        <Navbar.Collapse id='navMenu'>
            <ul className='navbar-nav ms-auto'>
               <li className='nav-item'>
                   <Link className='nav-link' to="/home">Home</Link>
               </li>
               <li className='nav-item'>
                   <Link className='nav-link' to="/props">Props</Link>
               </li>
            </ul>
        </Navbar.Collapse>
    </Container>
 </Navbar>
</section>
    )
}
export default Header