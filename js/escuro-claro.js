const changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function(){

    document.body.classList.toggle("dark")
})









//troca a logo da imagem
var imgatual = "img/logo2.png";
var imganterior = "img/logo1.png";

function trocar () {
    document.getElementById("figura").src = imgatual;
    let aux = imgatual;
    imgatual = imganterior;
    imganterior = aux;
}