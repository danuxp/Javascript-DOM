function getComp() {
  const comp = Math.random();

  if (comp < 0.34) return "scissor";
  if (comp >= 0.34 && comp < 0.67) return "rock";
  return "papper";
}

function rule(comp, player) {
  if (player == comp) return "draw";
  if (player == "scissor") return comp == "papper" ? "win" : "lose";
  if (player == "rock") return comp == "scissor" ? "win" : "lose";
  if (player == "papper") return comp == "rock" ? "win" : "lose";
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pilih) {
  pilih.addEventListener("click", function () {
    const pilihanComp = getComp();
    const pilihanPlayer = pilih.className;
    const hasil = rule(pilihanComp, pilihanPlayer);

    const imgComp = document.querySelector(".imgComp");
    imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

    const info = document.querySelector(".result");
    info.innerHTML = hasil;
  });
});

