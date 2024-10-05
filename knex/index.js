const Database = require('./database')

/* OPERAÇÕES COM BANCO DE DADOS USANDO KNEX */

/* INSERT
var dados = [
    { 
    pais: 'Russia',
    cidade: 'São Petersburgo'
    },
    { 
    pais: 'Austria',
    cidade: 'Viena'
    },
    { 
    pais: 'Alemanha',
    cidade: 'Berlim'
    },
    { 
    pais: 'Inglaterra',
    cidade: 'Londres'
    }
]

Database.insert(dados).into("passagem").then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})
*/


/* SELECT
Database.select().into('passagem').then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})
*/

/* NESTED QUERIES
Database.insert({pais: 'Lituania', cidade: 'vilnius'}).into("passagem").then(data => {
    Database.select().into('passagem').then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error)
    })
}).catch(error => {
    console.log(error)
})
*/

/* DELETE
Database.where({id: 6}).delete().table('passagem').then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})
*/

/* UPDATE
Database.where({pais: 'Lituania'}).update({pais: 'Noruega', cidade: 'Oslo'}).table('passagem').then(dado => {
    Database.select().table('passagem').then(dados => {
        console.log(dados)
    }).catch(err => {
        console.log(err)
    })
}).catch(error => {
    console.log(error)
})
*/ 

/* ORDER_BY
Database.select().table('passagem').orderBy('pais', 'ASC').then(dados => {
    console.log(dados)
}).catch(error => {
    console.log(error)
})
*/


/* 
Database.insert({descricao: 'Na Alemanha geral anda pelado', idpais: 5}).table('descricao').then(dado => {
    Database.select().table('descricao').then(dados => {
        console.log(dados)
    }).catch(err => {
        console.log(err)
    })
}).catch( error => {
    console.log(error)
})
*/

/* JOIN
Database.select().table('passagem').innerJoin("descricao", "descricao.idpais", "passagem.id").then(dados => {
    console.log(dados)
}).catch(error => {
    console.log(error)
})
*/


/*
Database.select().table('passagem').innerJoin('descricao', 'descricao.idpais', 'passagem.id').where('descricao.idpais', 1).then(dados => {
    console.log(dados)
}).catch(error => {
    console.log(error)
})
*/


// MANY TO MANY
// Aqui eu quis mostrar campos especificos
/* 
Database.select([
    'passagem.pais',
    'passagem.cidade',
    'descricao.descricao'
]).table('pais_desc').innerJoin('passagem', 'passagem.id', 'pais_desc.id_pais').innerJoin('descricao', 'descricao.idesc', 'pais_desc.id_descricao').then(dados => {
    console.log(dados)
}).catch(error => {
    console.log(error)
})
*/ 



// !!! MUITO IMPORTANTE
/*
async function testeTransacao(){
    try{
        await Database.transaction(async trans =>{ 
            // O metodo transaction: quando houver um erro no codigo tudo oq esta abaixo nao se executa.
            await Database.insert({pais: 'EUA', cidade: 'New York'}).table('passagem')
            await Database.insert({pais: 'Canada', cidade: 'Vancouver'}).table('passagem')
            await Database.insert({pais: 'Israel', cidade: 'Tel Aviv'}).table('passagem')
            await Database.insert({pais: 'França', cidade: 'Normandia'}).table('passagem')
        })
    }
    catch(error){
        console.log(error)
    }
}

testeTransacao()
*/