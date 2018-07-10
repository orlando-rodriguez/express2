const express = require('express');
const cors = require('cors');

var instructors = [{
    id: 1,
    fullName: "Kyle Coberly",
    title: "Faculty Director",
    numberOfDogs: 0
},{
    id: 2,
    fullName: "Danny Fritz",
    title: "Lead Instructor",
    numberOfDogs: 0
},{
    id: 3,
    fullName: "CJ Reynolds",
    title: "Lead Instructor",
    numberOfDogs: 0
},{
    id: 4,
    fullName: "Brooks Patton",
    title: "Lead Instructor",
    numberOfDogs: 0
},{
    id: 5,
    fullName: "Robert Ortega",
    title: "Lead Instructor",
    numberOfDogs: 1
},{
    id: 6,
    fullName: "Chad Drummond",
    title: "Instructor",
    numberOfDogs: 0
},{
    id: 7,
    fullName: "Kim Schlesinger",
    title: "Instructor",
    numberOfDogs: 0
},{
    id: 8,
    fullName: "Peter Ostiguy",
    title: "Associate Instructor",
    numberOfDogs: 1
},{
    id: 9,
    fullName: "Cass Torske",
    title: "Resident",
    numberOfDogs: 1
},{
    id: 10,
    fullName: "Matt Winzer",
    title: "Resident",
    numberOfDogs: 2
},{
    id: 11,
    fullName: "Aaron Goodman",
    title: "Resident",
    numberOfDogs: 0
},{
    id: 12,
    fullName: "Michelle Bergquist",
    title: "Resident",
    numberOfDogs: 1
}];

function filterbyID(instructors, id) {
  for(let i = 0; i < instructors.length; i++){
    if (instructors[i].id == id){
      return instructors[i];
    }
  }
  return null;
};

const app = express();
app.use(cors());


app.get('/', function(request, response) {
  response.json({data: instructors});
});

app.get("/:id", function(request, response) {
  let item = filterbyID(instructors, request.params.id);
  if (!item){
    response.status(404).json({
           error: {
               message: "No record found!"
           }
       });
  } else {response.json({data: item})};

});

app.listen(9000);
