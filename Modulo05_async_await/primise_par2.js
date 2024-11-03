function PegarId(){
    return new Promise((resolve, reject) => {
        resolve(5)
    }, 1000)
}


function BuscarEmailnoBanco(id){
    return new Promise((resolve, reject) => {
        resolve("fefe@mercadinho.com")
    }, 1000)
}


function EnviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var DeuErro = true

            if(DeuErro){
                reject({Situação: 'Houve uma falha ao enviar o e-mail'})
            }
            else{
                resolve({Time: 2, To: 'Fefe@mercadinho.com'})
            }
        }, 1000)
    })
}


// async function pegarusuario() {
//     var id = await PegarId()
//     var email = await BuscarEmailnoBanco(id)
//     EnviarEmail('Olá, mundo!', email).then((enviado) => {
//         console.log(`Time: ${enviado.Time} - ${enviado.To}`)
//     }).catch(error => {
//         console.log(error.Situação)
//     })
// }



async function pegarusuario() {
    var id = await PegarId()
    var email = await BuscarEmailnoBanco(id)
    try{
        var user = await EnviarEmail('Olá, mundo!', email)
        console.log(`Time: ${user.Time} - ${user.To}`)
    }
    catch(error){
        console.log(error.Situação)
    }
}


pegarusuario()


// PegarId().then((id) => {
//     BuscarEmailnoBanco(id).then((email) => {
//         EnviarEmail("Olá, mundo!",email).then(() => {
//             console.log(`Email enviado com sucesso para id: ${id} - ${email}`)
//         }).catch(error => {
//             console.log(error.Situação)
//         })
//     })
// })