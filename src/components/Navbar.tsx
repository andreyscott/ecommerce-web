'use client'

import { CartMenu } from '@/components/Cart'
import { FavoritesMenu } from '@/components/Favorties'
import { useAppSelector } from '@/redux/hook'
import {
  getCartProducts,
  getFavoriteProducts,
} from '@/redux/customer/customerSelector'

import { IconType } from 'react-icons';

import { FaXmark, FaMagnifyingGlass, FaMicroblog, FaTag, FaRegRectangleList  } from "react-icons/fa6";

import { FaUser, FaBars, FaChevronDown, FaPhoneAlt, FaRegNewspaper } from "react-icons/fa";

import { LuGanttChartSquare } from "react-icons/lu";

import { IoMdSunny } from "react-icons/io";

import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
AppBar,
  MenuList,
  MenuItem,
} from '@mui/material'

// import {  MenuHandler } from '@material-ui/core';
import Link from 'next/link'
import React, { useState } from 'react'

const navListMenuItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: <LuGanttChartSquare className="h-6 w-6" />,
  },
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
    icon: <FaUser className="h-6 w-6" />,
  },
  {
    title: 'Blog',
    description: 'Find the perfect solution for your needs.',
    icon: <FaMicroblog className="h-6 w-6" />,
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: <IoMdSunny  className="h-6 w-6" />,
  },
  {
    title: 'Support',
    description: 'Reach out to us for assistance or inquiries',
    icon: <LuGanttChartSquare className='h-6 w-6' />,
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: <FaPhoneAlt className="h-6 w-6" />,
  },
  {
    title: 'News',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon:<FaRegNewspaper  className="h-6 w-6" />,
  },
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: <FaRegRectangleList className="h-6 w-6" />,
  },
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: FaTag,
  },
]

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {' '}
            {icon && React.cloneElement(icon as any, { className: 'h-6 w-6' } as any, null)}


          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  )

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
    
        
      >
        <MenuItem>
          <Typography  className="font-medium">
            <ListItem
              className="flex items-center gap-2 px-2 py-2 pr-2 font-medium text-main"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Shop
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuItem>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        variant='h5'
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          About
        </ListItem>
      </Typography>
      <Typography
       
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Blog
        </ListItem>
      </Typography>
      <Typography
       color='blue-gray'
        variant="h6"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Contact
        </ListItem>
      </Typography>
      <Typography
       
        variant="h6"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Pages
        </ListItem>
      </Typography>
    </List>
  )
}

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false)
  const favoriteProducts = useAppSelector(getFavoriteProducts)
  const cartProducts = useAppSelector(getCartProducts)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    )
  }, [])

  return (
    <header>
      <AppBar className="max-w-full rounded-none px-4 py-2">
        <div className="mx-auto flex max-w-screen-3xl items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-[119px]">
            <a href='/'>

            <Typography
            
              variant="h6"
              className="cursor-pointer py-1.5 text-2xl font-bold lg:ml-2"
            >
              Bandage
            </Typography>
            </a>

            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="text"
              
              className="flex items-center gap-2 text-sm capitalize text-primary"
            >
              <FaUser className="h-4 w-4" />
              Log In / Register
            </Button>
            <Button variant="text" >
              <FaMagnifyingGlass className="h-5 w-5 text-primary" />
            </Button>
            <CartMenu cartProducts={cartProducts} />
            <FavoritesMenu products={favoriteProducts} />
          </div>
          <IconButton
            
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <FaXmark className="h-6 w-6" strokeWidth={2} />
            ) : (
              <FaBars className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              variant="text"
             
              className="flex items-center gap-2 text-sm capitalize text-primary"
              fullWidth
            >
              <FaUser className="h-4 w-4" />
              Log In / Register
            </Button>
          </div>
        </Collapse>
      </AppBar>
    </header>
  )
}
