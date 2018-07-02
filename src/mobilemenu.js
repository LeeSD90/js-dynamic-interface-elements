import './styles/mobilemenu.css';

const mobileMenu = () => {

  const menuButton = document.getElementById('mobile-menu-button');
  
  const addCover = () => {
    const cover = document.createElement("div");
    cover.id = "cover";
    document.body.appendChild(cover);
  }

  const removeCover = () => {
    const cover = document.getElementById("cover");
    document.body.removeChild(cover);
  }

  const expandMenu = () => {
    menuButton.classList.toggle("menu-open");
    menuButton.classList.contains("menu-open") ?
      addCover()
      : removeCover()
  }

  menuButton.addEventListener("click", expandMenu);
}

export default mobileMenu;