import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

const HeaderNavigationItems = [
    {name: 'Home', link: '/'}, 
    {name: 'Recipes', link: '/recipes'},
    {name: 'Contact', link: '/contact'}
  ]
const LogoItems = {
    title: "umahh!!",
    link: './src/assets/Logo.svg'
  }
const FooterListItems = {
  title: "umahh!!",
  navList: [
    {name: 'Home', link: '/'},
    {name: 'Recipes', link: '/recipes'},
    {name: 'Contact', link: '/contact'}
  ], 
  socialLinks: [
    {name: 'Instagram', link: 'https://www.instagram.com/sarikamadipoju/', imagePath: '/src/assets/Instagram.svg'}, 
    {name: 'X', link: 'https://www.twitter.com/sarikamadipoju', imagePath: 'src/assets/Linkedin.svg'},
    {name: 'Linkedin', link: 'https://linkedin.com/in/SarikaMangalpally', imagePath: 'src/assets/X.svg'}
  ]
}

const RootLayout = ()=> {
    return <>
    <div className='min-h-screen'>
        <Header>
            <Logo items={LogoItems}/>
            <Navbar items={HeaderNavigationItems}/>
        </Header>
        <Outlet />
        <Footer items={FooterListItems} />
    </div>
    </>
}

export default RootLayout;