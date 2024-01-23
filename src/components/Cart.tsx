import { useAppDispatch } from '@/redux/hook'
import { CartProduct } from '@/types'
import { formatCurrency } from '@/utils/currency'
import { customerActions } from '@/redux/customer/customerSlice'

import { IoCartOutline } from "react-icons/io5";
import { FaMinus, FaTrash, FaPlus, } from "react-icons/fa";
import {
  MenuItem,
  Button,
  Menu,
  MenuList,
  Typography,
  Collapse,
} from '@mui/material'


import Image from 'next/image'
import React, { useState } from 'react'

export function CartMenu({ cartProducts }: { cartProducts: CartProduct[] }) {
  const dispatch = useAppDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderItems = cartProducts.map((cartProduct) => {
    const cartTotalPrice = cartProduct.price * cartProduct.quantity

    return (
      <MenuItem
        key={cartProduct.id}
        className="flex w-[400px] items-center justify-between rounded-lg hover:bg-white"
      >
        <div className="flex items-center gap-3">
          <Image
            width={80}
            height={80}
            src={cartProduct.thumbnail}
            alt={cartProduct.title}
            className="rounded"
          />
          <div className="flex w-60 flex-col gap-3">
            <span className="text-xs font-bold text-primary">
              {cartProduct.title}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="text"
                className="p-1"
                onClick={() => {
                  cartProduct.quantity > 1
                    ? dispatch(customerActions.decreaseQuantity(cartProduct))
                    : dispatch(customerActions.removeFromCart(cartProduct))
                }}
              >
                {cartProduct.quantity > 1 ? (
                  <FaMinus className="h-4 w-4 text-main" />
                ) : (
                  <FaTrash className="h-4 w-4 text-main" />
                )}
              </Button>
              <span className="text-xs font-bold text-primary">
                {cartProduct.quantity}
              </span>
              <Button
                variant="text"
                className="p-1"
                onClick={() =>
                  dispatch(customerActions.increaseQuantity(cartProduct))
                }
              >
                <FaPlus className="h-4 w-4 text-main" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium">
            {formatCurrency(cartTotalPrice)}
          </span>
        </div>
      </MenuItem>
    )
  })

  return (
    <React.Fragment>
      <Menu
    
       id="account-menu"
      
        open={isMenuOpen}
        //  ={setIsMenuOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorEl={document.getElementById("account-menu")}
        onClose={() => setIsMenuOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'account-menu',
        }}


      >
        
        <MenuList>
          <Button
            variant="text"
            
            color="secondary"
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            className="relative"
          >
            <IoCartOutline className="h-5 w-5 text-primary" />
            {cartProducts.length > 0 && (
              <span className="absolute right-2 top-[10px] text-xs font-normal text-primary">
                {cartProducts.length}
              </span>
            )}
          </Button>
        </MenuList>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          {cartProducts.length > 0 ? (
            <>
              <Typography variant="h5" className="mb-2 font-bold">
                Cart
              </Typography>
              <ul className="gap-y-2 border-b border-b-main outline-none outline-0">
                {renderItems}
              </ul>
              <div className="flex items-center justify-between py-2">
                <Typography variant="h6" className="font-bold">
                  Total
                </Typography>
                <Typography variant="h6" className="font-bold">
                  {formatCurrency(
                    cartProducts.reduce(
                      (acc, cur) => acc + cur.price * cur.quantity,
                      0,
                    ),
                  )}
                </Typography>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center gap-2 p-4">
              <Typography variant="h6" className="font-bold">
                Your cart is empty
              </Typography>
            </div>
          )}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse
        
         >{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}
