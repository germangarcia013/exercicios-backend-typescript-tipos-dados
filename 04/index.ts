const gerarEtiqueta = (info: { produto: string, lote: number, ano: number, qtd: number }): string[] => {

    const obterResultado: string[] = []

    for (let i = 1; i < info.qtd; i++) {
        obterResultado.push(`${info.lote}-${info.ano}-${i.toString().padStart(3, '0')}`)

    }
    return obterResultado
}

console.log(gerarEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}))