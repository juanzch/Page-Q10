const buttonMenu = document.querySelector("#menu");
const menu = document.querySelector(".menu");
const buttonClose = document.querySelector(".modal1_close");
const buttonsOpen = document.querySelectorAll(".button_modal");

const modal = document.querySelector(".modal1");

buttonsOpen.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal1--show");
  });
});
buttonClose.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal1--show");
});
buttonMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("hidden");
});

function enviarWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (name.trim() === '' || mensaje.trim() === '') {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
  }

  const url = `https://api.whatsapp.com/send?phone=3137181411&text=Hola,%20mi%20nombre%20es%20${name}.%20Correo:%20${email}.%20Mensaje:%20${mensaje}`;

  window.open(url, '_blank');
}