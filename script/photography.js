
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let btn = document.querySelectorAll(".gallery-card");

let openModal = function (button) {
    modal.style.display = "flex";
}

btn.forEach( button => {
    button.addEventListener('click',openModal)
});


let closeModal = function (button) {
    modal.style.display = "none";
}

span.addEventListener('click',closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}