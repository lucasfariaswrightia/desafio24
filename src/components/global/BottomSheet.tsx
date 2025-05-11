"use client"

import React from 'react'
import { useSelectedItems } from '@/contexts/ItemsContext'
import { LuTrash, LuX } from 'react-icons/lu'

interface BottomSheetProps {
  onDelete: () => void
  itemLabel?: string
}

export default function SelectedItemsBottomSheet({ onDelete, itemLabel = 'item' }: BottomSheetProps) {
  const { selectedItems, handleClearSelection } = useSelectedItems()
  
  // Don't render if no items are selected
  if (selectedItems.length === 0) return null
  
  const itemsCount = selectedItems.length
  const itemText = itemsCount === 1 ? itemLabel : `${itemLabel}s`
  
  return (
    <div className="bottom-sheet">
      <div className="bottom-sheet-content">
        <div className="selected-count">
          <span>{itemsCount} {itemText} selecionada{itemsCount !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="action-buttons">
          <button 
            className="cancel-button" 
            onClick={handleClearSelection}
          >
            <span>CANCELAR</span>
          </button>
          
          <button 
            className="delete-button" 
            onClick={onDelete}
          >
            <span>ELIMINAR</span>
          </button>
        </div>
      </div>
    </div>
  )
}