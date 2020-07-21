// import IMask from 'imask'

for (const dropdown of document.querySelectorAll('.custom-select-wrapper')) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open')
  })
}

for (const option of document.querySelectorAll('.custom-option')) {
  option.addEventListener('click', function () {
    const messenger = document.querySelector('.messenger-text')
    const input = document.querySelector('.messenger-input-placeholder')
    const dataMassage = option.dataset.massage
    const dataPlaceholder = option.dataset.inputPlaceholder
    const dataTel = option.dataset.tel
    const dataValue = option.dataset.value

    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
      this.classList.add('selected')
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent
      if (this.closest('.form__block-development')) {
        this.closest('.form__block-development').querySelector('.input-hidden').remove()
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', 'Разработку игры на')
        input.setAttribute('value', dataValue)
        input.classList.add('input-hidden')
        document.querySelector('.form__block-development').append(input)
      }

      if (this.closest('.form__block-messenger')) {
        this.closest('.form__block-messenger').querySelector('.input-hidden').remove()
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', 'Мессенджер')
        input.setAttribute('value', dataValue)
        input.classList.add('input-hidden')
        document.querySelector('.form__block-messenger').append(input)
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
  for (const select of document.querySelectorAll('.custom-select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('open')
    }
  }
})
