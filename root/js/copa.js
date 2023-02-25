const textsToCopy = [
    "Du hast ein Coolen Text kopiert",
    "Haha hier ist nichts",
    "https://discord.com/invite/32QNS3ZFZb",
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
  