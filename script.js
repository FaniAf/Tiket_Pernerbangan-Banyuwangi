const buttonHitungTiket = document.querySelector("#buttonHitungTiket");
buttonHitungTiket.addEventListener("click", function () {
  const InputKelas = document.querySelector("#InputKelas").value;
  const InputKota = document.querySelector("#InputKota").value;
  const jumlahTiket = document.querySelector("#jumlahTiket").value;

  let price;
  if (InputKelas == "Ekonomi") {
    if (InputKota == "Bandung") {
      price = 1000000;
    } else if (InputKota == "Yogyakarta") {
      price = 500000;
    } else {
      price = 800000;
    }
  } else {
    if (InputKota == "Bandung") {
      price = 1500000;
    } else if (InputKota == "Yogyakarta") {
      price = 1000000;
    } else {
      price = 1200000;
    }
  }

  const hargaAsli = price * jumlahTiket;

  let discount;
  if (jumlahTiket > 10) {
    discount = (hargaAsli * 5) / 100;
  } else {
    discount = "";
  }

  const harga = document.querySelector("#harga");
  harga.innerHTML = `<p>Rp.${hargaAsli}</p>`;

  const diskon = document.querySelector("#discount");
  diskon.innerHTML = `<p>Rp.${discount}</p>`;

  const hargaTotal = hargaAsli - discount;
  const total = document.querySelector("#total");
  total.innerHTML = `<p>Rp.${hargaTotal}</p>`;

  var tw = new Date();
  if (tw.getTimezoneOffset() == 0) a = tw.getTime() + 7 * 60 * 60 * 1000;
  else a = tw.getTime();
  tw.setTime(a);
  var tahun = tw.getFullYear();
  var hari = tw.getDay();
  var bulan = tw.getMonth();
  var tanggal = tw.getDate();
  var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
  var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember");
  document.getElementById("hasil").innerHTML =
    "Waktu Pengecekan : " + hariarray[hari] + " " + tanggal + " " + bulanarray[bulan] + " " + tahun + " / " + (tw.getHours() < 10 ? "0" : "") + tw.getHours() + ":" + (tw.getMinutes() < 10 ? "0" : "") + tw.getMinutes() + " WIB ";
});
