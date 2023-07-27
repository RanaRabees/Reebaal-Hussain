"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { IoMdMenu, IoMdClose } from "react-icons/io"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <header className="w-screen mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-[#3A3AFC]">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                        <Link href="/">
                            <div className="container flex items-center space-x-2">
                                <h2 className="text-2xl text-sky-50 hover:cursor-pointer font-bold"><a href="#headersection">Rana Reebaal</a></h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>

                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <Link
                                href="#headersection"
                                className={
                                    "block lg:inline-block hover:cursor-pointer text-white  hover:text-neutral-200 dark:text-neutral-100"
                                }
                                onClick={() => setNavbar(!navbar)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#aboutsection"
                                className={
                                    "block lg:inline-block hover:cursor-pointer text-white  hover:text-neutral-200 dark:text-neutral-100"
                                }
                                onClick={() => setNavbar(!navbar)}
                            >
                                About Me
                            </Link>
                            <Link
                                href="#projectssection"
                                className={
                                    "block lg:inline-block hover:cursor-pointer text-white  hover:text-neutral-200 dark:text-neutral-100"
                                }
                                onClick={() => setNavbar(!navbar)}
                            >
                                My Projects
                            </Link>
                            <Link
                                href="#footersection"
                                className={
                                    "block lg:inline-block hover:cursor-pointer text-white  hover:text-neutral-200 dark:text-neutral-100"
                                }
                                onClick={() => setNavbar(!navbar)}
                            >
                                Join Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
