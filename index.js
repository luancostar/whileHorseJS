let timeLaps = 0
let horseName = prompt("Olá, como se chama seu cavalo ?")
let laps = confirm("Deseja dar uma volta na pista com o seu cavalo?")


while( laps == true){
  timeLaps += 1
laps = confirm(" O seu cavalo " +horseName+ " concluiu a volta! \nTotal de voltas: "+timeLaps+". \nDeseja correr mais uma volta ?")
}
if( laps == false){
  alert("Última parada, alasão! O seu cavalo " +horseName+ " deu um total de " +timeLaps+" voltas.")
}
// Este mini exercício tem o intuíto real de deixar claro alguns enlaces de repetição simples com o uso do while.