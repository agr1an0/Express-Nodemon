function operadorRelacionado(joaoAlt, pedroAlt) {
let anos = 0
let resp = ''
    while  (pedroAlt >= joaoAlt) {
        pedroAlt += 20 //mm
        joaoAlt += 25 //mm
        anos += 1
        if (joaoAlt > pedroAlt) {
            resp = "Demoram " + anos + " anos para João ficar " + (joaoAlt - pedroAlt) + "mm maior que pedro"
        }
    } 
    return resp
}
export {operadorRelacionado}