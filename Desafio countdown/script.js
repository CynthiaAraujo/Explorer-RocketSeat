const button = document.querySelector("button");
const sent = document.querySelector("li button");
const form = document.querySelector(".form");
const group = document.querySelector(".group");

button.onclick = () => {
  form.classList.toggle("open");
  group.classList.toggle("open");
};

sent.onclick = () => {
  form.classList.toggle("open");
  group.classList.toggle("open");
};

function formatDate(date) {
  return date < 10 ? "0" + date : date
}

function starTime(duration, display) {
  let timer = duration;

  setInterval(function () {
    const days = formatDate(parseInt(timer * 24, 10));
    const hours = formatDate(parseInt(timer, 10));
    const minutes = formatDate(parseInt(timer / 60, 10));
    const seconds = formatDate(parseInt(timer % 60, 10));

    if (--timer < 0) {
      timer = duration;
    }

  }, 1000);
}

window.onload = function () {
  var duration
  var display = document.querySelector(".Calendar")
}
