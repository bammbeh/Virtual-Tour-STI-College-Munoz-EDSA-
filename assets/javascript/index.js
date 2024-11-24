/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
    
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}

    showMenu('nav-toggle','nav-menu')
    
    /*=============== SHOW DROPDOWN MENU ===============*/
    const dropdownItems = document.querySelectorAll('.dropdown__item')

    // Dropdown items
    dropdownItems.forEach((item) =>{
        const dropdownButton = item.querySelector('.dropdown__button') 
    
        // Button clicks
        dropdownButton.addEventListener('click', () =>{
            // Current show-dropdown class
            const showDropdown = document.querySelector('.show-dropdown')

             // toggleItem function
            toggleItem(item)
        
            // Show-dropdown class from other items
            if(showDropdown && showDropdown!== item){
                toggleItem(showDropdown)
            }
        })
    })

    // Function to display the dropdown
    const toggleItem = (item) =>{
        // Dropdown content
        const dropdownContainer = item.querySelector('.dropdown__container')
    
        // If the same item contains the show-dropdown class, remove
        if(item.classList.contains('show-dropdown')){
            dropdownContainer.removeAttribute('style')
            item.classList.remove('show-dropdown')
        } else{
            // 4. Add the maximum height to the dropdown content and add the show-dropdown class
            dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
            item.classList.add('show-dropdown')
        }
    }

    /*=============== DELETE DROPDOWN STYLES ===============*/
    const mediaQuery = matchMedia('(min-width: 1118px)'),
        dropdownContainer = document.querySelectorAll('.dropdown__container')

    // Function to remove dropdown styles in mobile mode when browser resizes
    const removeStyle = () =>{
     // Validates if the media query reaches 1118px
        if(mediaQuery.matches){
            // Remove the dropdown container height style
            dropdownContainer.forEach((e) =>{
                e.removeAttribute('style')
            })

            // Removes the show-dropdown class from dropdown item
            dropdownItems.forEach((e) =>{
                e.classList.remove('show-dropdown')
            })
        }
    }

    // Scrollbar
    addEventListener('resize', removeStyle)

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })