
	 var win =0;
	var loss=0;
	var total =0;
	var targetNumber; 


    $('#beginBtn').click(function(){
        targetNumber = (Math.floor(Math.random()*101)+19);
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
 		
 		 total +=(parseInt($(this).val()));
  		$("#score").text(total);
  		if(total>targetNumber){
			loss++;
			$("#lossNumber").text(loss);
			total=0;
			alert("Game over try again! Hit start to restart your score");
			targetNumber= (Math.floor(Math.random()*101) +19);
			$("#targetNumber").text(targetNumber);

			
		}

		if(total===targetNumber){
			$("#total").text(total);
			win++;
			$("#winNumber").text(win);
		
			alert("You won the game!");
		//randNumber=
}	
		// if(total typeof ===NaN){
		// 	alert("Please click on start button to start game");
		// }
		
		
		

		$("#score").text(total);

		
		
  				
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