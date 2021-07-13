const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const menuIcons = document.querySelectorAll('.menu-icon');
const dropdownContainers = document.querySelectorAll('.dropdown-container');


for (let i = 0; i < dropdownMenus.length; i++) {
    const dropdownMenu = dropdownMenus[i];
    const menuIcon = menuIcons[i];
    const dropdownContainer = dropdownContainers[i];
    const dropdownTabs = dropdownContainers[i].children;

    menuIcon.onclick = () => {
        openMenu();
    };
    
    window.addEventListener ('click', (e) => {
        if (e.target === dropdownMenu || e.target === menuIcon) return;
        else closeMenu();
    });
    
    const openMenu = () => {
        dropdownContainer.classList.remove('hidden');
        dropdownContainer.classList.add('dropdown-container');
        
        setTimeout(() => {
            for (let f = 0; f < dropdownTabs.length; f++) {
                const tab = dropdownTabs[f];
                setTimeout(() => {
                    tab.classList.remove('hidden');
                }, f * 25);
            }
        }, 100);
    };
    
    const closeMenu = () => {
        dropdownContainer.classList.add('hidden');
        dropdownContainer.classList.remove('dropdown-container');
        setTimeout(() => {
            for (let f = 0; f < dropdownTabs.length; f++) {
                const tab = dropdownTabs[f];
                setTimeout(() => {
                    tab.classList.add('hidden');
                }, f * 25);
            }
        }, 100);
    };
}


