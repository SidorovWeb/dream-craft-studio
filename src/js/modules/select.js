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
    // const dataTel = option.dataset.tel

    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
      this.classList.add('selected')
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent
      messenger.textContent = dataMassage
      input.placeholder = dataPlaceholder
      input.value = ''
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
