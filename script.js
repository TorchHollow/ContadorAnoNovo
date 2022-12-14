const tempoFinal = new Date('December 31 2022 23:59:59')
const leDias = document.getElementById("dias")
const leHoras = document.getElementById("horas")
const leMinutos = document.getElementById("minutos")
const leSegundos = document.getElementById("segundos")

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const startTime = new Date();
    const diff = tempoFinal - startTime;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    leDias.innerHTML = days;
    leHoras.innerHTML = hours < 10 ? '0'+hours : hours;
    leMinutos.innerHTML = minutes < 10 ? '0'+minutes : minutes;
    leSegundos.innerHTML = seconds < 10 ? '0'+seconds : seconds;
  }

function criarSol() {
    const sol = document.createElement("i")
    sol.classList.add("fa-solid")
    sol.classList.add("fa-sun")

    sol.style.width = Math.random() * 10 + 10 + 'px';

    sol.style.left = Math.random() * window.innerWidth + 'px'

    sol.style.animationDuration = Math.random() * 3 + 2 + 's'

    sol.style.opacity = Math.random()

    document.body.appendChild(sol)

    setTimeout(() => {
        sol.remove()
    }, 5000);
}

setInterval(criarSol, 100)