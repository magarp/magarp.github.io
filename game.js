var move = 0;
var minimumMove;

$(document).ready(function() {
  $("#TowerA").empty();
  $("#TowerB").empty();
  $("#TowerC").empty();
  //default state of the game
  $("#mainMenu").show()
  $("#mainMenu").children().show();

  $("#settingMenu").hide()
  $("#settingMenu").children().hide();

  $("#gameWrapper").hide()
  $("#gameWrapper").children().hide();

  $("#ruleMenu").hide()
  $("#ruleMenu").children().hide();

  $("#demoWrapper").hide()
  $("#demoWrapper").children().hide();


  $("#playButton").click(function() {
    $("#demoTowerA").empty();
    $("#demoTowerB").empty();
     $("#demoTowerC").empty();
    var disknumber = $('#diskNum').val();
    var diskcolour = $('select.diskColour').val();
    createDisk(disknumber, diskcolour);
    $("#history").empty();
    move = 0;
    $("#move").empty();
    $("input:text").val("");
    $("input:text").css("background-color", "white");


    $("#mainMenu").hide();
    $("#mainMenu").children().hide();

    $("#settingMenu").hide()
    $("#settingMenu").children().hide();

    $("#ruleMenu").hide()
    $("#ruleMenu").children().hide();

    $("#gameWrapper").show()
    $("#gameWrapper").children().show();

    $("#demoWrapper").hide()
    $("#demoWrapper").children().hide();

  });

  $("#settingButton").click(function() {

    $("#mainMenu").hide()
    $("#mainMenu").children().hide();

    $("#gameWrapper").hide()
    $("#gameWrapper").children().hide();

    $("#ruleMenu").hide()
    $("#ruleMenu").children().hide();

    $("#settingMenu").show()
    $("#settingMenu").children().show();

    $("#demoWrapper").hide()
    $("#demoWrapper").children().hide();

  });


  $("#demoButton").click(function() {

    $("#mainMenu").hide()
    $("#mainMenu").children().hide();

    $("#gameWrapper").hide()
    $("#gameWrapper").children().hide();

    $("#ruleMenu").hide()
    $("#ruleMenu").children().hide();

    $("#settingMenu").hide()
    $("#settingMenu").children().hide();

    $("#demoWrapper").show()
    $("#demoWrapper").children().show();

  });

  $(".demobackButton").click(function() {

    $("#mainMenu").show()
    $("#mainMenu").children().show();

    $("#gameWrapper").hide()
    $("#gameWrapper").children().hide();

    $("#ruleMenu").hide()
    $("#ruleMenu").children().hide();

    $("#settingMenu").hide()
    $("#settingMenu").children().hide();

    $("#demoWrapper").hide()
    $("#demoWrapper").children().hide();


  });

  $(".backButton").click(function() {
    $("#mainMenu").show()
    $("#mainMenu").children().show();

    $("#settingMenu").hide()
    $("#settingMenu").children().hide();

    $("#gameWrapper").hide()
    $("#gameWrapper").children().hide();

    $("#ruleMenu").hide()
    $("#ruleMenu").children().hide();

    $("#demoWrapper").hide()
    $("#demoWrapper").children().hide();
  });



  $(".mainMenuButton").click(function() {

    if (confirm("Are you sure you want to quit the game?")) {
      $("#mainMenu").show()
      $("#mainMenu").children().show();

      $("#settingMenu").hide()
      $("#settingMenu").children().hide();

      $("#gameWrapper").hide()
      $("#gameWrapper").children().hide();

      $("#ruleMenu").hide()
      $("#ruleMenu").children().hide();

    $("#demoWrapper").hide()
    $("#demoWrapper").children().hide();

    }

  });

  $("#rulesButton").click(function() {

    $("#settingMenu").hide()
    $("#settingMenu").children().hide();

    $("#mainMenu").hide()
    $("#mainMenu").children().hide();

    $("#gameWrapper").hide()
    $("#gameWrapper").children().hide();

    $("#ruleMenu").show()
    $("#ruleMenu").children().show();

      $("#demoWrapper").hide()
    $("#demoWrapper").children().hide();

  });


  $('.diskColour').on('change', function() {
    $('select.diskColour').css("background-color", this.value);
  })


});

function changeDisk(diskNum) {
  var presentcolour = $(".diskColour").val();
  createDisk(diskNum, presentcolour);
  $("#history").empty();
  move = 0;
  $("#move").empty();


}

function checkAnswer(numDisk, answer, id) {

  var tempMinimumMove = calMinimumMoves(numDisk);
  if (answer == tempMinimumMove) {
    $("#" + id).css("background-color", "lightgreen");
    if (numDisk == 4) {
      alert("congratulation you have unlocked Demo(4)")
      $('#four').attr('disabled', false);
    } else if (numDisk == 5) {
      alert("congratulation you have unlocked Demo(5)")
      $('#five').attr('disabled', false);
    } else if (numDisk == 6) {
      alert("congratulation you have unlocked Demo(6)")
      $('#six').attr('disabled', false);
    } else if (numDisk == 7) {
      alert("congratulation you have unlocked Demo(7)")
      $('#seven').attr('disabled', false);
    } else if (numDisk == 8) {
      alert("congratulation you have unlocked Demo(8)")
      $('#eight').attr('disabled', false);
    } else if (numDisk == 9) {
      alert("congratulation you have unlocked Demo(9)")
      $('#nine').attr('disabled', false);
    }

  } else {
    $("#" + id).css("background-color", "red");
  }

}

function checkAllanswer(){


}


function calMinimumMoves(numberOfDisk) {
  tempExponential = Math.pow(2, numberOfDisk);
  result = tempExponential - 1;
  return result;
}

// Empty the disk before adding the number of disk associated with the parameter
function createDisk(numberOfDisk, diskcolour) {
  $("#TowerA").empty();
  $("#TowerB").empty();
  $("#TowerC").empty();
  minimumMove  = calMinimumMoves(numberOfDisk)
  // calling the method to count the total number of moves depending on the no. of disk

  widthIncrementvalue = 20;
  width = 40;

  // create a list of number and store it inside an array
  for (i = 1; i <= numberOfDisk; i++) {

    var div = document.createElement("div");
    div.setAttribute("id", i);
    div.setAttribute('draggable', false);
    div.addEventListener("dragstart", function(event) {
      drag(event);
    });
    div.addEventListener("ondragover", function(event) {
      noAllowDrop(event);
    });
    div.style.width = width + 'px';
    div.style.borderRadius = "25px";
    div.style.height = "25px";
    div.style.background = diskcolour;
    div.style.color = "white";
    div.style.display = "block";
    div.style.border = "1px solid black";
    div.style.margin = "0 auto"
    div.classList.add("TowerA");
    div.innerHTML = i;

    div.style.textAlign = "center";
    document.getElementById("TowerA").appendChild(div);
    width = width + 20;

  }
  towerAtop = document.getElementById("TowerA").children[0];
  towerAtop.setAttribute('draggable', true);


}



function updateTopStatus() {
  towerAtop = document.getElementById("TowerA").children[0];
  towerAtop.setAttribute('draggable', true);

  towerBtop = document.getElementById("TowerA");
  towerBtop.children[0].setAttribute('draggable', true);

  towerCtop = document.getElementById("TowerA");
  towerCtop.children[0].setAttribute('draggable', true);

}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function moveHistory(previousTower, currentTower, num, move) {
  document.getElementById("history").innerHTML += move + ".Disk " + num + " from " + previousTower + " to " + currentTower + "<br>";
}

function drop(ev) {
  var data = ev.dataTransfer.getData("text");
  var previousDiskTower = document.getElementById(data).className;
  var currentDiskTower = ev.target.id;


  var tempDiskSize;
  var tempTower = "#" + ev.target.id;

  if ($(tempTower).children().length == 0 && $(tempTower).hasClass("droppable")) {
    ev.target.appendChild(document.getElementById(data));
    tempDiskSize = 0;
    move = move + 1;

    //appendMoveHistory
    moveHistory(previousDiskTower, currentDiskTower, data, move);
    //change the class name of the disk to the currentTower
    document.getElementById(data).className = currentDiskTower;
    document.getElementById("move").innerHTML = "Moves: " + move;
  } else {
    tempDiskSize = ev.target.childNodes[0].id;
    if (data < tempDiskSize) {
      if ($(ev.target).hasClass("droppable")) { //Only allow drop inside the 2 divs
        ev.target.insertBefore(document.getElementById(data), ev.target.childNodes[0]);
        move = move + 1;
        document.getElementById("move").innerHTML = "Moves: " + move;

        //appendMoveHistory
        moveHistory(previousDiskTower, currentDiskTower, data, move);
        //change the class name of the disk to the currentTower
        document.getElementById(data).className = currentDiskTower;

      }
    }else if(data == tempDiskSize){}
    else {
      alert("Invalid Move");
    }

  }
  disableDragFeature();

  if ($('#TowerA').children().length == 0 && $('#TowerB').children().length == 0) {
    if ( move == minimumMove ){
      alert("Congratulations you completed this level in least number of moves. Find a pattern or create an algorithm to answer the least number of moves for any disk size.");
    }
    else{
      alert("Congratulations you completed this level, but it could be completed in less number of moves");
    }
  }
}


function disableDragFeature() {

  towerAlength = $('#TowerA').children().length;
  if (towerAlength == 1) {
    var singleDisk = $('#TowerA').children().eq(0)[0];
    singleDisk.setAttribute('draggable', true);
  } else if (towerAlength > 1) {
    var topADisk = $('#TowerA').children().eq(0)[0];
    topADisk.setAttribute('draggable', true);
    for (i = 1; i < towerAlength; i++) {
      var bottomDisk = $('#TowerA').children().eq(i)[0];
      bottomDisk.setAttribute('draggable', false);
    }
  }

  towerBlength = $('#TowerB').children().length;
  if (towerBlength == 1) {
    var singleDisk = $('#TowerB').children().eq(0)[0];
    singleDisk.setAttribute('draggable', true);
  } else if (towerBlength > 1) {
    var topBDisk = $('#TowerB').children().eq(0)[0];
    topBDisk.setAttribute('draggable', true);
    for (i = 1; i < towerBlength; i++) {
      var bottomDisk = $('#TowerB').children().eq(i)[0];
      bottomDisk.setAttribute('draggable', false);
    }
  }

  towerClength = $('#TowerC').children().length;
  if (towerClength == 1) {
    var singleDisk = $('#TowerC').children().eq(0)[0];
    singleDisk.setAttribute('draggable', true);
  } else if (towerClength > 1) {
    var topCDisk = $('#TowerC').children().eq(0)[0];
    topCDisk.setAttribute('draggable', true);
    for (i = 1; i < towerClength; i++) {
      var bottomDisk = $('#TowerC').children().eq(i)[0];
      bottomDisk.setAttribute('draggable', false);
    }
  }

}
