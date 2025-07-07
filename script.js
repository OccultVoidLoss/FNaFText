let hora= 0;
let vivo = true;
let posição = 3;
let bateria = 3;
let aconteceu = false;
let fundoatual = "fundos/fnaf1.jpg";
    function startNight(){
        document.body.style.backgroundImage = "url('" + fundoatual + "')";
        document.body.style.backgroundColor = "";
        document.getElementById("loja").style.display = 'none';
        document.getElementById("jogo").style.display = 'flex';
        aconteceu = false;
        hora = 0;
        posição = 3;
        vivo = true;
        bateria = 3;
        document.getElementById("btnloja").disabled = false;

      window.alert("Sobreviva até as 6 da manhã!\n" +
  "Use as câmeras para verificar a posição do robô, mas cuidado: elas nem sempre mostram a verdade.\n" +
  "Se ele chegar à posição 0, você perde.\n" +
  "Você pode fechar a porta até 3 vezes, apenas quando ele estiver na posição 1, para afastá-lo.\nBoa sorte!")
        document.getElementById("btnCam").disabled = false;
      document.getElementById("btnDoor").disabled = false;
      document.getElementById("startBtn").disabled = true;
      document.getElementById("ação").innerHTML = "";
        const msc = document.getElementById("ost");
        msc.play();  
        document.getElementById("bateria").innerHTML = "Bateria: " + bateria;
    }
    function checkcamera(){
            if (!vivo) return;
            const msgerro = [
                " A imagem pisca antes de estabilizar...",
                " Você acha que viu algo",
                " Há um chiado estranho",
                " A imagem está muito distorcida",
                " HAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH"
            ];
            let msg = msgerro[Math.floor(Math.random() * msgerro.length)];
            passhour();
            if(Math.random()<0.8){
                  document.getElementById("ação").innerHTML ="Parece que o robô está a " + posição + " de você";
            }
            else{
                let poserrada;
                if(Math.random() <0.5){
                    poserrada = posição +1;
                    if (poserrada > 3){
                        poserrada = 3;
                    }
                }
                else{
                    poserrada = posição -1;
                    if (poserrada < 0){
                        poserrada = 0;
                    }
                }
                  document.getElementById("ação").innerHTML ="Parece que o robô está a " + poserrada + " de você " + msg;
                 
            }
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
            let chanceandar = 0.5 + (hora/ 12);
            if(Math.random() < chanceandar){
                    posição--;
                }
                if (hora >= 6){
                    document.getElementById("hora").innerHTML = "Você ganhou";
                    const win = document.getElementById("win");
                    const msc = document.getElementById("ost");
                    msc.pause();
                    win.play();    
                    encerrarJogo();
                    return;
                }
                else if (posição <= 0){
                        document.getElementById("hora").innerHTML = "Você perdeu";
                        vivo = false;
                        encerrarJogo();
                        let c=0;
                        while (c == 0){
                        document.body.style.backgroundImage = "none";
                        document.body.style.backgroundColor = "black";
                        c++;
                        }
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
                if (Math.random() < 0.1 && aconteceu == false){
                    const segredos = [
                        "ITS ME",
                        "You shoudn't be here",
                        "I am still here",
                        "All of you will pay",
                        "Follow me",
                        "I always come back",
                        "You won't die, but you'll wish you could",
                        "Hello",
                        "Let's pull you apart",
                        "The darkest pit of hell is open for business"

                    ];
                    const segredo = segredos[Math.floor(Math.random() * segredos.length)];
                    window.alert(segredo);
                    aconteceu = true;
                }
    }
    function encerrarJogo() {
            document.getElementById("btnCam").disabled = true;
            document.getElementById("btnDoor").disabled = true;
            document.getElementById("startBtn").disabled = false;
            document.getElementById("ação").innerHTML = ""; 
    }
    function jumpscare(){
            const jumpscareContainer = document.getElementById("jumpscare"); 
            const jumpscare = document.getElementById("jumpscare-img");
            let audio;
            const lista = [
                "bonnie.gif",
                "foxy.gif",
                "freddy.gif",
                "puppet.gif",
                "sim.gif"
            ];
            const escolhido = lista[Math.floor(Math.random() * lista.length)];
            if (escolhido == "sim.gif"){
                audio = document.getElementById("harhar");
            }
            else {
                audio = document.getElementById("sound");
            }
            jumpscare.src = "jumpscares/" + escolhido;
            const msc = document.getElementById("ost");
            msc.pause();
            jumpscareContainer.style.display = "flex";
            audio.play();
            if (escolhido=="sim.gif"){
            setTimeout(() => {
                jumpscareContainer.style.display = 'none';
                audio.pause();
                audio.currentTime = 0;
                }, 29000);
            }
            else {
                setTimeout(() => {
                jumpscareContainer.style.display = 'none';
                audio.pause();
                audio.currentTime = 0;
                }, 1500);
            }
        }
    
    function boop(){
            const boop = document.getElementById("boop");
            boop.play();
    }
    function equip(fundoescolhido){
        if (fundoescolhido == "fnaf1"){
            fundoatual = "fundos/fnaf1.jpg";
        }
        else if (fundoescolhido == "ucn") {
            fundoatual = "fundos/ucn_office.jpg";
        }
        else if (fundoescolhido == "fnaf3"){
            fundoatual = "fundos/fnaf3.jpg"
        }
        else if(fundoescolhido == "fnaf2"){
            fundoatual = "fundos/fnaf2.jpg"
        }
        else if(fundoescolhido == "fnaf4"){
            fundoatual = "fundos/fnaf4.jpg"
        }
        else if(fundoescolhido == "fnaf5"){
            fundoatual = "fundos/fnaf5.jpg"
        }
        document.body.style.backgroundImage = "url('" + fundoatual + "')";
    }
    function store(){
        document.getElementById("jogo").style.display = 'none';
        document.getElementById("loja").style.display = 'flex';
        document.getElementById("btnCam").disabled = true;
        document.getElementById("btnDoor").disabled = true;
        document.getElementById("startBtn").disabled = false;
        document.getElementById("ação").innerHTML = ""; 
        document.getElementById("btnloja").disabled = true;
    }
