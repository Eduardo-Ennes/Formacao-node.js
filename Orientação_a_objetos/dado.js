class dado{
    static GetRandomIntInclusive(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    }
}

dado.GetRandomIntInclusive(1, 6)