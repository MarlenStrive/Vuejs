new Vue({
    el: '#app',
    data: {
        gameInProgres: false,
        playerHealthPoint: 100,
        monsterHealthPoint: 100,
        log: []
    },
    computed: {
        
    },
    methods: {
        startTheGame: function() {
            this.playerHealthPoint = 100;
            this.monsterHealthPoint = 100;
            this.log = [];
            this.gameInProgres = true;
        },
        stopTheGame: function() {
            this.gameInProgres = false;
        },
        randomAttactPoint: function(maxValue) {
            return Math.floor(Math.random() * maxValue) + 1;
        },
        monsterAttack: function(maxValue) {
            var point = this.randomAttactPoint(maxValue); // random value from 1 to maxValue
            this.playerHealthPoint -= point;
            if (this.playerHealthPoint <= 0) {
                this.playerHealthPoint = 0;
                alert("Monster is the WINNER!");
                this.gameInProgres = false;
            }
            this.log.unshift({ // put log message to the begin of the log
                turn: "monster-turn",
                text: "Monster hits player for " + point
            });
        },
        playerAttack: function(maxValue) {
            var point = this.randomAttactPoint(maxValue);
            this.monsterHealthPoint -= point;
            if (this.monsterHealthPoint <= 0) {
                this.monsterHealthPoint = 0;
                alert("You are the WINNER!");
                this.gameInProgres = false;
            }
            this.log.unshift({
                turn: "player-turn",
                text: "Player hits monster for " + point
            });
        },
        attack: function() {
            this.playerAttack(20);
            this.monsterAttack(20);
        },
        specialAttack: function() {
            this.playerAttack(40);
            this.monsterAttack(20);
        },
        heal: function() {
            var point = this.randomAttactPoint(20);
            this.playerHealthPoint += point;
            if (this.playerHealthPoint > 100) {
                this.playerHealthPoint = 100;
            }
            this.log.unshift({
                turn: "player-turn",
                text: "Player heals himself for " + point
            });
            
            this.monsterAttack(20);
        }
    }
});