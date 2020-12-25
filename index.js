$(function(){
  // declare variables
  var myArray;
  var inputLength;
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

      // show new and pause buttons, sliders, and word reader
      $("#new").show();
      $("#pause").show();
      $("#sliders").show();
      $("#reader").show();

      // hide textarea and start reading button
      $("#userInput").hide();
      $("#start").hide();
      $("#error").hide();
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