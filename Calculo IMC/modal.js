export const Modal = {
  modalWrapper: document.querySelector(".modal-wrapper"),
  modalMensage: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".close"),

  open() {
    Modal.modalWrapper.classList.add("open");
  },
  close() {
    Modal.modalWrapper.classList.remove("open");
  },
};

Modal.btnClose.onclick = () => {
  Modal.close();
};


window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
  console.log(event.key)

  if(event.key == "Escape"){
    Modal.close();
  }

}