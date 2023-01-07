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
    checkedInput(option)
  })
}

window.addEventListener('click', function (e) {
  for (const select of selectItems) {
    if (!select.contains(e.target)) {
      select.classList.remove('open')
    }
  }
})

for (const option of selectOptions) {
  checkedInput(option)
}

checkedInput()

function checkedInput(option) {
  if (!option) {
    return
  }
  const dataMassage = option.dataset.massage
  const dataPlaceholder = option.dataset.inputPlaceholder
  const dataTel = option.dataset.tel
  const dataValue = option.dataset.value

  if (!option.classList.contains('selected')) {
    option.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
    option.classList.add('selected')
    option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent
    if (option.closest('.form__block-development')) {
      createInputHidden(option, '.form__block-development', dataValue)
    }

    if (option.closest('.form__block-messenger')) {
      createInputHidden(option, '.form__block-messenger', dataValue)
    }
    messenger.textContent = dataMassage
    input.placeholder = dataPlaceholder
    input.value = ''
    input.setAttribute('type', 'text')

    if (dataTel) {
      input.setAttribute('type', 'tel')
    }
  }
}

function createInputHidden(option, wrapper, dataValue) {
  if (option.closest(wrapper).querySelector('.input-hidden')) {
    option.closest(wrapper).querySelector('.input-hidden').remove()
  }
  const input = document.createElement('input')
  input.setAttribute('type', 'hidden')
  input.setAttribute('name', 'Разработку игры на')
  input.setAttribute('value', dataValue)
  input.classList.add('input-hidden')
  document.querySelector(wrapper).append(input)
}
