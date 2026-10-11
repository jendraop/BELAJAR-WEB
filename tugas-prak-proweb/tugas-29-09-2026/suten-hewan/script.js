const Gajah = document.getElementById("Gajah");
const Manusia = document.getElementById("Manusia");
const Semut = document.getElementById("Semut");
const vs = document.getElementById("vs");
const ai = document.getElementById("ai");
const aiMilihGajah = document.getElementById("aiMilihGajah");
const aiMilihManusia = document.getElementById("aiMilihManusia");
const aiMilihSemut = document.getElementById("aiMilihSemut");

function cardGajahkecilPasDiHover() {
  Manusia.classList.add("kartuMengecil");
  Semut.classList.add("kartuMengecil");
  Gajah.classList.add("kartuMembesar");
}
function cardGajahbalik() {
  Manusia.classList.remove("kartuMengecil");
  Semut.classList.remove("kartuMengecil");
  Gajah.classList.remove("kartuMembesar");
}
Gajah.addEventListener("mouseenter", cardGajahkecilPasDiHover);
Gajah.addEventListener("mouseleave", cardGajahbalik);

function cardManusiaBesarPasDiHover() {
  Gajah.classList.add("kartuMengecil");
  Semut.classList.add("kartuMengecil");
  Manusia.classList.add("kartuMembesar");
}
function cardManusiabalik() {
  Gajah.classList.remove("kartuMengecil");
  Semut.classList.remove("kartuMengecil");
  Manusia.classList.remove("kartuMembesar");
}
Manusia.addEventListener("mouseenter", cardManusiaBesarPasDiHover);
Manusia.addEventListener("mouseleave", cardManusiabalik);

function cardSemutBesarPasDiHover() {
  Manusia.classList.add("kartuMengecil");
  Gajah.classList.add("kartuMengecil");
  Semut.classList.add("kartuMembesar");
}
function cardSemutbalik() {
  Manusia.classList.remove("kartuMengecil");
  Gajah.classList.remove("kartuMengecil");
  Semut.classList.remove("kartuMembesar");
}
Semut.addEventListener("mouseenter", cardSemutBesarPasDiHover);
Semut.addEventListener("mouseleave", cardSemutbalik);

const aiPilihkartu = Math.floor(Math.random() * 10);
let pilihanAi;
if (aiPilihkartu >= 0 && aiPilihkartu <= 3) {
  aiMilihGajah.classList.remove("d-none");
  aiMilihSemut.classList.add("d-none");
  pilihanAi = "Gajah";
} else if (aiPilihkartu >= 4 && aiPilihkartu <= 6) {
  aiMilihManusia.classList.remove("d-none");
  aiMilihSemut.classList.add("d-none");
  pilihanAi = "Manusia";
} else {
  aiMilihSemut.classList.remove("d-none");
  pilihanAi = "Semut";
}

function playerMilihKartu(kartu) {
  if (kartu === "Gajah") {
    Manusia.classList.add("d-none");
    Semut.classList.add("d-none");
    vs.classList.remove("d-none");
    ai.classList.remove("d-none");
    adu(kartu, pilihanAi);
  } else if (kartu === "Manusia") {
    Gajah.classList.add("d-none");
    Semut.classList.add("d-none");
    vs.classList.remove("d-none");
    ai.classList.remove("d-none");
    adu(kartu, pilihanAi);
  } else if (kartu === "Semut") {
    Gajah.classList.add("d-none");
    Manusia.classList.add("d-none");
    vs.classList.remove("d-none");
    ai.classList.remove("d-none");
    adu(kartu, pilihanAi);
  } else {
    prompt("apa bos");
  }
}

function adu(playerMilihKartu, pilihanAi) {
  if (playerMilihKartu === "Gajah") {
    if (pilihanAi === "Manusia") {
      alert("player menang");
    } else if (pilihanAi === "Semut") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else if (playerMilihKartu === "Manusia") {
    if (pilihanAi === "Semut") {
      alert("player menang");
    } else if (pilihanAi === "Gajah") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else if (playerMilihKartu === "Semut") {
    if (pilihanAi === "Gajah") {
      alert("player menang");
    } else if (pilihanAi === "Manusia") {
      alert("ai menang");
    } else {
      alert("seri");
    }
  } else {
    alert("loading");
  }
}
