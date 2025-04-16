

export interface itemProps {
    tipoDeTaxa: string
    contar: boolean
    taxa: {
        adicionarTaxa: boolean
        NUTS2: string
        NUTS3: string
        concelho: string
        taxa: number
    }
}
