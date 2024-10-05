let app = require('../src/app')
let supertest = require('supertest')
let request = supertest(app)

it("the aplication should to response in the port 8080", () => {
    return request.get('/').then(res => {
        let status =  res.statusCode
        expect(status).toEqual(200)
    }).catch(err => {
        fail(err)
    })
})