const brands = ['nike', 'adibas', 'lacoste', 'calvin kleyn']

const brandComA = brands.filter((brand) => {
    return brand.includes('d')
})

console.log(brandComA)