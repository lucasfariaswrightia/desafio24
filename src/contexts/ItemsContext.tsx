"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react'

// Define context type
interface SelectedItemsContextType {
  selectedItems: number[]
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>
  selectAll: boolean
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>
  handleRowSelect: (id: number) => void
  handleSelectAll: (totalItems: number) => void
  handleClearSelection: () => void
  handleRemoveSelected: (removeAction: (selectedIds: number[]) => void) => void
}

// Create context with default values
const SelectedItemsContext = createContext<SelectedItemsContextType>({
  selectedItems: [],
  setSelectedItems: () => {},
  selectAll: false,
  setSelectAll: () => {},
  handleRowSelect: () => {},
  handleSelectAll: () => {},
  handleClearSelection: () => {},
  handleRemoveSelected: () => {},
})

// Provider component
interface SelectedItemsProviderProps {
  children: ReactNode
}

export const SelectedItemsProvider = ({ children }: SelectedItemsProviderProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [selectAll, setSelectAll] = useState(false)

  // Handle individual row selection
  const handleRowSelect = useCallback((id: number) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        // Deselect the item
        const newSelection = prev.filter(itemId => itemId !== id)
        setSelectAll(false)
        return newSelection
      } else {
        // Select the item
        return [...prev, id]
      }
    })
  }, [])

  // Handle select all rows
  const handleSelectAll = useCallback((totalItems: number) => {
    if (selectAll) {
      // Deselect all
      setSelectedItems([])
      setSelectAll(false)
    } else {
      // Select all - create array of indexes from 0 to totalItems-1
      setSelectedItems([...Array(totalItems).keys()])
      setSelectAll(true)
    }
  }, [selectAll])

  // Clear all selections
  const handleClearSelection = useCallback(() => {
    setSelectedItems([])
    setSelectAll(false)
  }, [])

  // Remove selected items
  const handleRemoveSelected = useCallback((removeAction: (selectedIds: number[]) => void) => {
    if (selectedItems.length === 0) return
    
    removeAction(selectedItems)
    setSelectedItems([])
    setSelectAll(false)
  }, [selectedItems])


  return (
    <SelectedItemsContext.Provider value={{
        selectedItems,
        setSelectedItems,
        selectAll,
        setSelectAll,
        handleRowSelect,
        handleSelectAll,
        handleClearSelection,
        handleRemoveSelected,
    }}>
      {children}
    </SelectedItemsContext.Provider>
  )
}

// Custom hook for using the context
export const useSelectedItems = () => useContext(SelectedItemsContext)