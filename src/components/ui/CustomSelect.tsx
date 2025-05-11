"use client"

import { useState, useEffect, useRef } from 'react'
import { LuChevronDown } from 'react-icons/lu'

interface props {
    itens: string[]
    value: string
    onChange: (item: string) => void
}

export default function CustomSelect({ itens, value, onChange }: props) {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLButtonElement>(null)

    const toggleDropdown = () => setIsOpen(prev => !prev)

    function handleSelectItem(item: string) {
        onChange(item) 
        setIsOpen(false)
    }

    // fechar o select ao tocar fora
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <button ref={ref} className="custom-select-wrapper" onClick={toggleDropdown} type="button">

            <span>{value}</span>

            <LuChevronDown
                style={{
                    rotate: !isOpen ? "0deg" : "180deg",
                    transition: ".3s"
                }}
            />

            {isOpen &&
                <div className="select-dropdown">
                    <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {itens.map((i, index) => (
                            <li key={index} onClick={() => handleSelectItem(i)}>
                                {i}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </button>
    )
}
