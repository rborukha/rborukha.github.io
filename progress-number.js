  $(document).ready(function(){

  $('.span3').viewportChecker({

      callbackFunction: function(elem, action){

      $('#counter').numerator(  {duration: 5000, toValue: 78, easing: 'linear'});
	  $('#counter2').numerator( {duration: 5000, toValue: 23, easing: 'linear'});
	  $('#counter3').numerator( {duration: 5000, toValue: 7 , easing: 'linear'});
	  $('#counter4').numerator( {duration: 5000, toValue:374, easing: 'linear'});

  },

});

  });
