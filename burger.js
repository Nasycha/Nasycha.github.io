const header = document.querySelector('.header_burger')
header.addEventListener('click', () => {
  const menus = document.querySelectorAll('.header_burger,.header_menu')
  for (const menu of menus) {
    menu.classList.toggle('active')
  }

  const body = document.querySelector('body')
  body.classList.toggle('lock')
})
