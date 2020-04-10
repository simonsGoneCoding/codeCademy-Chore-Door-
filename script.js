//global variables
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

// global variables for randomDoorGenerator function
const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

// events set on all doors
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
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

randomDoorGenerator();
