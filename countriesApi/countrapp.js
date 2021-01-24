const body = document.querySelector('.container')


const gettingCountriesData = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await response.json()
  console.log(data)
  data.map((country) => {
    const gettingCountyName = country.name
    const gettingNativeName = country.nativeName
    const gettingCountryCapital = country.capital
    const gettingCountryBordered = country.borders
    const gettingFlagImg = country.flag
    //creating element an dappend it into project Container
    const mainSection = document.createElement('div')
    mainSection.id = 'country-card'
    body.appendChild(mainSection)
    const countryName = document.createElement('h3')
    countryName.append(gettingCountyName)
    mainSection.append(countryName)
    const nativeName = document.createElement('h4')
    nativeName.append(gettingNativeName)
    mainSection.append(nativeName)
    const countryCapital = document.createElement('h4')
    mainSection.append(countryCapital)
    countryCapital.append(gettingCountryCapital)
    const countryBordered = document.createElement('h4')
    mainSection.append(countryBordered)
    if (gettingCountryBordered == false) {
      countryBordered.append('It has no land Border')
      console.log('worked')
    } else {
      countryBordered.append(gettingCountryBordered)
    }





    const flagImg = document.createElement('img')
    flagImg.setAttribute('src', gettingFlagImg)
    flagImg.style.width = '100px'
    mainSection.append(flagImg)
  })
}

gettingCountriesData()