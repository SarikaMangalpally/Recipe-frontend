// import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LogoComponent from './components/Logo';
import Instagram from './assets/Instagram.svg';
import X from './assets/X.svg';
import Linkedin from './assets/Linkedin.svg';
import Logo  from './assets/Logo.svg';

const HeaderNavigationItems = [
    {name: 'Home', link: '/'}, 
    {name: 'Recipes', link: '/recipes'},
    {name: 'Contact', link: '/contact'}
  ]
const LogoItems = {
    title: "umahh!!",
    link: Logo
  }
const FooterListItems = {
  title: "umahh!!",
  navList: [
    {name: 'Home', link: '/'},
    {name: 'Recipes', link: '/recipes'},
    {name: 'Contact', link: '/contact'}
  ], 
  socialLinks: [
    {name: 'Instagram', link: 'https://www.instagram.com/sarikamadipoju/', imagePath: Instagram}, 
    {name: 'X', link: 'https://www.twitter.com/sarikamadipoju', imagePath: Linkedin},
    {name: 'Linkedin', link: 'https://linkedin.com/in/SarikaMangalpally', imagePath: X}
  ]
}

const RootLayout = ()=> {
    return <>
    <div className='min-h-screen'>
        <Header>
            <LogoComponent items={LogoItems}/>
            <Navbar items={HeaderNavigationItems}/>
        </Header>
        <Outlet />
        <Footer items={FooterListItems} />
    </div>
    </>
}

export default RootLayout;