var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    //Subtract value of 'playerAttack' from value 'enemyHealth' and use the result to update value in 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to console so we know it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    // Subtract value of "enemyAttack" from value of "playerHealth" and use the result to update value in "playerHealth" variable
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to console so we know it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
};

fight();