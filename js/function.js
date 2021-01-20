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
                    writeRandom();
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

    const challenge = [
        {
            'id': 1,
            'action':'Acariciar',
            'body':[
                "Orelha",
                "Peito",
                "Bunda",
                "Coxa",
                "Rosto",
                "Costas"
            ]
        },

        {
            'id': 2,
            'action':'Apertar',
            'body':[
                "Peito",
                "Bunda",
                "Coxa",
                "Bochecha"
            ]
        },

        {
            'id': 3,
            'action':'Mordiscar',
            'body':[
                "Peito",
                "Orelha",
                "Boca",
                "Pescoço",
                "Bochecha",
                "Orelha"
            ]
        },

        {
            'id': 4,
            'action':'Massagear',
            'body':[
                "Peito",
                "Bunda",
                "Coxa",
                "Ombro",
                "Mão",
                "Pés",
                "Costas",
                "Barriga",
                "Pernas",
                "Braços",
                "Rosto"
            ]
        },

        {
            'id': 5,
            'action':'Apalpar',
            'body':[
                "Peito",
                "Bunda",
                "Coxa",
                "Ombro"
            ]
        },

        {
            'id': 6,
            'action':'Deslizar (A mão)',
            'body':[
                "Nuca",
                "Pescoço",
                "Peito",
                "Coxa",
                "bunda",
                "Perna",
                "Barriga",
                "Costa",
                "Braços",
                "Ombros",
                "Rosto",
                "Cabelo"
            ]
        },

        {
            'id': 7,
            'action':'Beijar',
            'body':[
                "Lábios",
                "Pescoço",
                "Peito",
                "Barriga",
                "Costa",
                "Braços",
                "Bochecha",
            ] 
        },

        {
            'id': 8,
            'action':'Desafio',
            'body':[
                "Beijo sexy por 1 minuto",
                "Massagem no corpo outro jogador(a)",
                "Beijar Lentamente o outro jogador(a)",
                "Deixe o outro jogador(a) escolher"
            ] 
        }
        

    ];

    // variaveis para as functions

    var itemSorteado;
    var actionSorteado;
    var bodySorteado;
    var actionPast;

    //cria um resultado aleatorio de ação + local
    function randomize(){
        //escolhendo bloco
        itemSorteado = challenge[Math.floor(Math.random() * 8)]; 
        //nomeando ação baseada no bloco
        actionSorteado = itemSorteado.action;
        //escolhendo body do bloco baseado na quantia de body
        bodySorteado = itemSorteado.body[Math.floor(Math.random() * (itemSorteado.body.length))];
    }

    //verifica se não vai repetir a ação
    function verifiRandomize(){
        while(true){
            if(actionSorteado == actionPast){
                randomize();
            }else{
                actionPast = actionSorteado;
                break;
            };
        };
    };

    function writeRandom(){
        randomize();
        verifiRandomize();

        //escrever texto nas box;
        $('#um').html(actionSorteado);
        $('#dois').html(bodySorteado);
        
    };

});
