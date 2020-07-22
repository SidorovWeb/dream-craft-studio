const selectWrappers = document.querySelectorAll('.custom-select-wrapper')
const selectOptions = document.querySelectorAll('.custom-option')
const selectItems = document.querySelectorAll('.custom-select')

for (const dropdown of selectWrappers) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open')
  })
}

const messenger = document.querySelector('.messenger-text')
const input = document.querySelector('.messenger-input-placeholder')

for (const option of selectOptions) {
  option.addEventListener('click', function () {
    const dataMassage = option.dataset.massage
    const dataPlaceholder = option.dataset.inputPlaceholder
    const dataTel = option.dataset.tel
    const dataValue = option.dataset.value

    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
      this.classList.add('selected')
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent
      if (this.closest('.form__block-development')) {
        createInputHidden(this, '.form__block-development', dataValue)
      }

      if (this.closest('.form__block-messenger')) {
        createInputHidden(this, '.form__block-messenger', dataValue)
      }
      messenger.textContent = dataMassage
      input.placeholder = dataPlaceholder
      input.value = ''
      input.setAttribute('type', 'text')

      if (dataTel) {
        input.setAttribute('type', 'tel')
      }
    }
  })
}

window.addEventListener('click', function (e) {
  for (const select of selectItems) {
    if (!select.contains(e.target)) {
      select.classList.remove('open')
    }
  }
})

function createInputHidden(option, wrapper, dataValue) {
  option.closest(wrapper).querySelector('.input-hidden').remove()
  const input = document.createElement('input')
  input.setAttribute('type', 'hidden')
  input.setAttribute('name', 'Разработку игры на')
  input.setAttribute('value', dataValue)
  input.classList.add('input-hidden')
  document.querySelector(wrapper).append(input)
}
