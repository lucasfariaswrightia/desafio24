"use client"

import '@/styles/NavBar.css'
import React from 'react'
import Image from 'next/image'
import { LuSearch, LuInbox, LuSettings } from 'react-icons/lu'

export default function NavBar() {
    return (
        <div className='navbar-container'>

            {/* Left content */}
            <div>
                {/* Logo and Menu */}
                <Image
                    src={'/assets/images/desafio24-logo.png'}
                    width={38}
                    height={38}
                    alt='Logo-Desafio24'
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
                            src="/assets/images/profile-desafio24.jpg"
                            alt="Profile-Desafio24"
                            fill
                            className="profile-image"
                        />
                    </div>
                    <div>
                        <span>Erik Frings</span>
                        <span>Perfil 1 - Entidade 0</span>
                    </div>
                </button>

            </div>

        </div>
    )
}
