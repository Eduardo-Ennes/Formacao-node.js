function EnviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var DeuErro = false

            if(DeuErro){
                reject({Situação: 'Houve uma falha ao enviar o e-mail'})
            }
            else{
                resolve({Time: 2, To: 'Fefe do mercadinho'})
            }
        }, 2000)
    })
}

EnviarEmail('Olá, Mundo!', 'Fefe do mercadinho').then((dados) => {
    console.log(`
        Time: ${dados.Time} segundos
        --------------------
        To: ${dados.To}
        --------------------
        `)
}).catch((error) => {
    console.log(`Error: ${error.Situação}`)
})