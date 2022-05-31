fetch('http://localhost:3000/')
    .then(resp => resp.json())
    .then(menu => {
        menu.forEach(item => showMenu(item))
    })
const imageImage = document.createElement('img')
imageImage.src = "https://image.shutterstock.com/image-photo/tasty-roulades-beef-on-plate-600w-603673847.jpg"
document.querySelector('.roulade-image').appendChild(imageImage)

const imageImage2 = document.createElement("img")
imageImage2.src = "https://www.iconsdb.com/icons/preview/white/restaurant-xxl.png"
document.querySelector('#icon').appendChild(imageImage2)

const titleText = document.createElement('p')
titleText.textContent = "G.ItalianoTaste"
document.querySelector('.middlecontainer').appendChild(titleText)




function showMenu(item) {

    if (item.name == 'Honey Walnut Shrimp') {
        const appetizerText = document.createElement('h2')
        appetizerText.textContent = "Appetizer"
        document.querySelector('.middlecontainer').appendChild(appetizerText)

    } else if (item.name == "Nana's Italian Roulade") {
        const mainDishText = document.createElement('h2')
        mainDishText.textContent = "Main Dish"
        document.querySelector('.middlecontainer').appendChild(mainDishText)

    } else {

        const dessertText = document.createElement('h2')
        dessertText.textContent = "Dessert"
        document.querySelector('.middlecontainer').appendChild(dessertText)
    }

    const nameElement = document.createElement('h2')
    nameElement.textContent = item.name
    document.querySelector('.middlecontainer').appendChild(nameElement)

    const descriptionElement = document.createElement('h3')
    descriptionElement.textContent = item.description
    document.querySelector('.middlecontainer').appendChild(descriptionElement)

    const priceElement = document.createElement('h3')
    priceElement.textContent = item.price
    document.querySelector('.rightcontainer').appendChild(priceElement)

}