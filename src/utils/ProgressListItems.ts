import { itemProps } from "@/types/ProgressListType"

export const progressListItems: itemProps[] = [
    {
        tipoDeTaxa: 'Anual',
        contar: true,
        taxa: {
            adicionarTaxa: true,
            NUTS2: 'Norte',
            NUTS3: 'Ave',
            concelho: 'Fafe',
            taxa: 25,
        }
    },
    {
        tipoDeTaxa: 'Mensal',
        contar: false,
        taxa: {
            adicionarTaxa: true,
            NUTS2: 'Norte',
            NUTS3: 'Área Metropolitana do Porto',
            concelho: 'Matosinhos',
            taxa: 75,
        }
    },
]