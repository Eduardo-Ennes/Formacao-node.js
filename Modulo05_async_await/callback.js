function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------
            De: Fefe do mercadinho
            `)
            callback()
    }, 5000)
}

console.log('Enviando o e-mail...')
enviarEmail('Quero trabalhar no mercadinho do fefe', 'Fefe do hortifrut', () => {
    console.log('E-mail enviado com sucesso!')
    console.log('Fefe do mercadinho recebeu o e-mail!')
}) 




// Parametros com callbacks
function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------
            De: Fefe do mercadinho
            `)
            callback('OK', 5, '8s')
    }, 5000)
}

console.log('Enviando o e-mail...')
enviarEmail('Quero trabalhar no mercadinho do fefe', 'Fefe do hortifrut', (status, amount, time) => {
    console.log(`
        Status: ${status}
        -------------------
        Contatos: ${amount}
        -------------------
        Tempo de envio: ${time}
        `)
    console.log('E-mail enviado com sucesso!')
    console.log('Fefe do mercadinho recebeu o e-mail!')
}) 





function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
            var deuErro = false
                
            if(deuErro){
                callback('Algo deu errado no envio do e-mail!')
            }
            else{
                callback()
            }
    }, 2000)
}

console.log('Enviando o e-mail...')
enviarEmail('Quero trabalhar no mercadinho do fefe', 'Fefe do hortifrut', (error) => {
    if(error == undefined){
        console.log('TUDO OK!')
    }
    else{
        console.log('Ocorreu um eror: ' + error)
    }
})