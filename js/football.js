function setPlayerName(playerId, playerSelect) {
    const playerNameField = document.getElementById(playerId);
    const playerName = playerNameField.innerText;
    const playerList = document.getElementById('total-player');
    const li = document.createElement('li');
    li.innerText = playerName;
    const list = playerList.querySelectorAll("li");
    //console.log(list);
            document.getElementById(playerSelect).setAttribute('disabled','');
           // console.log(list.length);

            if (list.length <5){
                document.getElementById('total-player').appendChild(li);
            }
            
            else{
                alert('You cannot add more than 5 Player');
             //   document.getElementById("myBtn").disabled = true;
             const buttons = document.getElementsByClassName("playerBtn");
               for (const button of buttons) {
                button.disabled = true;
                }
               // document.getElementsByClassName('playerBtn').disabled = false;
            }
           
}


document.getElementById('btn-player-1').addEventListener('click', function () {
    setPlayerName('player-1','btn-player-1');
    //console.log('its work !');
})
document.getElementById('btn-player-2').addEventListener('click', function () {
    setPlayerName('player-2','btn-player-2');
    //console.log('its work !');
})
document.getElementById('btn-player-3').addEventListener('click', function () {
    setPlayerName('player-3','btn-player-3');
    //console.log('its work !');
})
document.getElementById('btn-player-4').addEventListener('click', function () {
    setPlayerName('player-4','btn-player-4');
    //console.log('its work !');
})
document.getElementById('btn-player-5').addEventListener('click', function () {
    setPlayerName('player-5','btn-player-5');
    //console.log('its work !');
})
document.getElementById('btn-player-6').addEventListener('click', function () {
    setPlayerName('player-6','btn-player-6');
    //console.log('its work !');
})
document.getElementById('btn-player-7').addEventListener('click', function () {
    setPlayerName('player-7','btn-player-7');
    //console.log('its work !');
})
document.getElementById('btn-player-8').addEventListener('click', function () {
    setPlayerName('player-8','btn-player-8');
    //console.log('its work !');
})
document.getElementById('btn-player-9').addEventListener('click', function () {
    setPlayerName('player-9','btn-player-9');
    //console.log('its work !');
})




function findInput(idName) {
    const idCostField = document.getElementById(idName);
    const idCostString = idCostField.value;
    const idCost = parseInt(idCostString);
    return idCost;
}

function setExpense(idName,expense) {
    const playerExpenceField = document.getElementById(idName);
    playerExpenceField.innerText = expense;
}

function playerExpence() {
    const playerList = document.getElementById('total-player');
    const list = playerList.querySelectorAll("li");
    const playerNum =  list.length ;
    const playerCost = findInput('player-cost');
    const playerExpense = playerCost * playerNum;
    setExpense('player-expence', playerExpense);
    return playerExpense;
}

function totalExpenseCalaulate(){
    const managerExpense = findInput('manager-cost');
    const coachExpense = findInput('coach-cost');
    const playerExpense = playerExpence();
    const totalExpense = playerExpense + managerExpense + coachExpense;
    setExpense('total-expense', totalExpense);
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    //const totalPlayerSelect = list.length;
    playerExpence();

});

document.getElementById('btn-total-calculate').addEventListener('click', function(){
    totalExpenseCalaulate();
})