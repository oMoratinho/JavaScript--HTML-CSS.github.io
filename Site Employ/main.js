function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    var icon = document.getElementById(menuId + "-icon");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.className = "arrow-down";
    } else {
        menu.style.display = "block";
        icon.className = "arrow-up";
    }
}

// Oculta o submenu ao carregar a página
window.onload = function() {
    var menu = document.getElementById("product-menu");
    menu.style.display = "none";
};
