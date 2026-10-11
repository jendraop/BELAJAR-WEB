const Batu = document.getElementById("Batu");
const Gunting = document.getElementById("Gunting");
const Kertas = document.getElementById("Kertas");
const vs = document.getElementById("vs");
const ai = document.getElementById("ai");
const aiMilihBatu = document.getElementById("aiMilihBatu");
const aiMilihGunting = document.getElementById("aiMilihGunting");
const aiMilihKertas = document.getElementById("aiMilihKertas");
const loadingDulu = document.getElementById("loadingDulu");

function cardBatukecilPasDiHover() {
  Gunting.classList.add("kartuMengecil");
  Kertas.classList.add("kartuMengecil");
  Batu.classList.add("kartuMembesar");
}
function cardBatubalik() {
  Gunting.classList.remove("kartuMengecil");
  Kertas.classList.remove("kartuMengecil");
  Batu.classList.remove("kartuMembesar");
}
Batu.addEventListener("mouseenter", cardBatukecilPasDiHover);
Batu.addEventListener("mouseleave", cardBatubalik);

function cardGuntingBesarPasDiHover() {
  Batu.classList.add("kartuMengecil");
  Kertas.classList.add("kartuMengecil");
  Gunting.classList.add("kartuMembesar");
}
function cardGuntingbalik() {
  Batu.classList.remove("kartuMengecil");
  Kertas.classList.remove("kartuMengecil");
  Gunting.classList.remove("kartuMembesar");
}
Gunting.addEventListener("mouseenter", cardGuntingBesarPasDiHover);
Gunting.addEventListener("mouseleave", cardGuntingbalik);

function cardKertasBesarPasDiHover() {
  Gunting.classList.add("kartuMengecil");
  Batu.classList.add("kartuMengecil");
  Kertas.classList.add("kartuMembesar");
}
function cardKertasbalik() {
  Gunting.classList.remove("kartuMengecil");
  Batu.classList.remove("kartuMengecil");
  Kertas.classList.remove("kartuMembesar");
}
Kertas.addEventListener("mouseenter", cardKertasBesarPasDiHover);
Kertas.addEventListener("mouseleave", cardKertasbalik);

const aiPilihkartu = Math.floor(Math.random() * 10);
let pilihanAi;

function playerMilihKartu(kartu) {
  function milih() {
    if (aiPilihkartu >= 0 && aiPilihkartu <= 3) {
      aiMilihBatu.classList.remove("d-none");
      aiMilihKertas.classList.add("d-none");
      pilihanAi = "Batu";
    } else if (aiPilihkartu >= 4 && aiPilihkartu <= 6) {
      aiMilihGunting.classList.remove("d-none");
      aiMilihKertas.classList.add("d-none");
      pilihanAi = "Gunting";
    } else {
      aiMilihKertas.classList.remove("d-none");
      pilihanAi = "Kertas";
    }
  }

  vs.classList.remove("d-none");
  ai.classList.remove("d-none");
  loadingDulu.classList.remove("d-none");
  if (kartu === "Batu") {
    Gunting.classList.add("d-none");
    Kertas.classList.add("d-none");
    setTimeout(function () {
      loadingDulu.classList.add("d-none");
      milih();
      adu(kartu, pilihanAi);
    }, 3000);
  } else if (kartu === "Gunting") {
    Batu.classList.add("d-none");
    Kertas.classList.add("d-none");
    setTimeout(function () {
      loadingDulu.classList.add("d-none");
      milih();
      adu(kartu, pilihanAi);
    }, 3000);
  } else if (kartu === "Kertas") {
    Batu.classList.add("d-none");
    Gunting.classList.add("d-none");
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
  if (playerMilihKartu === "Batu") {
    if (pilihanAi === "Gunting") {
      alert("player menang");
    } else if (pilihanAi === "Kertas") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else if (playerMilihKartu === "Gunting") {
    if (pilihanAi === "Kertas") {
      alert("player menang");
    } else if (pilihanAi === "Batu") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else if (playerMilihKartu === "Kertas") {
    if (pilihanAi === "Batu") {
      alert("player menang");
    } else if (pilihanAi === "Gunting") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else {
    alert("loading");
  }
}
