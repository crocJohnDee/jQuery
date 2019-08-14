$(document).ready(function () {

    // when click on the menu item i remove the active class from all menu items, and set it to the clicked one
    $(document).on('click', '.menu-item', function (e) {
        e.stopPropagation();
        $('.menu-item').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });

    // When clicked anywhere in the document, it removes the active class
    $(document).on('click', function () {
        $('.menu-item').removeClass('active');
    });

    // when clicked in the menu content, the content does not move
    $('.menu-content').on('click', function (e) {
        e.stopPropagation();
    });

});

// const menuItems = [...document.getElementsByClassName("menu-item")];

// menuItems.forEach(x => x.addEventListener("click", function (e) {
//     e.stopPropagation();

//     if (x.classList[1] === "active") {
//         x.classList.remove("active");
//     } else {
//         menuItems.forEach(x => {
//             x.classList.remove("active")
//         });
//         x.classList.add("active");
//     }
// }));

// document.addEventListener("click", function () {
//     menuItems.forEach(x => x.classList.remove("active"));
// });


