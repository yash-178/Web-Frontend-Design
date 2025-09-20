 function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
 }
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
const words = ["Muscle", "Power", "Strength", "Beast", "Focus"];
let index = 0;

function rotateWord() {
  const wordEl = document.querySelector(".rotating-word");
  wordEl.style.opacity = 0;

  setTimeout(() => {
    wordEl.textContent = words[index];
    wordEl.style.opacity = 1;
    index = (index + 1) % words.length;
  }, 300);
}

setInterval(rotateWord, 1000); // Change every 1s
