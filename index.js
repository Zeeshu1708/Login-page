const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');
const rightpannel = document.querySelector('.right-panel');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
    rightpannel.style.zIndex = '7';
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
    rightpannel.style.zIndex = '0';
});



document.getElementById("loginform").addEventListener('submit', (event) => {
    event.preventDefault();
})