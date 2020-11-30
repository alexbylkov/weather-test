export const postCityInStorage = city => {
  
  const cityStorage = localStorage.getItem('city')
  let newCityStorage

  if (cityStorage?.length) {
    const cityArr = JSON.parse(cityStorage)
    if (cityArr.length === 10 || cityArr.find(item => item === city)) {
      newCityStorage = JSON.stringify([...cityArr])
    } else {
      newCityStorage = JSON.stringify([...cityArr, city])
    }
  } else {
    newCityStorage = JSON.stringify([city])
  }
  localStorage.setItem('city', newCityStorage)

  return JSON.parse(localStorage.getItem('city'))
}

export const getCityList = () => {
  const cityStorage = localStorage.getItem('city')
  if (cityStorage?.length) {
    return JSON.parse(cityStorage)
  }
  return []
}