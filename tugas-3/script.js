const layar = document.getElementById("layar");

function tambahKarakter(karakter) {
  layar.value += karakter;
}

function bersihkan() {
  layar.value = "";
}

function hapusSatu() {
  layar.value = layar.value.slice(0, -1);
}

function hitung() {
  try {
    layar.value = eval(layar.value);
  } catch (error) {
    layar.value = "Error";
  }
}
