new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        // Initialize the game
        startGame: function () {
            this.gameIsRunning = true;
            // Reset the player health to zero incase if we click start game button after previously ended gamme,
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            if (this.checkWin()) {
                return;
            }
            damage = this.calculateDamage(3, 10);
            this.playerHealth -= damage;
            his.checkWin();

        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveup: function () {

        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! start new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! start new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});