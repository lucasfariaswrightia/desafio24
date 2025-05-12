"use client"

import React from 'react'
import '@/styles/Table.css'
import { itemProps } from '@/types/ProgressListType'
import { LuPlus, LuTrash } from 'react-icons/lu'
import { FaAnglesLeft, FaAnglesRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useSelectedItems } from '@/contexts/ItemsContext'
import SelectedItemsBottomSheet from '../global/BottomSheet'

interface props {
  item: itemProps
  setItem: (value: any, field: keyof itemProps['taxa']) => void
}

export default function RenderItemTable({ item, setItem }: props) {
  const { taxa } = item
  
  const { 
    selectedItems, 
    selectAll, 
    handleRowSelect, 
    handleSelectAll,
    handleClearSelection
  } = useSelectedItems()

  // Remove uma taxa do array por índice
  const handleRemoveTaxa = (index: number) => {
    const novasTaxas = taxa.taxas.filter((_, i) => i !== index)
    setItem(novasTaxas, 'taxas')
  }

  // Handle removing all selected items
  const handleRemoveSelectedTaxas = () => {
    const novasTaxas = taxa.taxas.filter((_, index) => !selectedItems.includes(index))
    setItem(novasTaxas, 'taxas')
    handleClearSelection()
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

        {/* Add button */}
        <button className='add-taxa'>
          <LuPlus size={15} />
          <span>Adicionar Taxa</span>
        </button>
      </div>

      {/* TABELA */}
      <div className='taxa-table-wrapper'>
        <table className="taxa-table">
          <thead>
            <tr>
              <th className="checkbox-cell">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectAll && taxa.taxas.length > 0}
                    onChange={() => handleSelectAll(taxa.taxas.length)}
                    disabled={taxa.taxas.length === 0}
                  />
                  <span className="checkmark"></span>
                </label>
              </th>
              <th>NUTS II</th>
              <th>NUTS III</th>
              <th>Concelho</th>
              <th>Taxa</th>
              <th>Ações</th>
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
                  className={selectedItems.includes(index) ? 'selected' : ''}
                >
                  <td className="checkbox-cell">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(index)}
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
      </div>

      {/* PAGINAÇÃO SIMPLES */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        fontSize: '14px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <span>1 de 1 página ({taxa.taxas.length} itens)</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <select style={{ padding: '2px 5px' }} className='text-[var(--primary-color)]'>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <span>itens por página</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          fontWeight: "bold"
        }}
        className='text-[var(--primary-color)]'
        >
          <span>{`<<`}</span>
          <span>{`<`}</span>
          <div style={{ padding: 5, backgroundColor: "var(--light-secondary-color)", borderRadius: 100, height: 30, width: 30, textAlign: "center" }}>
            1
          </div>
          <div style={{ padding: 5, borderRadius: 100, height: 30, width: 30, textAlign: "center", color: "grey" }}>
            2
          </div>
          <span>{`>`}</span>
          <span>{`>>`}</span>

        </div>

      </div>

      {/* Bottom sheet for selected items */}
      <SelectedItemsBottomSheet
        onDelete={handleRemoveSelectedTaxas}
        itemLabel="taxa"
      />
    </div>
  )
}