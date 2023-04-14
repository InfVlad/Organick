'use client';

import type { FC } from 'react';
import SiteLogo from '~/components/ui/SiteLogo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/Navigation-menu';
import Link from 'next/link';

interface Page {
  name: string;
  href: string;
}

const pages: Page[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Shop',
    href: '/shop',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'News',
    href: '/news',
  },
];

const MenuItem: FC<Page> = ({ name, href }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const Navbar: FC = () => {
  return (
    <div className='flex'>
      <SiteLogo />
      <NavigationMenu>
        <NavigationMenuList>
          {pages.map(({ name, href }) => (
            <MenuItem key={name} name={name} href={href} />
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='self-center'>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
