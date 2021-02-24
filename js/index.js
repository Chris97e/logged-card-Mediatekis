window.onload = () => {
  let activeClass = " alert-message--active";
  let buttonTrigger = document.querySelector(".link");
  let alertContiner = document.querySelector(".notification-container");

  buttonTrigger.addEventListener("click", (e) => {
    alertContiner.removeChild(alertContiner.lastChild);
    setNotification();
    addAnimation(alertContiner);
  });



  const setNotification = () => {
    alertContiner.insertAdjacentHTML(
      "beforeend",
      '<main class="alert-message"><svg class="alert-message__svg" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"   d="M15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75ZM1.25 15C1.25 7.40608 7.40608 1.25 15 1.25C22.5939 1.25 28.75 7.40608 28.75 15C28.75 22.5939 22.5939 28.75 15 28.75C7.40608 28.75 1.25 22.5939 1.25 15Z"  fill="#EB5757" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 8.75V16.25H13.75V8.75H16.25ZM15 19.375C15.6904 19.375 16.25 19.9346 16.25 20.625V21.25C16.25 21.9404 15.6904 22.5 15 22.5C14.3096 22.5 13.75 21.9404 13.75 21.25V20.625C13.75 19.9346 14.3096 19.375 15 19.375Z" fill="#EB5757" /></svg><p class="alert-message__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></main>'
    );
  };

  const addAnimation = (element) => {
    setTimeout(function(){element.lastChild.classList.add('alert-message--active')}, 100);
    
  };
};
