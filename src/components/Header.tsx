'use client'

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa6'
import { FaEnvelope, FaPhone  } from "react-icons/fa";
export function Header() {
  return (
    <div className="hidden w-full bg-secondary-green px-4 lg:block ">
      <div className="mx-auto flex max-w-screen-3xl h-14 items-center justify-between py-1 text-sm font-bold text-white">
        <div className="flex space-x-[30px]">
          <div className="flex items-center space-x-1">
            <FaPhone className="h-4 w-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="h-4 w-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <span>Follow Us and get a chance to win 80% off</span>
        <div className="flex items-center space-x-2">
          <span>Follow Us :</span>
          <FaInstagram className="h-4 w-4" />
          <FaYoutube className="h-4 w-4" />
          <FaFacebook className="h-4 w-4" />
          <FaTwitter className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}