$(function(){
  // declare variables
  var myArray, inputLength, counter, action, frequency;
  var reading = false;

  // hide buttons, sliders, word reader, and error message
  $("#new").hide();
  $("#pause").hide();
  $("#resume").hide();
  $("#sliders").hide();
  $("#reader").hide();
  $("#error").hide();

  // Click on Start Reading
  $("#start").click(function(){
    // get text and split words into array
    // \s will match spaces, tabs, new lines, etc and + means one or more
    myArray = $("#userInput").val().split(/\s+/);

    // get number of words
    inputLength = myArray.length;

    if(inputLength>1){//input text has more than 2 words
      // move to reading mode
      reading = true;

      // show new and pause buttons and sliders
      $("#new").show();
      $("#pause").show();
      $("#sliders").show();

      // hide textarea, start reading button, and error message (hide only if user entered 1 word or less before)
      $("#userInput").hide();
      $("#start").hide();
      $("#error").hide();

      // set the progress slider max
      $("#progressslider").attr("max", inputLength-1);

      // start counter at zero
      counter = 0;

      // show word reader with first word   
      $("#reader").show().text(myArray[counter]);

    }else{//input text has 1 word or less
      // show error message
      $("#error").show();
    }
  });

  // Click on New

  // Click on Pause

  // Click on Resume

  // Change Font Size
  
  // Change Speed

  // Progress Slider

  // functions
});