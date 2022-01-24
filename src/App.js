/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './App.scss';
import 'rsuite/dist/rsuite.min.css'
import { Navbar, Nav} from 'rsuite'
import {FaHome} from 'react-icons/fa'
import Home from './Components/Home'
import Articles from './Components/Articles'
import Contacts from './Components/Contacts';
import {data} from "./articles/articles"
import Article from './Components/Articles/Article';
import { encodeURL } from './utils/url';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

function App() {
  const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return (
      <Link to={href} as={as}>
        <a ref={ref} {...rest} />
      </Link>
    );
  });
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <header>
        <Navbar className='navbar'>
          <Navbar.Brand className="name">Сайтик</Navbar.Brand>
          <Nav>
            <Nav.Item icon={<FaHome />} as={MyLink} href={'/'} className='item'>Главная</Nav.Item>
            <Nav.Item as={MyLink} href={'/articles'}>Статьи</Nav.Item>
            <Nav.Item as={MyLink} href={"/contact"}>Контакты</Nav.Item>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contacts />} />
          {data.map((el) => {
            return <Route path={`/articles/${encodeURL(el.title)}`} element={<Article data={el}/>}/>
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
