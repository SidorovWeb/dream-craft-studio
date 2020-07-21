const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, clickCloseOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      forms = modal.querySelectorAll('form'),
      scroll = calc_scroll(),
      header = document.querySelectorAll('.header')

    trigger.forEach((i) => {
      i.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }
        windows.forEach((item) => {
          item.classList.remove('modal-open')
        })

        document.body.classList.add('modal-open')
        modal.classList.add('modal-open')

        modal.querySelector('[data-call]').style.display = 'none'
        modal.querySelector('[data-request]').style.display = 'none'

        if (i.classList.contains('btn-popup-call')) {
          modal.querySelector('[data-call]').style.display = 'block'
        }

        if (i.classList.contains('btn-popup-request')) {
          modal.querySelector('[data-request]').style.display = 'block'
        }

        document.body.style.marginRight = `${scroll}px`
        header.forEach((item) => {
          item.style.paddingRight = `${scroll}px`
        })
      })
    })

    close.forEach((c) => {
      c.addEventListener('click', () => {
        windows.forEach((item) => {
          item.classList.remove('modal-open')
        })

        modal.classList.remove('modal-open')
        document.body.classList.remove('modal-open')
        document.body.style.marginRight = ''

        headerRemoveStyle(header)
        forms.forEach((f) => {
          f.querySelector('input[type=tel]').classList.remove('invalid')
        })
      })
    })

    modal.addEventListener('click', (e) => {
      if (e.target == modal && clickCloseOverlay) {
        windows.forEach((item) => {
          item.classList.remove('modal-open')
        })

        modal.classList.remove('modal-open')
        document.body.classList.remove('modal-open')
        document.body.style.marginRight = ''

        headerRemoveStyle(header)
        forms.forEach((f) => {
          f.querySelector('input[type=tel]').classList.remove('invalid')
        })
      }
    })

    forms.forEach((f) => {
      const input = f.querySelector('input[type=tel]')
      input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
          if (validateForm(input)) {
            input.classList.remove('invalid')
          }
        }
      })
    })

    if (forms) {
      forms.forEach((f) => {
        const input = f.querySelector('input[type=tel]')

        f.addEventListener('submit', (e) => {
          e.preventDefault()

          if (validateForm(input)) {
            // alert('Отправка')
            // =================
            // Сюда добавить скритп для отправки на сервер
            // =================

            const formData = new FormData(f)
            const request = new XMLHttpRequest()
            request.open('POST', f.action)
            request.send(formData)

            modal.classList.add('is-passed')
            setTimeout(() => {
              modal.classList.remove('modal-open')
              document.body.classList.remove('modal-open')
              modal.classList.remove('is-passed')
              document.body.style.marginRight = ''
              headerRemoveStyle(header)
              f.reset()
            }, 2000)
          } else {
            input.classList.add('invalid')
            input.focus()
          }
        })
      })
    }
  }

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

  function validateForm(input) {
    if (input.value === '' || input.value == null) {
      return false
    }

    if (input.value.length < 20) {
      return false
    }

    return true
  }

  bindModal('.btn-popup-call', '.popup-wrapper', '.popup-wrapper .popup__close')
  bindModal('.btn-popup-request', '.popup-wrapper', '.popup-wrapper .popup__close')
}

export default modals
