const showDropdown = (div, button)=>{
    const dropdownContent = document.getElementById(div);
    const dropdownButton = document.getElementById(button);

    dropdownButton.addEventListener('click', () =>{
        // dropdownContent.classList.toggle("show-dropdown")
        if(dropdownContent.className=="dropdown"){
            dropdownContent.classList.add('show-dropdown');
        }
        else{
            dropdownContent.classList.remove('show-dropdown');
        }
    })
}
showDropdown('dropdown-content','dropdown-button')