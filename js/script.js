/*

Start Navbar

*/

function handleUserNotification() {
  const userDropDown = document.querySelector(".drop-down-user");
  userDropDown.classList.toggle("hidden");
}

const userBtn = document
  .querySelector(".user-button")
  .addEventListener("click", handleUserNotification);

// ==

function greetUser() {
  const time = new Date();
  const hours = time.getHours();
  const greetingElement = document.querySelector(".user-greeting-text");

  if (hours >= 6 && hours < 12) {
    greetingElement.textContent = "صباح الخير , عمر";
  } else if (hours >= 12 && hours < 18) {
    greetingElement.textContent = "مساء الخير , عمر";
  } else {
    greetingElement.textContent = "مساء الخير , عمر";
  }
}

window.onload = greetUser;

// ==

/*
    End Navbar
*/
