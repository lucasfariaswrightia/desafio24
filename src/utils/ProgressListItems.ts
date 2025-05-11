import { itemProps } from "@/types/ProgressListType"

const emptyItem = (id: number): itemProps => ({
  id,
  tipoDeTaxa: '',
  contar: false,
  taxa: {
    adicionarTaxa: false,
    taxas: []
  }
})

const createFilledItem = (id: number, tipoDeTaxa: string, contar: boolean): itemProps => ({
  id,
  tipoDeTaxa,
  contar,
  taxa: {
    adicionarTaxa: true,
    taxas: [
      { NUTS2: 'Norte', NUTS3: 'Cávado', concelho: 'Braga', taxa: 20 },
      { NUTS2: 'Norte', NUTS3: 'Ave', concelho: 'Guimarães', taxa: 30 },
      { NUTS2: 'Norte', NUTS3: 'Tâmega e Sousa', concelho: 'Penafiel', taxa: 40 },
      { NUTS2: 'Centro', NUTS3: 'Região de Coimbra', concelho: 'Coimbra', taxa: 50 },
      { NUTS2: 'Lisboa', NUTS3: 'Área Metropolitana de Lisboa', concelho: 'Lisboa', taxa: 60 }
    ]
  }
})

export const progressListItems: itemProps[] = [
  createFilledItem(1, 'Anual', true),
  createFilledItem(2, 'Mensal', false),
  createFilledItem(3, 'Mensal', true),
  createFilledItem(4, 'Anual', false),
  createFilledItem(5, 'Anual', true),
  ...Array.from({ length: 5 }, (_, i) => emptyItem(i + 6))
]
