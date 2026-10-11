const sutenHewan = document.getElementById("sutenHewan");
const sutenBenda = document.getElementById("sutenBenda");
const sutenJari = document.getElementById("sutenJari");

function cardHewankecilPasDiHover() {
  sutenBenda.classList.add("kartuMengecil");
  sutenJari.classList.add("kartuMengecil");
  sutenHewan.classList.add("kartuMembesar");
}
function cardHewanbalik() {
  sutenBenda.classList.remove("kartuMengecil");
  sutenJari.classList.remove("kartuMengecil");
  sutenHewan.classList.remove("kartuMembesar");
}
sutenHewan.addEventListener("mouseenter", cardHewankecilPasDiHover);
sutenHewan.addEventListener("mouseleave", cardHewanbalik);

function cardBendaBesarPasDiHover() {
  sutenHewan.classList.add("kartuMengecil");
  sutenJari.classList.add("kartuMengecil");
  sutenBenda.classList.add("kartuMembesar");
}
function cardBendabalik() {
  sutenHewan.classList.remove("kartuMengecil");
  sutenJari.classList.remove("kartuMengecil");
  sutenBenda.classList.remove("kartuMembesar");
}
sutenBenda.addEventListener("mouseenter", cardBendaBesarPasDiHover);
sutenBenda.addEventListener("mouseleave", cardBendabalik);

function cardJariBesarPasDiHover() {
  sutenBenda.classList.add("kartuMengecil");
  sutenHewan.classList.add("kartuMengecil");
  sutenJari.classList.add("kartuMembesar");
}
function cardJaribalik() {
  sutenBenda.classList.remove("kartuMengecil");
  sutenHewan.classList.remove("kartuMengecil");
  sutenJari.classList.remove("kartuMembesar");
}
sutenJari.addEventListener("mouseenter", cardJariBesarPasDiHover);
sutenJari.addEventListener("mouseleave", cardJaribalik);
