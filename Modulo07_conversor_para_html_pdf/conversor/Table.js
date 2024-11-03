class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }
    
    mostrar(){
        console.log(this.header)
    }

    get RowCount(){
        console.log(this.rows)
        return this.rows.length
    }

    get ColumnCount(){
        return this.header.length
    }
}



module.exports = Table;