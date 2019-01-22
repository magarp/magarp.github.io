var demoDisknumber;


function changeDemoDisk(diskNum) {
  $('#startDemobutton').attr('disabled', false);
  demoDisknumber = diskNum;
  var presentcolour = $(".diskColour").val();
  createdemoDisk(diskNum, presentcolour);

}

function createdemoDisk(numberOfDisk, diskcolour) {
  $("#demoHistory").empty();
  $("#demoTowerA").empty();
  $("#demoTowerB").empty();
  $("#demoTowerC").empty();
  $("#demoMoveDIV").empty();

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
    div.classList.add("demoTowerA");
    div.innerHTML = i;

    div.style.textAlign = "center";
    document.getElementById("demoTowerA").appendChild(div);
    width = width + 20;
  }

}


var towerAtop;
var towerBtop;
var towerCtop;
var count = 0;

function updateTopDisk() {

  if ($('#demoTowerA').children().length > 0) {
    towerAtop = $('#demoTowerA').children()[0].id;
  } else {
    towerAtop = 0;
  }

  if ($('#demoTowerB').children().length > 0) {
    towerBtop = $('#demoTowerB').children()[0].id;
  } else {
    towerBtop = 0;
  }

  if ($('#demoTowerC').children().length > 0) {
    towerCtop = $('#demoTowerC').children()[0].id;
  } else {
    towerCtop = 0;
  }
}

var i = 1;
var demominimummove;
var count = 0;
var speed;
var currentDisk;
var timer;

function solve() {
  currentDisk = $('#demoDisk').val();
  if (currentDisk != null) {
    $('#startDemobutton').attr('disabled', true);
  }
  count = 0;
  speed = $('#demoSpeed').val();
  demominimummove = calMinimumMoves(demoDisknumber);
  (function(i) {
    if (i < demominimummove) {
      // call the function.
      nextMove();
      // The currently executing function which is an anonymous function.
      var caller = arguments.callee;
      timer = window.setTimeout(function() {
        // the caller and the count variables are
        // captured in a closure as they are defined
        // in the outside scope.
        caller(i + 1);
      }, speed);
    }
  })(0);
}

function stopAnimation() {
  clearTimeout(timer);


}

// Generate next move using recursion alogirthm 
function nextMove() {
  count = count + 1;
  document.getElementById("demoMoveDIV").innerHTML = "Moves: " + count;

  updateTopDisk();

  if (demoDisknumber % 2 == 0) {

    if (count % 3 == 0) {
      if (towerBtop == 0 || towerBtop > towerCtop && towerCtop != 0) {
        stringTowerCtop = "#" + towerCtop + "";
        $(stringTowerCtop).prependTo("#demoTowerB");
        demomoveHistory("TowerC", "TowerB", towerCtop, count);
        updateTopDisk();

      } else if (towerCtop == 0 || towerCtop > towerBtop && towerBtop != 0) {
        stringTowerBtop = "#" + towerBtop + "";
        $(stringTowerBtop).prependTo("#demoTowerC");
        demomoveHistory("TowerB", "TowerC", towerBtop, count);
        updateTopDisk();

      }
    } else if (count % 3 == 1) {
      if (towerBtop == 0 || towerBtop > towerAtop && towerAtop != 0) {
        stringTowerAtop = "#" + towerAtop + "";
        $(stringTowerAtop).prependTo("#demoTowerB");
        demomoveHistory("TowerA", "TowerB", towerAtop, count);
        updateTopDisk();

      } else if (towerAtop == 0 || towerAtop > towerBtop && towerBtop != 0) {
        stringTowerBtop = "#" + towerBtop + "";
        $(stringTowerBtop).prependTo("#demoTowerA");
        demomoveHistory("TowerB", "TowerA", towerBtop, count);
        updateTopDisk();

      }

    } else if (count % 3 == 2) {
      if (towerCtop == 0 || towerCtop > towerAtop && towerAtop != 0) {
        stringTowerAtop = "#" + towerAtop + "";
        $(stringTowerAtop).prependTo("#demoTowerC");
        demomoveHistory("TowerA", "TowerC", towerAtop, count);
        updateTopDisk();

      } else if (towerAtop == 0 || towerAtop > towerCtop && towerCtop != 0) {
        stringTowerCtop = "#" + towerCtop + "";
        $(stringTowerCtop).prependTo("#demoTowerA");
        demomoveHistory("TowerC", "TowerA", towerCtop, count);
        updateTopDisk();

      }
    }


  } else {
    if (count % 3 == 0) {
      if (towerCtop == 0 || towerCtop > towerBtop && towerBtop != 0) {
        stringTowerBtop = "#" + towerBtop + "";
        $(stringTowerBtop).prependTo("#demoTowerC");
        demomoveHistory("TowerB", "TowerC", towerBtop, count);
        updateTopDisk();

      } else if (towerBtop == 0 || towerBtop > towerCtop && towerCtop != 0) {
        stringTowerCtop = "#" + towerCtop + "";
        $(stringTowerCtop).prependTo("#demoTowerB");
        demomoveHistory("TowerC", "TowerB", towerCtop, count);
        updateTopDisk();
      }
    } else if (count % 3 == 1) {
      if (towerCtop == 0 || towerCtop > towerAtop && towerAtop != 0) {
        stringTowerAtop = "#" + towerAtop + "";
        $(stringTowerAtop).prependTo("#demoTowerC");
        demomoveHistory("TowerA", "TowerC", towerAtop, count);
        updateTopDisk();
      } else if (towerAtop == 0 || towerAtop > towerCtop && towerCtop != 0) {
        stringTowerCtop = "#" + towerCtop + "";
        $(stringTowerCtop).prependTo("#demoTowerA");
        demomoveHistory("TowerC", "TowerA", towerAtop, count);
        updateTopDisk();
      }

    } else if (count % 3 == 2) {
      if (towerBtop == 0 || towerBtop > towerAtop && towerAtop != 0) {
        stringTowerAtop = "#" + towerAtop + "";
        $(stringTowerAtop).prependTo("#demoTowerB");
        demomoveHistory("TowerA", "TowerB", towerAtop, count);
        updateTopDisk();

      } else if (towerAtop == 0 || towerAtop > towerBtop && towerBtop != 0) {
        stringTowerBtop = "#" + towerBtop + "";
        $(stringTowerBtop).prependTo("#demoTowerA");
        demomoveHistory("TowerB", "TowerA", towerBtop, count);
        updateTopDisk();

      }
    }
  }
}

// Displays the disk movement throughout different towers
function demomoveHistory(previousTower, currentTower, num, move) {
  document.getElementById("demoHistory").innerHTML += move + ".Disk " + num + " from " + previousTower + " to " + currentTower + "<br>";
}
