function data(params) {
    const dados = [
        {id:"1", login:"Nycolete", senha:"4002"},
        {id:"2", login:"Joana", senha:"8922"},
    ]
    const json = JSON.stringify(dados)

    localStorage.setItem("banco",json)
}