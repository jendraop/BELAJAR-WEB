const Jempol = document.getElementById("Jempol");
const Telunjuk = document.getElementById("Telunjuk");
const Kelingking = document.getElementById("Kelingking");
const vs = document.getElementById("vs");
const ai = document.getElementById("ai");
const aiMilihJempol = document.getElementById("aiMilihJempol");
const aiMilihTelunjuk = document.getElementById("aiMilihTelunjuk");
const aiMilihKelingking = document.getElementById("aiMilihKelingking");
const loadingDulu = document.getElementById("loadingDulu");

function cardJempolkecilPasDiHover() {
  Telunjuk.classList.add("kartuMengecil");
  Kelingking.classList.add("kartuMengecil");
  Jempol.classList.add("kartuMembesar");
}
function cardJempolbalik() {
  Telunjuk.classList.remove("kartuMengecil");
  Kelingking.classList.remove("kartuMengecil");
  Jempol.classList.remove("kartuMembesar");
}
Jempol.addEventListener("mouseenter", cardJempolkecilPasDiHover);
Jempol.addEventListener("mouseleave", cardJempolbalik);

function cardTelunjukBesarPasDiHover() {
  Jempol.classList.add("kartuMengecil");
  Kelingking.classList.add("kartuMengecil");
  Telunjuk.classList.add("kartuMembesar");
}
function cardTelunjukbalik() {
  Jempol.classList.remove("kartuMengecil");
  Kelingking.classList.remove("kartuMengecil");
  Telunjuk.classList.remove("kartuMembesar");
}
Telunjuk.addEventListener("mouseenter", cardTelunjukBesarPasDiHover);
Telunjuk.addEventListener("mouseleave", cardTelunjukbalik);

function cardKelingkingBesarPasDiHover() {
  Telunjuk.classList.add("kartuMengecil");
  Jempol.classList.add("kartuMengecil");
  Kelingking.classList.add("kartuMembesar");
}
function cardKelingkingbalik() {
  Telunjuk.classList.remove("kartuMengecil");
  Jempol.classList.remove("kartuMengecil");
  Kelingking.classList.remove("kartuMembesar");
}
Kelingking.addEventListener("mouseenter", cardKelingkingBesarPasDiHover);
Kelingking.addEventListener("mouseleave", cardKelingkingbalik);

const aiPilihkartu = Math.floor(Math.random() * 10);
let pilihanAi;

function playerMilihKartu(kartu) {
  function milih() {
    if (aiPilihkartu >= 0 && aiPilihkartu <= 3) {
      aiMilihJempol.classList.remove("d-none");
      aiMilihKelingking.classList.add("d-none");
      pilihanAi = "Jempol";
    } else if (aiPilihkartu >= 4 && aiPilihkartu <= 6) {
      aiMilihTelunjuk.classList.remove("d-none");
      aiMilihKelingking.classList.add("d-none");
      pilihanAi = "Telunjuk";
    } else {
      aiMilihKelingking.classList.remove("d-none");
      pilihanAi = "Kelingking";
    }
  }

  vs.classList.remove("d-none");
  ai.classList.remove("d-none");
  loadingDulu.classList.remove("d-none");
  if (kartu === "Jempol") {
    Telunjuk.classList.add("d-none");
    Kelingking.classList.add("d-none");
    setTimeout(function () {
      loadingDulu.classList.add("d-none");
      milih();
      adu(kartu, pilihanAi);
    }, 3000);
  } else if (kartu === "Telunjuk") {
    Jempol.classList.add("d-none");
    Kelingking.classList.add("d-none");
    setTimeout(function () {
      loadingDulu.classList.add("d-none");
      milih();
      adu(kartu, pilihanAi);
    }, 3000);
  } else if (kartu === "Kelingking") {
    Jempol.classList.add("d-none");
    Telunjuk.classList.add("d-none");
    setTimeout(function () {
      loadingDulu.classList.add("d-none");
      milih();
      adu(kartu, pilihanAi);
    }, 3000);
  } else {
    prompt("apa bos");
  }
}

function adu(playerMilihKartu, pilihanAi) {
  if (playerMilihKartu === "Jempol") {
    if (pilihanAi === "Telunjuk") {
      alert("player menang");
    } else if (pilihanAi === "Kelingking") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else if (playerMilihKartu === "Telunjuk") {
    if (pilihanAi === "Kelingking") {
      alert("player menang");
    } else if (pilihanAi === "Jempol") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else if (playerMilihKartu === "Kelingking") {
    if (pilihanAi === "Jempol") {
      alert("player menang");
    } else if (pilihanAi === "Telunjuk") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else {
    alert("loading");
  }
}
