let btn=document.querySelector("#showM");
let infoModal=document.querySelector("#infoModal");
let close=document.querySelector("#close");
btn.addEventListener("click", function(){
  infoModal.showModal();
})
close.addEventListener("click", function(){
  infoModal.close();
})// JavaScript Document