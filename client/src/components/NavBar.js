import React from 'react';
import {Nav, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom';
import SearchAuthor from './SearchAuthor';
import RecommendedStories from './componenets/RecommendedStories'
const NavBar = () => {
    const linkStyle ={
        display:"flex",
        justifyContent:"space-around",
        width:"150px"
    }
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto" style={linkStyle}>
            <Link to="/">Top Stories</Link>
            <Link to="/TopAuthors">Top Authors</Link>
            <Link to="/RecomendedStories">Recommended Stories</Link>

            <SearchAuthor />
        </Nav>
     </Navbar>
    )
}

export default NavBar
