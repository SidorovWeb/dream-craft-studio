import Parallax from 'parallax-js'

const parallax = () => {
  const scene = document.getElementById('scene')

  if (scene) {
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    })

    parallaxInstance.friction(0.2, 0.2)

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        parallaxInstance.disable()
      } else {
        parallaxInstance.enable()
      }
    })

    if (window.innerWidth <= 768) {
      parallaxInstance.disable()
    } else {
      parallaxInstance.enable()
    }
  }
}

export default parallax
