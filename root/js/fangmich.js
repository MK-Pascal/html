function moveImage(img) {
    // Zufällige x- und y-Richtungen auswählen
    var directionX = Math.random() > 0.5 ? 1 : -1;
    var directionY = Math.random() > 0.5 ? 1 : -1;
  
    // Zufällige Entfernung auswählen
    var distance = Math.floor(Math.random() * 100) + 50;
  
    // Bild in neue Position bewegen
    var left = parseInt(img.style.left) + (distance * directionX);
    var top = parseInt(img.style.top) + (distance * directionY);
  
    img.style.left = left + 'px';
    img.style.top = top + 'px';
  }
  