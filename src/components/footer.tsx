'use client'

import { Button, Input } from "@material-ui/core";
// import Button from '@mui/material/Button';
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer>
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-1.5xl items-center justify-between border-b border-b-[#E6E6E6] px-12 py-[70px] md:py-10 lg:px-0">
          <Link href="/">
            <h1 className="text-2xl font-bold">Bandage</h1>

          </Link>
          <div className="flex space-x-5">
            <Link href="/">
              <FaFacebook className="h-6 w-6 text-primary" />
            </Link>
            <Link href="/">
              <FaInstagram className="h-6 w-6 text-primary" />
            </Link>
            <Link href="/">
              <FaTwitter className="h-6 w-6 text-primary" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-1.5xl flex-col flex-nowrap gap-[30px] px-12 py-[50px] md:flex-row md:flex-wrap lg:px-0">
          <div className="flex w-[150px] flex-col space-y-5">
            <span className="font-bold">Company Info</span>
            <div className="flex flex-col space-y-[10px]">
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Bandage
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Carrier
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  We are hiring
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Blog
                </span>
              </Link>
            </div>
          </div>

          <div className="flex w-[150px] flex-col space-y-5">
            <span className="font-bold">Legal</span>
            <div className="flex flex-col space-y-[10px]">
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Bandage
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Carrier
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  We are hiring
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Blog
                </span>
              </Link>
            </div>
          </div>

          <div className="flex w-[150px] flex-col space-y-5">
            <span className="font-bold">Features</span>
            <div className="flex flex-col space-y-[10px]">
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Business Marketing
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  User Analytic
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Live Chat
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Unlimited Support
                </span>
              </Link>
            </div>
          </div>

          <div className="flex w-[150px] flex-col space-y-5">
            <span className="font-bold">Resources</span>
            <div className="flex flex-col space-y-[10px]">
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  IOS & Android
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Watch a Demo
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  Customers
                </span>
              </Link>
              <Link href="/">
                <span className="text-sm font-bold text-secondary-gray">
                  API
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-grow flex-col space-y-5">
            <span className="font-bold">Get In Touch</span>
            <div className="flex flex-col space-y-5">
              <div className="relative flex w-full">
                <Input
                  type="email"
                  className="!h-[58px] bg-[#F9F9F9] py-[15px] pl-5 pr-16 text-sm"
                  placeholder="Your Email"
                />
                
                <Button
                variant="contained"
                color="secondary"

                
                  className="!absolute right-0 top-0 !h-[58px] rounded-none rounded-r bg-primary px-[22.5px] text-sm font-normal capitalize"
                >
                  Subscribe
                </Button>
              </div>
              <span className="text-xs text-secondary-gray">
                Lore imp sum dolor Amit
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-screen-1.5xl justify-center px-12 py-[25px] lg:px-0">
        <span className="w-[200px] text-center text-sm font-bold text-secondary-gray md:w-full md:text-left">
          Made With Love By Finland All Right Reserved
        </span>
      </section>
    </footer>
  )
}
