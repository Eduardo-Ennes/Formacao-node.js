function Lista(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'Fefe', idade: 40},
                {name: 'teste', idade: 30},
                {name: 'fefe do mercadinho', idade: 91}
            ])
        }, 2000)
    })
}


async function pegarusuarios() {
    var usuarios = await Lista()
    console.log(usuarios)
    console.log()
    console.log('Tudo ok!')
}

pegarusuarios()

// Lista().then(user => {
//     console.log(user)
// })