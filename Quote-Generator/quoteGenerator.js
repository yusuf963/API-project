const text = document.querySelector('h2')
const author = document.querySelector('h4')
const button = document.querySelector('button')
const loader = document.getElementById('loader')
console.log(text, author, button, loader)

async function getQuote() {
  hideLoader('block')
  const proxy = 'https://stormy-atoll-29846.herokuapp.com/'
  const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
  try {
    const response = await fetch(proxy + url)
    const data = await response.json()
    hideLoader('none')
    text.innerText = data.quoteText
    author.innerText = data.quoteAuthor
    if (!author.innerText) {
      author.innerText = 'Unknown'
    }
    console.log(data)
  } catch (e) {
    getQuote()
    console.log(e + 'whoops')
  }
}
button.addEventListener('click', () => {
  getQuote()
})


function hideLoader(param) {
  loader.style.display = param
}
