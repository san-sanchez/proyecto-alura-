const encriptar=document.getElementById('encrypt');
let decrypt=document.getElementById("decrypt");
const copy=document.getElementById("copy");
let msn=document.getElementById("mensaje");
encriptar.addEventListener("click",()=>{
    let texto=document.getElementById("put").value;
    let txt= texto.split("");
     let txt2=codificar(txt);
    let msn=document.getElementById('mensaje');
    msn.classList.remove("ocultar");
    const cambio=document.querySelector(".contain_info");
    cambio.classList.add("ocultar");
    const cambio2=document.querySelector(".contain_img");
    cambio2.classList.add("ocultar");
    msn.textContent= txt2
    const copy=document.getElementById("copy").classList.remove("ocultar");
    copy.classList.add("mas");
})
decrypt.addEventListener("click",()=>{
	let texto=document.getElementById("put").value;
    let txt= texto.split("");
     let txt2=decodificar(txt);
    let msn=document.getElementById('mensaje');
    msn.classList.remove("ocultar");
    const cambio=document.querySelector(".contain_info");
    cambio.classList.add("ocultar");
    const cambio2=document.querySelector(".contain_img");
    cambio2.classList.add("ocultar");
    msn.textContent= txt2
    const copy=document.getElementById("copy").classList.remove("ocultar");
    copy.classList.add("mas");
})
copy.addEventListener('click',()=>{
   msn.select();
   document.execCommand('copy');

})
  function codificar(s) {
    var r = '';
    for (const c of s) {
        r += Cod(c);
        console.log(s);
    }
    return r;
  }
  function Cod(x) {
    switch(x) {
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'a': return 'ai';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
    }
  }
  function decodificar(s) {
  var r = '';
  for (var j = 0; j < s.length;j++) {
    switch(s[j]) {
    case 'e': 
      if (s[j + 4] === 'r') { r += 'e'; j += 4; }
      else { return false; }
      break;
    case 'i': 
      if (s[j + 3] === 's') { r += 'i'; j += 3; }
      else { return false; }
      break;
    case 'a': 
      if (s[j + 1] === 'i') { r += 'a'; j += 1; }
      else { return false; }
      break;
    case 'o': 
      if (s[j + 3] === 'r') { r += 'o'; j += 3; }
      else { return false; }
      break;
    case 'u': 
      if (s[j + 3] === 't') { r += 'u'; j += 3; }
      else { return false; }
      break;
    default:
      r += s[j];
    }
  }
  return r;
}
