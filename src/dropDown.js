import './styles/dropdown.css';

const dropDown = () => {

  const dropDowns = document.getElementsByClassName("drop-down-header");

  const dropDownMenu = (event) => {
    event.target.classList.toggle("active");
  }

  for(var i = 0; i < dropDowns.length; i++){
    dropDowns[i].addEventListener('click', dropDownMenu)
  }

}

export default dropDown;