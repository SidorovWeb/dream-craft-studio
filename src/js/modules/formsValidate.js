import { headerRemoveStyle, calc_scroll } from './utils'

const formsValidate = () => {
  const modal = document.querySelector('.popup')
  const windows = document.querySelector('[data-modal]')
  const scroll = calc_scroll()
  const header = document.querySelectorAll('.header')

  function validateMainFormContact() {
    const formContact = document.querySelector('#contact')
    if (formContact) {
      const phone = document.querySelector('#phone')
      const email = document.querySelector('#email')
      const messenger = document.querySelector('.messenger-input-placeholder')

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
          phone.focus()
        } else {
          // formData
          const formData = new FormData(formContact)
          const request = new XMLHttpRequest()
          request.open('POST', formContact.action)
          request.send(formData)

          formContact.reset()
        }
      })
    }
  }

  function validateFormFastSend() {
    const form = document.querySelector('#fast-send')
    const phone = document.querySelector('#fast-send-phone')

    if (form) {
      form.addEventListener('input', () => {
        if (phone.classList.contains('invalid')) {
          if (validateTel(phone)) {
            removeClass(phone)
          }
        }
      })

      form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('dd')

        if (phone.value === '') {
          addClass(phone)
          phone.focus()
        } else {
          document.body.style.marginRight = `${scroll}px`
          header.forEach((item) => {
            item.style.paddingRight = `${scroll}px`
          })

          document.body.classList.add('modal-open')
          windows.classList.add('modal-open')

          windows.classList.add('is-passed')
          modal.style.display = 'block'
          // formData
          const formData = new FormData(form)
          const request = new XMLHttpRequest()
          request.open('POST', form.action)
          request.send(formData)

          setTimeout(() => {
            windows.classList.remove('modal-open')
            windows.classList.remove('is-passed')
            document.body.classList.remove('modal-open')
            document.body.style.marginRight = ''

            headerRemoveStyle(header)
          }, 2000)
          form.reset()
        }
      })
    }
  }

  validateMainFormContact()
  validateFormFastSend()
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
  // eslint-disable-next-line no-useless-escape
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  var address = document.forms[form_id].elements[email].value
  if (reg.test(address) == false) {
    return false
  } else {
    return true
  }
}

export default formsValidate
