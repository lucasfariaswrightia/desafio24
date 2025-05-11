interface TaxaItem {
    NUTS2: string
    NUTS3: string
    concelho: string
    taxa: number
}

export interface itemProps {
    id: number
    tipoDeTaxa: string
    contar: boolean
    taxa: {
        adicionarTaxa: boolean
        taxas: TaxaItem[]
    }
}