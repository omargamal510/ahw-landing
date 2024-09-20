/*

Start Navbar

*/
// $(document).ready(function () {
//   $(".slick-carousel").slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });
// });

function handleUserNotification() {
  const userDropDown = document.querySelector(".drop-down-user");
  userDropDown.classList.toggle("hidden");
}

const userBtn = document
  .querySelector(".user-button")
  .addEventListener("click", handleUserNotification);

// ==

function greetUser(userName) {
  const time = new Date();
  const hours = time.getHours();
  const greetingElement = document.querySelector(".user-greeting-text");

  if (hours < 12) {
    greetingElement.textContent = `صباح الخير , ${userName}`;
  } else {
    greetingElement.textContent = `مساء الخير , ${userName}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  greetUser("عمر");
});

const smNavComponent = document.querySelector(".sm-nav-holder");
const smNav = document.querySelector(".sm-nav");

function handleSmNavToggle() {
  smNavComponent.classList.remove("bg-transparent");
  smNav.classList.remove("sm-nav-closed");
  smNavComponent.classList.remove("sm-nav-closed");
}

const smNavToggle = document
  .querySelector(".sm-nav-toggle")
  .addEventListener("click", handleSmNavToggle);

function handleSmNavClose() {
  smNavComponent.classList.add("bg-transparent");
  smNav.classList.add("sm-nav-closed");

  setTimeout(() => {
    smNavComponent.classList.add("sm-nav-closed");
  }, 250);
}

const smNavClose = document
  .querySelector(".sm-nav-close")
  .addEventListener("click", handleSmNavClose);

// ==

/*
    End Navbar
*/

// ======================================
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    rtl: true, // Enable RTL mode
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true, // Enable navigation arrows
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },

      1400: {
        items: 5,
      },
    },
  });
});

function handleClickNext() {
  const owlNext = document.querySelector(".owl-next").click();
}

const nextManipulator = document
  .querySelector(".next-manipulator")
  .addEventListener("click", handleClickNext);
