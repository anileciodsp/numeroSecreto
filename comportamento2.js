var numerosecreto = parseInt(Math.random()*10)
var tentativa = 3

while(tentativa > 0){
  var chute = parseInt(prompt('Digite um numero entre 0 e 10'))
  
  if(numerosecreto == chute){
    alert('Acertou! O número correto é ' + numerosecreto +'!')
    tentativa = 0
  }
  
  else if (chute > numerosecreto){
    tentativa = tentativa - 1
    alert('Errou, o número da sorte é menor! Voce tem mais ' + tentativa + ' tentativas')
  }
  
  else if (chute < numerosecreto){
    tentativa = tentativa - 1
    alert('Errou, o número da sorte é maior! Voce tem mais ' + tentativa + ' tentativas')
  }
}

if(chute != numerosecreto){
  alert('Acabou as tentativas! O número secreto era ' + numerosecreto)
}

