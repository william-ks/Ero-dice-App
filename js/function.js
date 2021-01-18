$(function(){
    //start page e redirecionamentos

    const container = $('#container');

    fetch("pages/outgame.html")
    .then(response => response.text())
    .then(html => {
         container.html(html);

         $("#start").click(function() {

             catchPlayer();//capturar jogadores

             fetch("pages/ingame.html")
             .then(response => response.text())
             .then(html => {
                container.html(html);

                var name__local = $('#pls');

                changeName(name__local);//alterar nome por rodada

                $('#generate').click(function(){
                    changeName(name__local);
                    replaceRandom();
                });

                pls.click(function(){
                    alert('funciona');
                });

             });

         });

     });
    
    //set variables;

    let playerOne;
    let playerTwo;
    
    // catching players

    function catchPlayer(){
        playerOne = $('#playerOne').val();
        playerTwo = $('#playerTwo').val();
    }

    //na proxima pagina quero revezar a vez de cada player
    function changeName(t){
        if(t.html() == playerOne){
            t.html(playerTwo);
        }else{
            t.html(playerOne);
        };
    };
    

    //sorteio e itens

    const action = [
        "Tocar",
        "Cheirar",
        "Acariciar",
        "Apertar",
        "Lamber",
        "Encostar",
        "Beijar",
        "Massagear",
        "Empurrar",
        "Cutucar",
        "Apalpar",
        "Beliscar",
        "Deslizar",
        "Chupar",
        "Mordiscar"
    ];

    const body = [
        "Orelha",
        "Pescoço",
        "Ombro",
        "Braço",
        "Coxa",
        "Lábios",
        "Bunda",
        "Costas",
        "Busto",
        "Onde Ele quiser",
        "Onde Ela quiser",
    ];

    const challenge = [
        "Beijo sexy por 1 minuto",
        "Massagem no corpo outro player",
        "Beijar Lentamente o outro Player",
        "Deixe o outro player escolher"
    ];

    var resultAction;
    var resultBody;
    var resultChallenge;

    function replaceRandom(){
        resultAction = Math.floor(Math.random() * 13);
        $('#um').html(action[resultAction]);
        resultBody = Math.floor(Math.random() * 11);
        $('#dois').html(body[resultBody]);
        // resultChallenge = Math.floor(Math.random() * 4);

        
        
        // $('three').html(challenge[resultChallenge]);
    };
    
    

});



