import { itemProps } from "@/types/ProgressListType"

export const progressListItems: itemProps[] = [
    {
        id: 1,
        tipoDeTaxa: 'Anual',
        contar: true,
        taxa: {
            adicionarTaxa: true,
            taxas: [
                {
                    NUTS2: 'Norte',
                    NUTS3: 'Ave',
                    concelho: 'Fafe',
                    taxa: 25
                },
                {
                    NUTS2: 'Norte',
                    NUTS3: 'Área Metropolitana do Porto',
                    concelho: 'Matosinhos',
                    taxa: 75,
                }
            ]
        }
    },
    {
        id: 2,
        tipoDeTaxa: 'Mensal',
        contar: false,
        taxa: {
            adicionarTaxa: true,
            taxas: [
                {
                    NUTS2: 'Norte',
                    NUTS3: 'Área Metropolitana do Porto',
                    concelho: 'Matosinhos',
                    taxa: 75,
                }
            ]
        }
    },
]