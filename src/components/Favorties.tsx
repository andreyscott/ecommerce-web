import { useAppDispatch } from '@/redux/hook'
import { Product } from '@/types'
import { customerActions } from '@/redux/customer/customerSlice'
import { FaTrash, FaHeart } from 'react-icons/fa6'
import {
    MenuItem,
    Button,
    Menu,
    IconButton, // Updated import
    MenuList,
    Typography,
    Collapse,
} from '@material-ui/core'
import Image from 'next/image'
import React, { useState } from 'react'

export function FavoritesMenu({ products }: { products: Product[] }) {
    const dispatch = useAppDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const renderItems = products.map((product) => (
        <MenuItem
            key={product.id}
            className="flex w-[400px] items-center justify-between gap-3 rounded-lg hover:bg-white"
        >
            <div className="flex items-center gap-3">
                <Image
                    width={80}
                    height={80}
                    src={product.thumbnail}
                    alt={product.title}
                    className="rounded"
                />
                <div className="flex w-80 flex-col gap-3">
                    <span className="text-xs font-bold text-primary">
                        {product.title}
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <Button
                    variant="text"
                    className="p-1"
                    onClick={() => dispatch(customerActions.addToFavorites(product))}
                >
                    <FaTrash className="h-4 w-4 text-main" />
                </Button>
            </div>
        </MenuItem>
    ))

    return (
        <React.Fragment>
            <Menu
                    open={isMenuOpen}
                    
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={() => setIsMenuOpen(false)}
                    MenuListProps={{
                      'aria-labelledby': 'account-menu',
                    }}

               
            >
                <IconButton // Updated component
                    color="primary"
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                    className="relative"
                >
                    <FaHeart className="h-5 w-5 text-primary" />
                    {products.length > 0 && (
                        <span className="absolute right-2 top-[10px] text-xs font-normal text-primary">
                            {products.length}
                        </span>
                    )}
                </IconButton>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    {products.length > 0 ? (
                        <>
                            <Typography variant="h5" className="mb-2 font-bold">
                                Favorites
                            </Typography>
                            <ul className="gap-y-2 outline-none outline-0">{renderItems}</ul>
                        </>
                    ) : (
                        <div className="flex items-center justify-center gap-2 p-4">
                            <Typography variant="h6" className="font-bold">
                                Your have no favorites
                            </Typography>
                        </div>
                    )}
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    )
}
