const stuckyHeader = () => {
  const header = document.querySelector('.header')

  document.addEventListener('scroll', (e) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 0) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
  })
}

stuckyHeader()

export default stuckyHeader
