const contextMenu = document.querySelector(".wrapper")

document.addEventListener("contextmenu", e => {
  console.log("Right Button Clicked");
  e.preventDefault();

  let x = e.offsetX, y = e.offsetY, 
  winWidth = window.innerWidth,
  winHeight = window.innerWidth,
  cmWidth = contextMenu.offsetWidth;
  cmHeight = contextMenu.offsetWidth;


  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;


  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden")