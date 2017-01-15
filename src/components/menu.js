import $ from "jquery";

export function scrollTo(event, selector) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, 1500);
}

export function toggleMenu(event) {
    event.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
}

export function scrollAndClose(event, selector) {
    scrollTo(event, selector);
    toggleMenu(event);
}