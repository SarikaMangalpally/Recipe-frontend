import React from 'react';
import LogoImage from '../assets/Logo.svg';

interface NavList {
    name: string;
    link: string;
}
interface SocialLinksList {
    name: string;
    link: string;
    imagePath: string;
}
interface FooterList {
    title: string;
    navList: NavList[];
    socialLinks: SocialLinksList[]
}
interface FooterProps {
  items: FooterList,
}

const Footer: React.FC<FooterProps> = ({items}: FooterProps) => {
  return (
    <footer className='text-14 text-white font-poppins-light bg-black sticky top-full w-full pt-6 px-4'>
        <div className='sm:justify-around sm:self-center lg:max-w-screen-lg md:mx-auto'>
            <div className='sm:grid sm:grid-cols-2 md:flex md:justify-evenly'>
                <a className='font-inspiration text-36 '>
                    <img src={LogoImage} alt="Logo Image of Umahh!!" className='w-20 h-16'/>
                    {items.title}
                </a>

                <p className='pt-4 sm:col-span-1 sm:row-start-2 sm:row-span-1 md:col-span-2 sm:max-w-sm'>Is a recipe website with a wide variety of delicious recipes, easy to use search function, join our community and let's cook together!</p>
                <ul className='py-4 space-y-2 sm:ml-4 '>
                    {items.navList.map((listItem, index)=> {
                        return <li key={index}>
                                <a href={listItem.link}>{listItem.name}</a>
                            </li>
                    })}
                </ul>
                <ul className='mt-6 md:mt-5 space-y-4 sm:ml-4 '>
                    {
                    items.socialLinks.map((listItem, index)=> {
                        return <li key={index}>
                                <a href={listItem.link} target='_blank'>
                                    <img src={listItem.imagePath} alt={listItem.name} className='w-5 h-5'></img>
                                </a>
                            </li>
                    })  
                    }
                </ul>
            </div>
                <p className='mt-12 text-center pb-4'>&copy; 2024 umahh!!</p>
        </div>
    </footer>
  );
};

export default Footer;