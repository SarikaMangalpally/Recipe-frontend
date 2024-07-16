import React from 'react';

interface NavigationItem {
    name: string;
    link: string;
}

interface NavbarProps {
    items: NavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }: NavbarProps) => {
  return (
    <nav>
        <ul className='flex justify-between space-x-4'>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Navbar;