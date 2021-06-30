const data = [
  {
    title: 'Apple  iPhone 7 Plus - 128GB - Black - (GSM) Unlocked',
    price: 194.99,
    thumbSrc: 'https://i.ebayimg.com/thumbs/images/g/peQAAOSwJK9bh~Tm/s-l225.png' 
  },
  {
    title: 'Apple iPhone XR Smartphone | 64GB 128GB 256GB | Unlocked Verizon AT&T T-Mobile',
    price: 320.99,
    thumbSrc: 'https://i.ebayimg.com/thumbs/images/g/2ZUAAOSw4pJd2XZh/s-l225.png',
  },
  {
    title: 'Apple iPhone 6s 16GB 32GB 64GB 128GB Unlocked Verizon AT&T T-Mobile Smartphone',
    price: 86.55,
    thumbSrc: 'https://i.ebayimg.com/thumbs/images/g/ZcwAAOSw44peap3s/s-l225.png'
  },
  {
    title: 'Apple iPhone 8 Plus 64GB Unlocked Smartphone',
    price: 236.55,
    thumbSrc: 'https://i.ebayimg.com/thumbs/images/g/RHIAAOSwCtJaGbNC/s-l225.png'
  }
]

// Makes string shorter, but prefers to land on whitespace
const truncateText = (str) => {
  const subString = (str + ' ').substr(0, 59)
  const lastSpace = subString.lastIndexOf(" ")
  const finalString = (lastSpace > 0 ? subString.substr(0, lastSpace) : subString)
  return (finalString === str ? str : finalString + '...')
}

// Disables the button, updates the message shown to user, 
const addToCart = (index) => {
  const button = document.getElementById(index)
  button.disabled = true
  
  const msg = document.getElementById('msg')
  msg.innerText = `${data[index].title} added in cart.`
}

// Generates each item iteratively based on the list of objects (data) to hold mock data
const makeItems = () => {
  const items = document.getElementById('items')

  data.forEach((dataPoint, i) => {
    // pull out title price, and image src on each iteration for ease of use
    const { title, price, thumbSrc } = dataPoint
    
    const card = document.createElement('div')
    const img = document.createElement('img')
    const imgContainer = document.createElement('div')
    const titleEl = document.createElement('p')
    const priceEl = document.createElement('p')
    const button = document.createElement('button')
    
    // card
    card.className = 'card'

    // img container
    imgContainer.className = 'cardImgContainer'
    img.src = thumbSrc
    
    // text
    titleEl.innerText = truncateText(title)

    // price
    priceEl.className = 'price'
    priceEl.innerText = price

    // button
    button.innerText = 'Add to cart'
    button.id = i
    button.setAttribute('onclick', `addToCart(${i})`)
    
    // concat elements
    imgContainer.append(img)
    card.append(imgContainer, titleEl, priceEl, button)
    items.append(card)
    
  })
}

makeItems()