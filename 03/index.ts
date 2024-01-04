const tabuada = (numeros: number[]): string => {

    let obterResultado: string = ''

    for (const n of numeros) {
        for (let i = 0; i <= 10; i++) {

            obterResultado += `${n} x ${i} = ${n * i} \n `

            if (i === 10) {
                obterResultado += '---------- \n'
            }
        }
    }
    return obterResultado
}

console.log(tabuada([4, 10, 2]))