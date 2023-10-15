const anoAtual = new Date().getFullYear()
let rodape = (document.getElementById('ano').innerHTML = anoAtual)

document.getElementById('idade').innerHTML = anoAtual - 1995

function irSuave(sectionId, btn) {
    const section = document.querySelector(sectionId)
    window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
    })

}


