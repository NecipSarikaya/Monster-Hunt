new Vue({
    el: "#app",
    data: {
        playerhealth : 250,
        hesap1 : 100,
        hesap2 : 100,
        monsterhealth : 250,
        normalattack: Math.round(Math.random()*10),
        healing : Math.round(Math.random()*30),
        divStyle : "",
        divStyle2 : "",
        oyun :false,
        ilk : true,
        log :  []
    },
    methods : {
        basla : function(){
            this.oyun = true;
            this.ilk = false
        },
        attack : function(){
            this.playerhealth = this.playerhealth - this.normalattack;
            this.log.push({turn :"p", text :"Dealt damage by player special attack  "+this.normalattack+""});
            this.hesap1 = (this.playerhealth*100)/250
            this.divStyle = "width:"+this.playerhealth+"px";
            this.normalattack = Math.round(Math.random()*10)
            this.monsterhealth = this.monsterhealth - this.normalattack;
            this.hesap2 = (this.monsterhealth * 100) /250
            this.log.push({turn :"m", text :"Dealt damage by monster attack  "+this.normalattack+""});
            this.divStyle2 = "width:" + this.monsterhealth + "px";
            this.winner();
        },
        sattack : function(){
            this.normalattack = Math.round(Math.random()*20)
            this.playerhealth = this.playerhealth - this.normalattack;
            this.log.push({turn :"p", text :"Dealt damage by player special attack   "+this.normalattack+""});
            this.normalattack = Math.round(Math.random()*20)
            this.log.push({turn :"m", text :"Dealt damage by monster special attack  "+this.normalattack+""});
            this.hesap1 = (this.playerhealth*100)/250
            this.divStyle = "width:"+this.playerhealth+"px";
            this.monsterhealth = this.monsterhealth - this.normalattack;
            this.hesap2 = (this.monsterhealth*100)/250
            this.divStyle2 = "width:" + this.monsterhealth + "px";
            this.winner();
        },
        heal : function(){
            this.normalattack = Math.round(Math.random()*5)
            this.healing = Math.round(Math.random()*20);
            this.log.push({turn :"p", text :"Player healing   "+this.healing+""});
            this.log.push({turn :"m", text :"Dealt damage by monster   "+this.normalattack+""});
            this.playerhealth = this.playerhealth + this.healing - this.normalattack;
            if(this.playerhealth > 250){
                this.playerhealth = 250;
            }
            console.log(this.playerhealth)
            this.hesap1 = (this.playerhealth*100)/250
            this.divStyle = "width:" + this.playerhealth + "px";
            this.winner();
        },
        surrender : function(){
            this.log.push({turn :"p", text :"Oyuncu pes etti !!!!" });
            confirm("The monster wins , Do you wanna play again ?");
            this.newgame();
        },
        winner : function(){
            if(this.playerhealth <= 0 ){
                confirm("The Monster wins , Do you wanna play again ?")
                this.newgame();
            }else if (this.monsterhealth <= 0){
                confirm("The Player wins , Do you wanna play again ?")
                this.newgame();
            }
        },
        newgame : function(){
            this.divStyle = "width: 250px";
            this.divStyle2 = "width : 250px";
            this.playerhealth = 250;
            this.monsterhealth = 250;
            this.hesap1 = 100;
            this.hesap2 = 100;
            this.oyun =false;
            this.ilk = true;
            this.log = [];
        }
    }
})
