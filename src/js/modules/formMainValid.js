const validateForm = () => {
  function validateForm() {
    const formContact = document.querySelector('#contact')

    const phone = document.querySelector('#phone')
    const email = document.querySelector('#email')
    const messenger = document.querySelector('.messenger-input-placeholder')

    const modal = document.querySelector('.popup')
    const windows = document.querySelector('[data-modal]')
    const scroll = calc_scroll()
    const header = document.querySelectorAll('.header')

    formContact.addEventListener('input', () => {
      if (phone.classList.contains('invalid')) {
        if (validateTel(phone)) {
          removeClass(email)
          removeClass(phone)
          removeClass(messenger)
        }
      }

      if (validateEmail('contact', 'email')) {
        removeClass(email)
        removeClass(phone)
        removeClass(messenger)
      }

      if (messenger.value !== '' && messenger.value.length >= 3) {
        removeClass(email)
        removeClass(phone)
        removeClass(messenger)
      }
    })

    formContact.addEventListener('submit', (e) => {
      e.preventDefault()
      if (email.value === '' && phone.value === '' && messenger.value === '') {
        addClass(email)
        addClass(phone)
        addClass(messenger)
      } else {
        document.body.style.marginRight = `${scroll}px`
        header.forEach((item) => {
          item.style.paddingRight = `${scroll}px`
        })

        document.body.classList.add('modal-open')
        windows.classList.add('modal-open')

        windows.classList.add('is-passed')
        modal.style.display = 'block'
        // alert('Отправка')
        // =================
        // Сюда добавить скритп для отправки на сервер
        // =================
        setTimeout(() => {
          windows.classList.remove('modal-open')
          windows.classList.remove('is-passed')
          document.body.classList.remove('modal-open')
          document.body.style.marginRight = ''

          headerRemoveStyle(header)
        }, 2000)

        formContact.reset()
      }
    })
  }

  validateForm()
}

function removeClass(clName) {
  clName.classList.remove('invalid')
}
function addClass(clName) {
  clName.classList.add('invalid')
}

function validateTel(input) {
  if (input.value.length < 20) {
    return false
  }

  return true
}

function validateEmail(form_id, email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  var address = document.forms[form_id].elements[email].value
  if (reg.test(address) == false) {
    return false
  } else {
    return true
  }
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

function headerRemoveStyle(el) {
  el.forEach((item) => {
    item.style.paddingRight = ''
  })
}

export default validateForm
