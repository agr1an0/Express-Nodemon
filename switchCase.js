function switchCase(idade1, idade2, idade3) {

let idades = [idade1, idade2, idade3]
let i = 0
let menorDeIdade = 0
let adolescente = 0
let adulto = 0
let velho = 0
let Idoso = 0

while (i <= 9) {
    idade()
    i += 1
}
function idade () {
    switch (true) {
    case idades[i] <= 15: menorDeIdade += 1
                   break;
    case idades[i] <= 30: adolescente += 1
                   break;
    case idades[i] <= 45: adulto += 1
                   break;
    case idades[i] <= 60: velho += 1
                   break;
    case idades[i] >= 61: Idoso += 1
                   break;
   }
}

let menores = (menorDeIdade * 100 / 3)
menores = Math.round(menores)
let adolescentes = (adolescente * 100 / 3)
adolescentes = Math.round(adolescentes)
let adultos = (adulto * 100 / 3)
adulto = Math.round(adulto)
let velhos = (velho * 100 / 3)
velhos = Math.round(velhos)
let idosos = (Idoso * 100 / 3)
idosos = Math.round(idosos)

let resp = ("tem " + menorDeIdade + " menores de idade, " +
    adolescente + " adolescentes, " + adulto + " adultos, " + velho +
    " velhos e " + Idoso + " idosos   " + 
    menores + "% são menores de idade " +
    adolescentes + "% são adolescentes " +
    adultos + "% são adultos " +
    velhos + "% são velhos " +
    idosos + "% são idosos"
)
return resp
}
export {switchCase}