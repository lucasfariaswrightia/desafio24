"use client"

import { itemProps } from '@/types/ProgressListType'
import React, { useState } from 'react'
import { LuPlus, LuTrash } from 'react-icons/lu'
import '@/styles/Table.css'

interface props {
  item: itemProps
  setItem: (value: any, field: keyof itemProps['taxa']) => void
}

export default function RenderItemTable({ item, setItem }: props) {
  const { taxa } = item
  
  // State to track selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [selectAll, setSelectAll] = useState(false)

  // Remove uma taxa do array por índice
  const handleRemoveTaxa = (index: number) => {
    const novasTaxas = taxa.taxas.filter((_, i) => i !== index)
    setItem(novasTaxas, 'taxas')
    // Also remove from selected rows
    setSelectedRows(selectedRows.filter(rowIndex => rowIndex !== index))
  }

  // Handle individual row selection
  const handleRowSelect = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(rowIndex => rowIndex !== index))
      setSelectAll(false)
    } else {
      setSelectedRows([...selectedRows, index])
      // Check if all rows are now selected
      if (selectedRows.length + 1 === taxa.taxas.length) {
        setSelectAll(true)
      }
    }
  }

  // Handle select all rows
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([])
    } else {
      setSelectedRows([...Array(taxa.taxas.length).keys()])
    }
    setSelectAll(!selectAll)
  }

  // Remove all selected rows
  const handleRemoveSelected = () => {
    if (selectedRows.length === 0) return
    
    const novasTaxas = taxa.taxas.filter((_, index) => !selectedRows.includes(index))
    setItem(novasTaxas, 'taxas')
    setSelectedRows([])
    setSelectAll(false)
  }

  return (
    <div className='taxa'>

      <h3>Taxa *</h3>

      {/* HEADER */}
      <div className='taxa-header'>
        {/* title with switch */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
          <span>Adicionar taxa por localização</span>

          <label className="switch">
            <input
              type="checkbox"
              checked={taxa.adicionarTaxa}
              onChange={(e) => setItem(e.target.checked, 'adicionarTaxa')}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Buttons */}
          
          <button className='add-taxa'>
            <LuPlus size={15} />
            <span>Adicionar Taxa</span>
          </button>
      </div>

      {/* TABELA */}
      <table className="taxa-table">
        <thead>
          <tr>
            <th className="checkbox-cell">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={selectAll && taxa.taxas.length > 0}
                  onChange={handleSelectAll}
                  disabled={taxa.taxas.length === 0}
                />
                <span className="checkmark"></span>
              </label>
            </th>
            <th>NUTS II</th>
            <th>NUTS III</th>
            <th>Concelho</th>
            <th>Taxa</th>
          </tr>
        </thead>
        <tbody>
          {taxa.taxas.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: '1rem' }}>Nenhuma taxa adicionada.</td>
            </tr>
          ) : (
            taxa.taxas.map((taxaItem, index) => (
              <tr 
                key={index}
                className={selectedRows.includes(index) ? 'selected' : ''}
              >
                <td className="checkbox-cell">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={selectedRows.includes(index)}
                      onChange={() => handleRowSelect(index)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td>{taxaItem.NUTS2}</td>
                <td>{taxaItem.NUTS3}</td>
                <td>{taxaItem.concelho}</td>
                <td>{taxaItem.taxa} %</td>
                <td>
                  <button onClick={() => handleRemoveTaxa(index)}>
                    <LuTrash size={18} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* PAGINAÇÃO SIMPLES */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        fontSize: '14px'
      }}>
        <span>1 de 1 página ({taxa.taxas.length} itens)</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <select style={{ padding: '2px 5px' }}>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span>itens por página</span>
        </div>
      </div>

    </div>
  )
}