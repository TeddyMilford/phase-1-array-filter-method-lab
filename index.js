// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const gosling = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

const findMatching = function (arr, string) {
  const response = arr.filter(
    (word) => word == string || word == string.toLowerCase()
  );
  return response;
};

const fuzzyMatch = function (arr, string) {
  const response = arr.filter((word) => word[0] == string[0]);
  return response;
};

const matchName = function (obj, string) {
  const response = obj.filter((word) => word.name == string);
  return response;
};
