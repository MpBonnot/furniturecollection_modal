
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

    var furnitureColor = furniturework.fields.color;
    furnitureColor.forEach (function (color){
      furnitureContainer.classList.add(color);
    });



    //add event listener to our filter 
    //to add an active class to our song

    //clicking on filter by candles
    //change backround of candles to taupe
    //else change to white

    var filterRed = document.querySelector(".red");
    filterRed.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("red")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
    
      } 
    });


    var filterOrange = document.querySelector(".orange");
    filterOrange.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("orange")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterYellow = document.querySelector(".yellow");
    filterYellow.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("yellow")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });


    var filterGreen = document.querySelector(".green");
    filterGreen.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("green")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterBlue = document.querySelector(".blue");
    filterBlue.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("blue")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterPurple = document.querySelector(".purple");
    filterPurple.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("purple")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });


    var filterPink = document.querySelector(".pink");
    filterPink.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("pink")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterBrown = document.querySelector(".brown");
    filterBrown.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("brown")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterBlack = document.querySelector(".black");
    filterBlack.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("black")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterCream = document.querySelector(".cream");
    filterCream.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("cream")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterGrey = document.querySelector(".grey");
    filterGrey.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("grey")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });

    var filterWhite = document.querySelector(".white");
    filterWhite.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("white")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });


    var filterMetallic = document.querySelector(".metallic");
    filterMetallic.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("metallic")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });



    var filterWood = document.querySelector(".wood");
    filterWood.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("wood")) {
        furnitureContainer.style.display = "block";
      }  else{
        furnitureContainer.style.display = "none";
      } 
    });



    var filterGlass = document.querySelector(".glass");
    filterGlass.addEventListener("click",function(){
      if (furnitureContainer.classList.contains("glass")) {
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