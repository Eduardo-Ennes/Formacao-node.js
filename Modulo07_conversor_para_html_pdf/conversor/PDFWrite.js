const pdf = require("html-pdf")

class PDFWrite{
    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (error) => {
            if(error){
                console.log(error)
            }
        })
    }
}

module.exports = PDFWrite;