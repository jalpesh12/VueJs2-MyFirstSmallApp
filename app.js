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
            // Reset the player health to zero incase if we click start game button after previously ended gamme
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    }
});