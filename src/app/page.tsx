"use client"

import ProgressList from '@/components/cards/ProgressList'
import Divider from '@/components/global/Divider'
import '@/styles/Home.css'
import '@/styles/BottomSheet.css'
import { useCallback, useState } from "react"
import { LuArrowLeft, LuCheck, LuPencil, LuSave } from 'react-icons/lu'
import { progressListItems as li } from '@/utils/ProgressListItems'
import { itemProps } from '@/types/ProgressListType'
import RenderItemContent from '@/components/cards/RenderItemContent'



export default function Home() {

  const [listItems, setListItems] = useState<itemProps[]>(li)
  const [itemContent, setItemContent] = useState<itemProps>(li[0])

  const handleSelectItem = useCallback((item: itemProps) => {
    setItemContent(item)
  }, [])

  const handleUpdateItem = useCallback((item:itemProps) => {
    setListItems(prev =>
      prev.map(i => i.id === item.id ? item : i)
    )
    setItemContent(item)
  }, [])

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
              setItemSelected={handleSelectItem}
            />
          </aside>

          {itemContent &&
            <RenderItemContent
              item={itemContent}
              index={listItems.findIndex(i => i.id === itemContent.id)}
              setItem={(updatedItem) => handleUpdateItem(updatedItem)}
            />
          }
        </div>
      </div>
    </main>
  )
}