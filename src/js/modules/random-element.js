const radnomElement = () => {
  const linux = document.querySelector('.linux-hero')
  const android = document.querySelector('.android-hero')
  const windows = document.querySelector('.windows-hero')
  const unreal = document.querySelector('.unreal-hero')
  const ios = document.querySelector('.ios-hero')
  const html = document.querySelector('.html-hero')
  const unity = document.querySelector('.unity-hero')

  const randomArray = [linux, android, windows, unreal, ios, html, unity]

  if (linux && html && windows) {
    updateRandomElement(randomArray)
  }
}

function updateRandomElement(randomArray) {
  randomArray.forEach((item) => {
    if (item) {
      item.classList.remove('active')
    }
  })

  let random = randomArray[Math.floor(Math.random() * randomArray.length)]
  let random2 = randomArray[Math.floor(Math.random() * randomArray.length)]
  let random3 = randomArray[Math.floor(Math.random() * randomArray.length)]

  random.classList.add('active')
  random2.classList.add('active')
  random3.classList.add('active')

  setTimeout(() => {
    updateRandomElement(randomArray)
  }, 3500)
}

export default radnomElement
