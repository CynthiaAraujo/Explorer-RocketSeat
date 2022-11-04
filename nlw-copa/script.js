function creatGame(player1, hour, player2) {
  return `
  <li>
    <img src="./Logos/${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./Logos/${player2}.svg" alt="${player2}" />
  </li>
  `;
}

let delay = -0.4;

function creatCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date}<span>${day}</span></h2>
  <ul>
  ${games}
  </ul>
</div>`;
}

document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "quinta",
    creatGame("Brazil", "16:00", "serbia") +
      creatGame("portugal", "13:00", "ghana")
  ) +
  creatCard("28/11", "segunda", creatGame("switzerland", "13:00", "Brazil")) +
  creatCard("02/12", "sexta", creatGame("Brazil", "16:00", "cameroon"));
