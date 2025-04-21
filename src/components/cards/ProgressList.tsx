"use client"

import { itemProps } from '@/types/ProgressListType'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { LuCircleCheck } from 'react-icons/lu'

interface props {
    items: itemProps[]
    setItemSelected: (item: itemProps) => void
}

export default function ProgressList({ items, setItemSelected }: props) {

    const [itemIndex, setItemIndex] = useState(0)

    function onPressItem(item: itemProps, index: number) {
        setItemSelected(item)
        setItemIndex(index)
    }

    return (
        <div className="progress-list-card">

            {items.map((i, index) => {
                return (
                    <button
                        key={index}
                        style={{
                            color: itemIndex == index ? '#6057EE' : '',
                            background: itemIndex == index ? '#ECF4F666' : '',
                            borderLeftWidth: itemIndex == index ? 1 : 0,
                            borderLeftColor: itemIndex == index ? '#6057EE' : ''
                        }}
                        onClick={() => onPressItem(i, index)}
                    >
                        <span>Opção {index + 1}</span>
                        <LuCircleCheck size={20} className='icon-check' />
                    </button>
                )
            })}


        </div>
    )
}