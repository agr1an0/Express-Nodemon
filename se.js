function se(altura, peso) { 
let resp   
let imc = (peso / (altura * altura))
imc = Math.round(imc)
if (imc< 18.5) {
    resp = "Seu imc é " + imc + " Excesso de magressa"
} else if (imc < 25) {
        resp = "Seu imc é " + imc + " Peso normal"
    }  else if (imc < 30) {
            resp = "Seu imc é " + imc + " Excesso de peso"
        } else if (imc<35) {
                resp = "Seu imc é " + imc + " Obesidade (grau 1)"
            } else if (imc <= 40) {
                    resp = "Seu imc é " + imc + " Obesidade grau 2"
                } else {
                    resp = "Seu imc é " + imc + " Obesidade grau 3"
                }
                return resp
            }
export {se}