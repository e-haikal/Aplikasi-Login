/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/** 
* Create a loginFormElement variable for the form display.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/** 
* Create inputEmailElement variable for email input display.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/** 
* Create inputPasswordElement variable for password input display.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Create a variable expectedEmail to temporarily store email information.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/** 
 * Create a variable expectedPassword to store temporary password information.
 * @constant {string}
 */
const expectedPassword = 'superpassword';

/* Comment : Adds click action to the button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

    /** 
   * Create an email variable to store the email value obtained when the button is pressed.
   * @constant {string}
   */
  const email = inputEmailElement.value;
    
  /** 
   * Create a password variable to store the password value obtained when the button is pressed.
   * @constant {string}
   */
  const password = inputPasswordElement.value;

  /* Comment : Ensures that the email and password values ​​match the stored values. */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment: If appropriate, the program will move to the home page. */
    goToHome();
  } else {
    /* Comment : However, if it is not appropriate, it will display information that the input is incorrect. */
    showPopUp();
  }
});
