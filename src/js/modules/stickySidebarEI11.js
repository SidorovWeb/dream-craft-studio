const stickSidebarEI11 = () => {
  if (document.getElementById('sticky')) {
    const wrapper = document.getElementById('wrapper-sticky'),
      main = document.getElementById('article'),
      sidebar = document.getElementById('sticky'),
      headerHeight = document.querySelector('.header')
    window.onscroll = function () {
      document
        .getElementById('sticky')
        .setAttribute('style', 'display:block;width:' + document.getElementById('sidebar').offsetWidth + 'px')
      document.getElementById('sticky').style.width = document.getElementById('sidebar').offsetWidth
      //if sidebar smaller than main
      if (sidebar.offsetHeight < main.offsetHeight) {
        //if sidebar smaller than screen - stick to top rather than bottom
        if (sidebar.offsetHeight < window.innerHeight) {
          if (
            wrapper.getBoundingClientRect().bottom - headerHeight.offsetHeight < window.innerHeight &&
            wrapper.getBoundingClientRect().bottom - headerHeight.offsetHeight < sidebar.offsetHeight
          ) {
            wrapper.classList.remove('fix-top-VP')
            wrapper.classList.add('flex-bottom')
          } else if (wrapper.getBoundingClientRect().top < headerHeight.offsetHeight) {
            wrapper.classList.add('fix-top-VP')
            wrapper.classList.remove('flex-bottom')
          } else {
            wrapper.classList.remove('fix-top-VP')
            wrapper.classList.remove('flex-bottom')
          }
        }
        //if wrapper taller than sidebar - stick to bottom
        else if (sidebar.offsetHeight < wrapper.offsetHeight) {
          if (wrapper.getBoundingClientRect().bottom < window.innerHeight) {
            wrapper.classList.remove('fix-bottom-VP')
            wrapper.classList.add('flex-bottom')
          } else if (wrapper.getBoundingClientRect().bottom > sidebar.offsetHeight + window.innerHeight) {
            wrapper.classList.remove('fix-bottom-VP')
            wrapper.classList.remove('flex-bottom')
          } else {
            wrapper.classList.add('fix-bottom-VP')
            wrapper.classList.remove('flex-bottom')
          }
        }
      }
    }
  }
}

if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
  stickSidebarEI11()

  window.addEventListener('resize', () => {
    stickSidebarEI11()
  })
}

export default stickSidebarEI11
