


//load the airtable library, call it "Airtable" 
var Airtable = require("airtable");
console.log(Airtable);

//connect our airtable to our website using API key
var base = new Airtable({ apiKey: "keyrS6u3qlNzLqhWE" }).base("appC4PCEFK76wcsh1");

  //get our airtable data, specify how to retrieve it
base("my_furniture").select({}).eachPage(gotPageOfFurniture, gotAllFurniture);

// an empty array to hold our book data
const furniture = [];

// callback function that receives our data
function gotPageOfFurniture(records, fetchNextPage) {
    console.log("gotPageOfFurniture()");
    // add the records from this page to our furniture array
    furniture.push(...records);
    // request more pages
    fetchNextPage();
  }

    // call back function that is called when all pages are loaded
function gotAllFurniture(err) {
    console.log("gotAllFurniture()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogFurniture();
    

  //place showSongs function in a try/catch for better error messaging
  try {
    showFurniture();
  } catch (e) {
      console.log(e);
    }
}  


// just loop through the art and console.log them
function consoleLogFurniture() {
    console.log("consoleLogFurniture()");
    furniture.forEach((furniturework) => {
      console.log("Furniture:", furniturework);
    });
  }

// loop through airtable data, and display them onto our page
function showFurniture() {
    console.log("showFurniture()");
    furniture.forEach((furniturework) => {

      //creating a new div container
      //this is where our furniture info will go
      var furnitureContainer = document.createElement("div");
      furnitureContainer.classList.add("furniture-container");
      document.querySelector(".grid-section").append(furnitureContainer);

      // add image to each song container
    var furnitureImage = document.createElement("img");
    furnitureImage.classList.add("furniture-image");
    furnitureImage.classList.add("js-modal-toggle");
    furnitureImage.src = furniturework.fields.furniture_image[0].url;
    furnitureContainer.append(furnitureImage);

    // add modal to song container
    var modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    furnitureContainer.append(modalContainer);

    // add modal box to modal container
    var modalBox = document.createElement("div");
    modalBox.classList.add("modal-box");
    modalContainer.append(modalBox);

    // add image to modal box
    var modalImage = document.createElement("img");
    modalImage.classList.add("modal-image");
    modalImage.src = furniturework.fields.furniture_image[0].url;
    modalBox.append(modalImage);

    // add song titles to modal box
    var furnitureTitle = document.createElement("h1");
    furnitureTitle.classList.add("furniture-title");
    furnitureTitle.innerText = furniturework.fields.furniture_title;
    modalBox.append(furnitureTitle);

    // add artist to modal box
    var nameOfArtist = document.createElement("h2");
    nameOfArtist.classList.add("furniture-artist");
    nameOfArtist.innerText = furniturework.fields.artist;
    modalBox.append(nameOfArtist);


    // add year to modal box
    var furnitureYear = document.createElement("h2");
    furnitureYear.classList.add("furniture-year");
    furnitureYear.innerText = furniturework.fields.year;
    modalBox.append(furnitureYear);


    // add description to modal box
    var furnitureDescription = document.createElement("p");
    furnitureDescription.classList.add("furniture-description");
    furnitureDescription.innerText = furniturework.fields.description;
    modalBox.append(furnitureDescription);

    // add close button to modal box
    var closeModalBtn = document.createElement("div");
    closeModalBtn.classList.add("modal-close-btn");
    closeModalBtn.classList.add("js-modal-toggle");
    closeModalBtn.innerHTML = "Close";
    modalBox.append(closeModalBtn);

  

    //------------------section where we can filter by genre------
    //get genre field from airtable
    //loop through the array and add each genre as a class to the song container

    var furnitureType = furniturework.fields.type;
    furnitureType.forEach (function (type){
      furnitureContainer.classList.add(type);
    });


    //add event listener to our filter 
    //to add an active class to our song

    //clicking on filter by candles
    //change backround of candles to taupe
    //else change to white

    var filterCandles = document.querySelector(".candles");
    filterCandles.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("candles")) {
        furnitureContainer.style.display = "block";
        filterCandles.style.background = "orangered";
        filterCandles.style.border = "orangered";
        filterCandles.style.color = white;
      }  else{
        furnitureContainer.style.display = "none";
        filterCandles.style.background = "white";
        filterCandles.style.border = "orangered";
        filterCandles.style.color = black;
    
      } 
    });


    var filterSeating = document.querySelector(".seating");
    filterSeating.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("seating")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterLamps = document.querySelector(".lamps");
    filterLamps.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("lamps")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });


    var filterMirrors = document.querySelector(".mirrors");
    filterMirrors.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("mirrors")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterRugs = document.querySelector(".rugs");
    filterRugs.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("rugs")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterStorage = document.querySelector(".storage");
    filterStorage.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("storage")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });


    var filterTables = document.querySelector(".tables");
    filterTables.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("tables")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterTableware = document.querySelector(".tableware");
    filterTableware.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("tableware")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterVases = document.querySelector(".vases");
    filterVases.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("vases")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterReset = document.querySelector(".reset");
    filterReset.addEventListener("click",function(){
      furnitureContainer.style.display = "block";
    
    });
  }); 







    // close and open modals
    //find all of our modals
  let modals = document.querySelectorAll(".furniture-container");

  // check if there are any modals
  if (modals) {
    modals.forEach((modal) => {
      // find each toggle within the specific modal
      const toggles = modal.querySelectorAll(".js-modal-toggle");

      // add click listener to each toggle
      toggles.forEach((toggle) => {
        toggle.addEventListener("click", function() {
          // Toggle the active state of the modal
          modal.classList.toggle("modal-is-active");
        });
      });
    });
  }
}