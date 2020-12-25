$(function(){
  // declare variables
  var myArray, inputLength, counter, action;
  var reading = false;
  var frequency = 200;

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

      // start reading from the first word
      action = setInterval(read, frequency);

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

  // read user input text
  function read(){
    if(counter == inputLength-1){//last word
      // stop counter
      clearInterval(action);

      // stop reading mode
      reading = false;

      // hide pause button
      $("#pause").hide();
    }else{//all words but last word
      // counter goes up by one
      counter++;

      // get word
      $("#reader").text(myArray[counter]);

      // changing the progress slider value and refresh
      $("#progressslider").val(counter).slider('refresh');
    }
  }
});