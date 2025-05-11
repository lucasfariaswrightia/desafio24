"use client"

import React from 'react'
import { itemProps } from '@/types/ProgressListType'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import CustomSelect from '../ui/CustomSelect'
import RenderItemTable from './RenderItemTable'

interface props {
    item: itemProps
    index: any
    setItem: (item: itemProps) => void
}

export default React.memo(function RenderItemContent({ item, index, setItem }: props) {

    return (
        <div className='rendered-content'>

            {/* content header */}
            <div>

                {/* item title */}
                <h2>Opção {index + 1}</h2>

                {/* previous and next button */}
                <div>

                    {/* previous button */}
                    <button>
                        <div
                            style={{
                                height: 32,
                                width: 32,
                                borderRadius: 16,
                                backgroundColor: '#E5E7EB',
                                alignContent: 'center',
                                justifyItems: 'center'
                            }}
                        >
                            <LuChevronLeft className='icon' size={20} />
                        </div>
                        <span>ANTERIOR</span>
                    </button>

                    {/* next button */}
                    <button>
                        <span>SEGUINTE</span>
                        <div
                            style={{
                                height: 32,
                                width: 32,
                                borderRadius: 16,
                                backgroundColor: '#DFDDFC',
                                alignContent: 'center',
                                justifyItems: 'center'
                            }}
                        >
                            <LuChevronRight className='icon' size={20} />
                        </div>
                    </button>

                </div>

            </div>

            <p className='text-[var(--primary-color)]' style={{ fontSize: 14 }}>* Campos de preenchimento obrigatório</p>

            {/* TIPO DE TAXA */}
            <section className="card">

                <h3>Tipo de taxa</h3>

                <span>Adicionar tipo de taxa</span>

                <CustomSelect
                    itens={['Mensal', 'Anual']}
                    value={item.tipoDeTaxa}
                    onChange={(newValue) => setItem({ ...item, tipoDeTaxa: newValue })}
                    />

            </section>

            {/* CONTAR */}
            <section className='card'>

                <h3>Contar *</h3>

                <div className='d-flex radio-group'>
                    <label className="radio-label">
                        <input
                            name='contar'
                            type='radio'
                            className='radio-button'
                            checked={item.contar === true}
                            onChange={() => setItem({ ...item, contar: true })}
                            />
                        <span className="custom-radio" /> Sim
                    </label>

                    <label className="radio-label">
                        <input
                            name='contar'
                            type='radio'
                            className='radio-button'
                            checked={item.contar === false}
                            onChange={() => setItem({ ...item, contar: false })}
                            />
                        <span className="custom-radio" /> Não
                    </label>
                </div>

            </section>
            
            {/* TABELA DA TAXA */}
            <section className='card'>
                <RenderItemTable
                    item={item}
                    setItem={(value: any, field: keyof itemProps['taxa']) => setItem({ ...item, taxa: { 
                        ...item.taxa, [field]: value
                    }})}
                />
            </section>

        </div>
    )
})
