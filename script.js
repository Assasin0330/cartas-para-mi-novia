let cartaActual=0

const passwords={
1:"amor1",
2:"amor2",
3:"amor3",
4:"amor4",
5:"amor5",
6:"amor6",
7:"amor7",
8:"amor8",
9:"amor9",
10:"amor10",
11:"amor11",
12:"amor12",
13:"amor13",
14:"amor14",
15:"amor15",
16:"amor16",
17:"amor17"
}

function entrar(){
document.getElementById("inicio").style.display="none"
document.getElementById("cartas").style.display="block"
}

function abrirCarta(num){
cartaActual=num
document.getElementById("passwordBox").style.display="flex"
}

function verificar(){

let pass=document.getElementById("passwordInput").value

if(pass==passwords[cartaActual]){

mostrarCarta(cartaActual)
document.getElementById("passwordBox").style.display="none"

}else{
alert("Contraseña incorrecta")
}

}

function mostrarCarta(num){

let cont=document.getElementById("ventanaCarta")

cont.style.display="block"

let extra=""

if(num==17){
extra=`
<h2>🎂 Feliz cumpleaños 17 mi chaparrita 💚</h2>
<p>
Hoy celebramos lo increíble que eres.
Gracias por estos 3 años tan hermosos juntos.
</p>
`
}

document.getElementById("contenidoCarta").innerHTML=`

<h2>Carta ${num}</h2>

${extra}

<img src="carta${num}.jpg">


<p>
Mi chaparrita hermosa, esta es una carta especial para ti.
</p>

<img src="carta${num}.png"> 

`

}

function corazones(){

let heart=document.createElement("div")

heart.className="corazon"

heart.innerHTML="❤"

heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>{heart.remove()},6000)

}

setInterval(corazones,500)

function volverInicio(){

document.getElementById("cartas").style.display="none"

document.getElementById("inicio").style.display="flex"

}

function cerrarCarta(){

document.getElementById("ventanaCarta").style.display="none"

}
function reproducir(){

let audio = document.getElementById("musica")

audio.play()

}