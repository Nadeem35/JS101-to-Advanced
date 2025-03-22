const arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Task-1----------------------
function PrintDeveloperbyMap() {
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

// Task-2-------------------
function PrintDeveloperbyforEach() {
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

// Task-3-------------------
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

// Task-4 -------------------
function removeAdmin() {
  const updatedArr = arr.filter((item) => item.profession !== "admin");
  console.log(updatedArr);
}

// Task-5 -------------------
function ConcatinateArray() {
  const newArray = [
    { id: 4, name: "susan", age: "22", profession: "intern" },
    { id: 5, name: "peter", age: "23", profession: "designer" },
    { id: 6, name: "mike", age: "24", profession: "developer" },
  ];

  const combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
