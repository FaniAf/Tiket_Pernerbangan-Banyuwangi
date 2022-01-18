//Input
const buttonHitungTiket = document.querySelector("#buttonHitungTiket");
buttonHitungTiket.addEventListener("click", function () {
  let nama = document.getElementById("nama").value;
  const InputKelas = document.querySelector("#InputKelas").value;
  const InputKota = document.getElementById("InputKota").value;
  const jumlahTiket = document.querySelector("#jumlahTiket").value;
  let date = document.querySelector("#date").value;

  //Proses input daftar harga
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

  /* Diskon */

  let discount;
  if (jumlahTiket > 10) {
    discount = (hargaAsli * 5) / 100;
  } else {
    discount = "";
  }

  if (!date) {
    document.querySelector("#warning").innerHTML = "*Tentukan tanggal berangkat!";
  } else {
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

    document.querySelector("#warning").innerHTML = "";
  }
});

function buktipesan() {
  let cetak = buttonHitungTiket;

  cetak = document.getElementById("cetak").innerHTML = `
  
 

    <!-- baris 1 -->

    <div class="row justify-content-end tombol">
      <div class="col-3">
          Atas Nama
      </div>

      <div class="col-3">
           Kelas
      </div>

      <div class="col-3">
          Tanggal Berangkat
      </div>
      </div>

    <div class="row justify-content-end tombol">
      <div class="col-3">
          <p>${nama.value}</p> 
      </div>

      <div class="col-3">
           <p>${InputKelas.value}</p>
      </div>

      <div class="col-3">
          <p>${date.value}</p>
      </div>
      </div>

    <!-- end baris 1 -->

    <!-- baris 2 -->

    <div class="row justify-content-end tombol">
      <div class="col-3">
          <p>Dari - <br> Banyuwangi</p>
      </div>

      <div class="col-3">
          <p>></p>
      </div>

      <div class="col-3">
          <p>Ke - <br> ${InputKota.value}</p>
      </div>
      </div>
    

    <!--  end baris 2 -->

   <div class="row justify-content-end tombol">
     <div class="col-3">
        <p>Bandara - <br>BLIMBINGSARI</p>
     </div>

     <div class="col-3">
        <p></p>
     </div>

     <div class="col-3">
       <p>Tempat Duduk<br> A-1</p>
   </div>
 </div>
 <hr>
  `;

  /* Perulangan */
}
