
  
document.addEventListener("DOMContentLoaded", function updateTextContent(text) {
   let p = document.querySelector('p')
   p.innerHTML = 'This is really cool!'
   console.log("The DOM has loaded");
    updateTextContent('This is Really cool!')
  });

