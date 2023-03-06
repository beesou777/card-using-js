// import card data
import cardData from './cards.js'

// get container class 
const container = document.querySelector('.container')

// styling the container
container.style.fontFamily = 'sans-serif'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.flexWrap = 'wrap'

// getting the data using forEach loop 

cardData.forEach((data)=>{
    // creating a carddiv
    const cardDiv = document.createElement('div')
    container.append(cardDiv)

    // crating a title 
    const title = document.createElement('h1')
    title.textContent = data.title

    // creating a contact 
    const contact = document.createElement('h4')
    contact.textContent = data.contact

    // creating an email part
    const email = document.createElement('h2')
    email.textContent = data.email

    // append those content to card div
    cardDiv.append(title)
    cardDiv.append(contact)
    cardDiv.append(email)

    // styling the card
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const bgColor = `rgb(${r},${g},${b})`
    cardDiv.style.background = bgColor
    cardDiv.style.margin = '30px'
    cardDiv.style.height = '200px'
    cardDiv.style.width = '300px'
    cardDiv.style.textAlign = 'center'
    cardDiv.style.borderRadius = '8px'

    // styling the title contact and email at once 
    const color = [title,contact,email]
    color.forEach((ele)=>{
        ele.style.color = '#fff'
        ele.style.letterSpacing = '2px'
    })
})
