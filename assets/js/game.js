// Game States
// "WIN" Player robot has defeated all enemy robots
//      *fight all enemy robots
//      *Defeat all enemy robots
// "LOSE" Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0){
    // Alert players they are starting the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract value of 'playerAttack' from value 'enemyHealth' and use the result to update value in 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to console so we know it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //add money to player
            playerMoney = playerMoney + 20;
            break;
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
            console.log("playerMoney", playerMoney);
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player chooses to skip
    } if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
        // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
        //if no (false), ask question again by running fight() again
         else {
            fight();
        }
    }
}
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

//fight();