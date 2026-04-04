  //Export for main
export function initSearch(){
  const searchContainer = document.querySelector('.perfil__search');
  const btn = document.querySelector('.perfil__search__btn');

  btn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
  });
}
