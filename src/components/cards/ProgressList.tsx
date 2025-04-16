"use client"

import { itemProps } from '@/types/ProgressListType'
import React, { useState } from 'react'
import { LuCircleCheck } from 'react-icons/lu'

interface props {
    items: itemProps[]
}

export default function ProgressList({ items }: props) {

    const [itemSelected, setItemSelected] = useState(0)

    function onPressItem(item: itemProps, index: number) {
        setItemSelected(index)
    }

    return (
        <div className="progress-list-card">

            {items.map((i, index) => {
                return (
                    <button
                        style={{
                            color: itemSelected == index ? '#6057EE' : '',
                            background: itemSelected == index ? '#ECF4F666' : '',
                            borderLeftWidth: itemSelected == index ? 1 : 0,
                            borderLeftColor: itemSelected == index ? '#6057EE' : ''
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