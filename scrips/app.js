import {Outfits} from "./producto.js"


function createCardOutfit (Outfits){
    const  containersOutfit= document.createElement('div')
    containersOutfit.classList.add('Outfits')
    containersOutfit.id = Outfits.id

    const img= document.createElement('img')
    img.src = Outfits.img
    img.alt = Outfits.product

    const nameOutfit = document.createElement('h3')
    nameOutfit.textContent = Outfits.product

    const priceOutfit = document.createElement('p')
    priceOutfit.textContent = Outfits.priceOutfit

    const btnOutfit = document.createElement('button')
    btnOutfit.textContent = 'Agregar al carrito'

    containersOutfit.appendChild(img)
    containersOutfit.appendChild(nameOutfit)
    containersOutfit.appendChild(priceOutfit)
    containersOutfit.appendChild(btnOutfit)

    containerProducts.appendChild(containersOutfit)
}

function renderOutfit () {
    Outfits.forEach(Outfits => createCardOutfit(Outfits) )

}

