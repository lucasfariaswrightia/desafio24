"use client"

import ProgressList from '@/components/cards/ProgressList'
import Divider from '@/components/global/Divider'
import '@/styles/Home.css'
import { useState } from "react"
import { LuArrowLeft, LuCheck, LuPencil, LuSave } from 'react-icons/lu'
import { progressListItems as li } from '@/utils/ProgressListItems'



export default function Home() {

  const [listItems, setListItems] = useState(li)

  return (
    <main>
      {/* CONTENT HEADER */}
      <div className='container content-header'>
        {/* left part (first-child) */}
        <div>
          <button>
            <LuArrowLeft size={30} style={{ paddingBottom: 10 }} className='icon' />
          </button>

          <div>
            <p style={{ fontSize: 12, fontWeight: 300 }}>AVISOS</p>
            <h1>NOVO AVISO</h1>
          </div>

          <div>
            <LuPencil size={18} />
            <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1.7 }}>EM PREENCHIMENTO</span>
          </div>
        </div>

        {/* right part (last-child) */}
        <div>
          <button>
            <LuSave />
            <span>Guardar Alterações</span>
          </button>

          <button>
            Validar
          </button>

          <button disabled>
            <LuCheck />
            Publicar
          </button>
        </div>
      </div>

      <Divider color='#E5E7EB' size='small' />

      <div className='container'>
        <div className='main-content'>
          <aside>
            <ProgressList
              items={listItems}
            />
          </aside>

          <div>
            <h2>Conteúdo Principal</h2>
            <p>Este é o conteúdo principal da página que ficará ao lado do card fixo.</p>

            {/* Conteúdo para testar o scroll */}
            {Array(60).fill("").map((_, index) => (
              <p key={index}>Linha de conteúdo {index + 1} para testar o scroll</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}