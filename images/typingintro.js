 const hamburger= document.getElementById('hamburger');
    const menu_list = document.getElementById('menu_list');
    
    hamburger.addEventListener('click',() => {
        menu_list.classlist.toggle('show');
            });