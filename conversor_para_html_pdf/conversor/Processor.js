// Aqui pegamos o arquivo que foi convertido para string, e vamos dividir os dados em arrays para que possamos trabalhar melhor com os dados 
class Processor{
    static process(data){
        var row = data.split('\r\n')
        var list = []
        row.forEach(row => {
            var arr = row.split(';')
            list.push(arr)
        });
        
        return list
    }
}


module.exports = Processor