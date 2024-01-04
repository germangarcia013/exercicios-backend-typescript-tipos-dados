const soletrar = (text: string): string => {
    return text.split('').join('-')
}

console.log(soletrar('programador'))