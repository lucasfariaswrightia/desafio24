"use client"

import '@/styles/NavBar.css'
import React, { useState } from 'react'
import Image from 'next/image'
import { LuSearch, LuInbox, LuSettings, LuMenu, LuX } from 'react-icons/lu'

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true)

    return (
        <div className='navbar-container'>

            {/* Left content */}
            <div>
                {/* Logo and Menu */}
                <Image
                    src={'/images/desafio24-logo.png'}
                    width={38}
                    height={38}
                    alt='Logo-Desafio24'
                    priority
                />
                {/* Other features */}
                <ul>
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Avisos</li>
                    </a>
                    <a href="">
                        <li>Entidades</li>
                    </a>
                    <a href="">
                        <li>Candidaturas</li>
                    </a>
                    <a href="">
                        <li>Operações</li>
                    </a>
                </ul>
            </div>


            {/* Right content */}
            <div>
                {/* search  */}
                <button>
                    <LuSearch size={25} />
                </button>

                {/* notification */}
                <button className='inbox'>
                    <LuInbox size={25} />
                    <div className='inbox-notification'></div>
                </button>

                {/* settings */}
                <button>
                    <LuSettings size={25} />
                </button>

                {/* profile */}
                <button className="profile-button">
                    <div className="profile-image-wrapper">
                        <Image
                            src="/images/profile-desafio24.jpg"
                            alt="Profile-Desafio24"
                            fill
                            className="profile-image"
                            sizes='100%'
                        />
                    </div>
                    <div>
                        <span>Erik Frings</span>
                        <span>Perfil 1 - Entidade 0</span>
                    </div>
                </button>

                {/* hamburguer menu button */}
                <button
                    id='menu-hamburguer-button'
                    className='menu-hamburguer'
                    onClick={() => setIsMenuOpen(value => !value)}
                >
                    {isMenuOpen ? <LuX size={25} /> : <LuMenu size={25} />}
                </button>

                {/* dropdown menu for < desktop sizes */}
                {isMenuOpen &&
                    <div className='dropdown-menu'>
                        <ul>
                            <li>
                                <button>
                                    <LuSearch size={25} />
                                    <span>Search</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <LuInbox size={25} />
                                    <span>Notifications</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <LuSettings size={25} />
                                    <span>Settings</span>
                                </button>
                            </li>
                        </ul>
                        {/* profile image on dropdown menu */}
                        <div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Erik Frings</span>
                                <br />
                                <span>Perfil 1 - Entidade 0</span>
                            </div>
                            <div style={{ position: "relative", width: 40, height:40, borderRadius: 100, overflow: "hidden" }}>
                                <Image
                                    src="/images/profile-desafio24.jpg"
                                    alt="Profile-Desafio24"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                }

            </div>



        </div>
    )
}
