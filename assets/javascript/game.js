var win = 0;
var loss = 0;
var currentNumber = 0;
var targetNumber;
var gameButtonOff = false;

//start button including initializing current number and the target number and displaying on DOM
$('#beginBtn').click(function() {
    gameButtonOff = true;
    win = 0;
    loss = 0;
    currentNumber = 0;
    targetNumber = (Math.floor(Math.random() * 101) + 19);
    //testing code: targetNumber=20;
    var gem = [];
    for (var i = 0; i < 4; i++) {
        var randNumber = (Math.floor(Math.random() * 11) + 1);
        gem.push(randNumber);
    };

    for (var i = 0; i < gem.length; i++) {
        console.log(gem[i]);
    };
    $('#buttonOne').val(gem[0]);
    $('#buttonTwo').val(gem[1]);
    $('#buttonThree').val(gem[2]);
    $('#buttonFour').val(gem[3]);


    $("#currentNumber").empty();
    $("#targetNumber").text(targetNumber);
    $("#winNumber").text(win);
    $("#lossNumber").text(loss);




});

//game class including all buttons

$(".game").click(function() {
    //concatenating current number variables with each click and displaying updated values to DOM
    currentNumber += (parseInt($(this).val()));
    if (gameButtonOff === false) {

        alert("Please click start button to play the game!");
        $("#currentNumber").empty();
    }

    $("#currentNumber").text(currentNumber);
    //current number and target number for scoring
    if (currentNumber > targetNumber) {
        debugger;
        loss++;
        $("#lossNumber").text(loss);

        $("#currentNumber").text(currentNumber);

        setTimeout(function() {
            alert(" You lose this round! New target number!");
            targetNumber = (Math.floor(Math.random() * 101) + 19);
            $("#targetNumber").text(targetNumber);
            currentNumber = 0;
            $("#currentNumber").empty();
        }, 300)


    }
    /// if current number is equal to target number win score gets incremented by one and value is displayed on DOM

    if (currentNumber === targetNumber) {

        win++;
        $("#winNumber").text(win);
        setTimeout(function() {
            alert(" You won this round! New target number!");
            targetNumber = (Math.floor(Math.random() * 101) + 19);
            $("#targetNumber").text(targetNumber);
            // reset current number to 0 and empty DOM element
            currentNumber = 0;
            $("#currentNumber").empty();

        }, 300)


    }




});