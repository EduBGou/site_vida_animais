const bxsLowOpacity = document.querySelectorAll('.bxAnimalsLowOpacity')

bxsLowOpacity.forEach(bx => {
    let bttn
    bx.addEventListener('mouseenter', () => {
        if (!bttn){
            bttn = document.createElement('button')
            bttn.innerHTML = '<p>Quero Adotar</p> <img class="Icon" id="iconWhatsapp" src="../images/iconWhatsapp.png" alt="WhatsApp">'
            bttn.id = 'bttnAdoption'
            bx.appendChild(bttn)
            
        }
    })
    bx.addEventListener('mouseleave', () => {
        if (bttn){
            bttn.remove()
            bttn = null
        }
    })
})