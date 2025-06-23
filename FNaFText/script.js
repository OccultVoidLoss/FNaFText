let hora= 0;
let vivo = true;
let posição = 3;
let bateria = 3;
    
    function startNight(){
         hora = 0;
      posição = 3;
      vivo = true;
      bateria = 3;
      window.alert("Sobreviva até as 6 da manha, cheque as cameras para saber a posição do robo,porem nem sempre as cameras dizem a verdade, caso ele chege a posição 0 voce perde, voce pode fechar a porta 3 vezes no maximo para afastá-lo, quando está na posição 1")
       document.getElementById("btnCam").disabled = false;
      document.getElementById("btnDoor").disabled = false;
      document.getElementById("startBtn").disabled = true;
      document.getElementById("ação").innerHTML = "";
    }
     function checkcamera(){
            if (!vivo) return;
            if(Math.random()<0.5){
                  document.getElementById("ação").innerHTML ="Parece que o robô está a " + posição + " de você";
            }
            else{
                  document.getElementById("ação").innerHTML ="Parece que o robô está a " + (posição - 1) + " de você";
            }
            passhour();
        }
        function door(){
            if (!vivo) return;
            if(bateria > 0){

            
            if (posição == 1){
                    document.getElementById("ação").innerHTML = "Você fecha a porta, parece que você está seguro, por enquanto...";
                posição = 3;
                bateria--;
            }
            else if(posição >=2){
                document.getElementById("ação").innerHTML = "Você fecha a porta, mas não ouve nada";
                bateria--;
            }
            }
            else{
                document.getElementById("ação").innerHTML = "Você tenta fechar a porta, mas nada acontece, o fim é inevitável";
            }
            document.getElementById("bateria").innerHTML = "Bateria: " + bateria;
            passhour();
        }
        function passhour(){
            hora+= 0.5;
            if(Math.random() < 0.5){
                    posição--;
                }
                if (hora >= 6){
                    document.getElementById("hora").innerHTML = "Você ganhou";
                    encerrarJogo();
                    return;
                }
                else if (posição <= 0){
                        document.getElementById("hora").innerHTML = "Você perdeu";
                        vivo = false;
                        encerrarJogo();
                        jumpscare();  
                        return;
                }
                else{
                        let h = Math.floor(hora);
                        let m;
                        if (hora % 1 == 0.5){
                            m = ":30";
                        }
                        else{
                            m = ":00";
                        }
                        document.getElementById("hora").innerHTML =  h + m + "AM";
                 }
        }
        function encerrarJogo() {
            document.getElementById("btnCam").disabled = true;
            document.getElementById("btnDoor").disabled = true;
            document.getElementById("startBtn").disabled = false; 
        }
        function jumpscare(){
            const jumpscare = document.getElementById("jumpscare");
            const audio = document.getElementById("sound");
            jumpscare.style.display = "flex";
            audio.play();
            setTimeout(() => {
            jumpscare.style.display = 'none';
            audio.pause();
            audio.currentTime = 0;
            }, 1500);
        }
    