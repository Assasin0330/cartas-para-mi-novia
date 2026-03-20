let cartaActual=0

const passwords={
1:"teamo",
2:"chaparrita",
3:"princesa",
4:"011022",
5:"mimundo",
6:"miamorcito",
7:"mvdita",
8:"3años",
9:"familia",
10:"130309",
11:"once",
12:"hermosa",
13:"abrazarnos",
14:"guadalupo",
15:"ittakestwo",
16:"vidajuntos",
17:"siempreteamare"
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
function irFlores(){

document.getElementById("inicio").style.display="none"
document.getElementById("cartas").style.display="none"
document.getElementById("flores").style.display="flex"

generarRamo()

}
function crearFlor(x,y){

let flor=document.createElement("div")
flor.className="flor"
flor.style.left=x+"px"
flor.style.top=y+"px"

/* pétalos */
for(let i=0;i<5;i++){

let petalo=document.createElement("div")
petalo.className="petalo"

let angulo=(i*72)*Math.PI/180
petalo.style.left=20+Math.cos(angulo)*20+"px"
petalo.style.top=20+Math.sin(angulo)*20+"px"

flor.appendChild(petalo)
}

/* centro */
let centro=document.createElement("div")
centro.className="centro"
flor.appendChild(centro)

/* tallo */
let tallo=document.createElement("div")
tallo.className="tallo"
flor.appendChild(tallo)

return flor
}

function generarRamo(){

let ramo=document.getElementById("ramo")

ramo.innerHTML=""

/* posiciones tipo ramo */
let posiciones=[
[120,40],
[80,80],
[160,80],
[50,120],
[130,130],
[200,120]
]

posiciones.forEach(p=>{
ramo.appendChild(crearFlor(p[0],p[1]))
})

}