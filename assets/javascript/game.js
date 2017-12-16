
	 var win =0;
	var loss=0;
	var currentNumber =0;
	var targetNumber; 


    $('#beginBtn').click(function(){
    	win=0;
    	loss=0;
    	currentNumber=0;
        targetNumber = (Math.floor(Math.random()*101)+19);
       //testing code: targetNumber=20;
        var gem =[];
        for (var i = 0; i < 4; i++) {
            var randNumber = (Math.floor(Math.random()*12));
            gem.push(randNumber);
         };
 
         for(var i =0; i< gem.length;i++) {
              console.log(gem[i]);
         };
          $('#buttonOne').val(gem[0]) ;
         $('#buttonTwo').val(gem[1]);
         $('#buttonThree').val(gem[2]);
         $('#buttonFour').val(gem[3]);
 

 
 $("#targetNumber").text(targetNumber);
 $("#winNumber").text(win);
 $("#lossNumber").text(loss);




  });

	
    
  	 $(".game").click(function() {
 	//	$("#currentNumber").text(currentNumber);
 		 currentNumber +=(parseInt($(this).val()));
		
		// if(currentNumber<targetNumber){
		// 	$("#currentNumber").text(currentNumber);
		// }
  		$("#currentNumber").text(currentNumber);
  		 
  		 if(currentNumber>targetNumber){
			
			loss++;
			$("#lossNumber").text(loss);
			
				$("#currentNumber").text(currentNumber);
			 	
			 	alert("current number: " + currentNumber + " Game over try again! New target number!");
			
			targetNumber= (Math.floor(Math.random()*101) +19);
			$("#targetNumber").text(targetNumber);
			currentNumber=0;
			$("#currentNumber").empty();
		}


		if(currentNumber===targetNumber){
		//	$("#currentNumber").text(currentNumber);
			win++;
			$("#winNumber").text(win);
		
			alert("Current number: " + currentNumber+ " You won this round! New target number!");
		
			targetNumber=(Math.floor(Math.random()*101) +19);
			$("#targetNumber").text(targetNumber);
			currentNumber=0;
			$("#currentNumber").empty();
}
		// if(total typeof ===NaN){
		// 	alert("Please click on start button to start game");
		// }
		
		
		

	//	$("#score").text(total);

		
		
  				
});
  	

   // function reset(){
 // 	alert("new game!");
 // 	var 

 // }

  



  	 


//     $('#buttonOne').on('click', function() {
//               var buttonOneValue = gem[0];
//               $('#score').text(buttonOneValue);
     
//         });
//        $('#buttonTwo').on('click', function() {
//               var buttonTwoValue = gem[1];
      
//         });
//        $('#buttonThree').on('click', function() {
//       var buttonThreeValue = gem[2];
      
//         });
//        $('#buttonFour').on('click', function() {
//       var buttonFourValue = gem[3];
          
//         });
    
// }
// startBtn();