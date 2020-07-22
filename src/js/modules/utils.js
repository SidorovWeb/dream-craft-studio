function headerRemoveStyle(el) {
  el.forEach((item) => {
    item.style.paddingRight = ''
  })
}

function calc_scroll() {
  let div = document.createElement('div')
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.overflowY = 'scroll'
  div.style.visibility = 'hidden'
  document.body.appendChild(div)

  let scrollWidth = div.offsetWidth - div.clientWidth // сама прокрутка
  div.remove()
  return scrollWidth
}

export { headerRemoveStyle, calc_scroll }
