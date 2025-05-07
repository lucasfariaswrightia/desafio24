"use client"

import React from 'react'
import { itemProps } from '@/types/ProgressListType'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface props {
    item: itemProps
    index: any
}

export default React.memo(function RenderItemContent({ item, index }: props) {
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

            <div className="card">

                <h3>Tipo de taxa</h3>

                <span>Adicionar tipo de taxa</span>

                <div className="custom-select-wrapper">
                    <select name="tipo_de_taxa" id="tipo_de_taxa">
                        <option value="opcao1">Selecionar</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                </div>

            </div>

        </div>
    )
})
