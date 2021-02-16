document.querySelectorAll(".collapsible_button").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonContent = button.nextElementSibling;

    button.classList.toggle(".collapsible_button--active");

    if (button.classList.contains(".collapsible_button--active")) {
      buttonContent.style.maxHeight = buttonContent.scrollHeight + "px";
    } else {
      buttonContent.style.maxHeight = 0;
    }
  });
});
