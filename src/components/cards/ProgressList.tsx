"use client"

import { itemProps } from '@/types/ProgressListType'
import React, { useState } from 'react'
import { LuCircleCheck } from 'react-icons/lu'
import '@/styles/ProgressList.css'

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

    function isItemComplete(item: itemProps): boolean {
        if (!item.tipoDeTaxa.trim()) return false
        if (item.contar !== true) return false
        if (!item.taxa.adicionarTaxa) return false
        if (!item.taxa.taxas || item.taxa.taxas.length < 5) return false

        for (const taxa of item.taxa.taxas) {
            if (!taxa.NUTS2.trim()) return false
            if (!taxa.NUTS3.trim()) return false
            if (!taxa.concelho.trim()) return false
            if (typeof taxa.taxa !== 'number' || taxa.taxa < 0) return false
        }

        return true
    }

    function getItemProgress(item: itemProps): number {
        let filled = 0
        let total = 4 // tipoDeTaxa, contar, adicionarTaxa, taxas completas

        if (item.tipoDeTaxa.trim()) filled++
        if (item.contar === true) filled++
        if (item.taxa.adicionarTaxa) filled++

        if (item.taxa.taxas.length >= 5) {
            const allValid = item.taxa.taxas.every(t =>
                t.NUTS2.trim() &&
                t.NUTS3.trim() &&
                t.concelho.trim() &&
                typeof t.taxa === 'number' && t.taxa >= 0
            )
            if (allValid) filled++
        }

        return filled / total
    }

    return (
        <div className="progress-list-card">
            {items.map((item, index) => {
                const isSelected = itemIndex === index
                const progress = getItemProgress(item)
                const complete = isItemComplete(item)

                return (
                    <button
                        key={index}
                        style={{
                            color: isSelected ? '#6057EE' : '',
                            background: isSelected ? '#ECF4F666' : '',
                            borderLeftWidth: isSelected ? 1 : 0,
                            borderLeftColor: isSelected ? '#6057EE' : ''
                        }}
                        onClick={() => onPressItem(item, index)}
                        className="progress-item"
                    >
                        <span>Opção {index + 1}</span>

                        {complete ? (
                            <LuCircleCheck size={20} className="icon-check" />
                        ) : (
                            <div
                                className="progress-ring"
                                style={{
                                    background: `conic-gradient(#6057EE ${progress * 360}deg, #ccc ${progress * 360}deg)`
                                }}
                            />
                        )}
                    </button>
                )
            })}
        </div>
    )
}
