//global variables
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");
const botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// global variables for randomDoorGenerator function
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const gameOver = status => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  }
};

const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  }
};

// events set on all doors
doorImage1.onclick = e => {
  if (!isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor();
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor();
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor();
  }
};

// functionality:
// redomly generating tshemes behind doors
const randomDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  const internalDoorCheck = Math.floor(Math.random() * numClosedDoors - 1);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    if (internalDoorCheck === 0) {
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else {
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    }
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    if (internalDoorCheck === 0) {
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else {
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    }
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    if (internalDoorCheck === 0) {
      openDoor2 = beachDoorPath;
      openDoor1 = spaceDoorPath;
    } else {
      openDoor2 = spaceDoorPath;
      openDoor1 = beachDoorPath;
    }
  }
};

//
const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

randomDoorGenerator();
