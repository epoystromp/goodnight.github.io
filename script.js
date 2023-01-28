var musik = "Musik satu.mp3";
var background = "Foto satu.jpg";
var ucapanSurat = "kalau boleh meminta,aku akan meminta kepada tuhan\n tuhan,tolong kembalikan dia kepelukanku\n aku membutuhkan uluran tangan nya disaat aku udah nggak kuat buat berdiri sendiri\n aku membutuhkan pundaknya disaat aku butuh sandaran\n aku membutuhkan dia untuk menguatkan ku tuhan\n jika skenario terbaiknya aku harus berpisah dengan dia,tolong siapkan peran penggantinya,tuhan\n jangan engkau biarkan hambamu ini rapuh";
var pesanWhatsapp = "kamu adalah sperma yang kuat,tetep semanget ya jangan rapuh🥰"
var audio = document.querySelector(".audio"); 
var bg = document.querySelector(".bg");
var isiSurat = document.querySelector(".pesan"); 
   audio.src = musik;
   bg.style = "background-image: url('" + background + "')"; 
function tampil() { 
  document.querySelector(".card")
  .style = "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  audio.play(); 
  setTimeout(typeWriter, 1000);
  setTimeout(function () { 
  document.querySelector(".content2")
  .style.display = "block"; }, 400); } 
var i = 0; 
var speed = 100; 
  isiSurat.value = "";
function typeWriter() { 
  if (i < ucapanSurat.length) { 
    isiSurat.value += ucapanSurat.charAt(i);
  i++; 
  setTimeout(typeWriter, speed); }
  else { 
    document.querySelector(".wa").style.display = "block"; } } 
var content = document.querySelector(".content"); 
var cpr = document.querySelector(".cpr").innerHTML; 
 if (cpr != "god | LyonPoy") { content.style.display = "none"; }
function balasWA(){window.open("https://api.whatsapp.com/send?text=" + pesanWhatsapp, "_blank");}