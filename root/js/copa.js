const textsToCopy = [
    "Dieser Text wird kopiert.",
    "Ein anderer Text.",
    "Noch ein Text.",
    "Ein weiterer Text.",
  ];
  
  function copyToClipboard() {
    const randomIndex = Math.floor(Math.random() * textsToCopy.length);
    const textToCopy = textsToCopy[randomIndex];
    navigator.clipboard.writeText(textToCopy);
    const textToCopyElement = document.getElementById("textToCopy");
    textToCopyElement.innerText = textToCopy;
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerText = "Text wurde in die Zwischenablage kopiert!";
  }
  