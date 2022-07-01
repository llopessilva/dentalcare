window.addEventListener('scroll', onScroll)

const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')
const colorBackToTopButton = document.querySelector('#arrowUp')

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  colorBackToTopButtonOnScrol()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se aseção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = section.offsetTop
  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se abase está abaixo da linha alvo
  // quais dados vou precisar?

  const sectionEndsAt = sectionTop + sectionHeight

  // o final da sessão passou da linh alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function colorBackToTopButtonOnScrol() {
  if (scrollY > 4555) {
    colorBackToTopButton.classList.add('showHide')
  } else {
    colorBackToTopButton.classList.remove('showHide')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)

/* Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  mousewheel: true,
  keyboard: true
})
