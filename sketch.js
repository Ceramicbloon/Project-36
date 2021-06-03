//Create variables here
var dog, dog1, happyDog, database, foods, foodStock
var feed, addFood
var fedTime, lastFed
var foodObj
var milk

function preload() {
  dog1 = loadImage("Dog.png")
  happyDog = loadImage("HappyDog.png")
  milk = loadImage("Milk.png")

  //load imaes here
}


function setup() {
  createCanvas(1500, 500);
  database = firebase.database()
  dog = createSprite(1100, 300, 20, 20)
  dog.addImage(dog1)
  dog.scale = 0.3

  feed = createButton("Feed")
  feed.position(750, 5)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800, 5)
  addFood.mousePressed(moreFood)
}

// function readStock(data) {
//   foods = data.val()
// }

// function writeStock(x) {

//   if (x <= 0) {
//     x = 0
//   } else {
//     x = x - 1
//   }
//   database.ref('/').update({
//     Food: x
//   })
// }
//foodObj = new Food()
function feedDog() {
  dog.addImage(happyDog)

  database.ref("Food").on("value", (data) => {
    foods = data.val()

  })
  if (foods > 0) {
    if (foods != undefined) {
      database.ref('/').update({
        Food: foods - 1,
        fedTime: hour()
      })
    }
  }
  //console.log(foods)



}

function moreFood() {
  database.ref("Food").on("value", (data) => {
    foods = data.val()

  })
  if (foods < 20) {
    if (foods != undefined) {
      database.ref('/').update({
        Food: foods + 1
      })
    }
  }
}



function draw() {
  background(46, 139, 87)
  textSize(20)
  fill("white")
  // foodStock = database.ref('Food')
  // foodStock.on("value", Food.getFoodStock)
  // if (keyDown(UP_ARROW)) {
  //   writeStock(foods)
  //   dog.addImage(happyDog)
  // }
  // fill("white")
  // textSize(20)
  // text("Food Remaining:" + foods, 410, 200)
  // textSize(15)
  // text("Press up arrow key to feed this.dog!", 140, 20)
  fedTime = database.ref('fedTime')
  fedTime.on("value", function (data) {
    fedTime = data.val();
    //console.log(fedTime)
    if (fedTime >= 12) {
      text("Last fed: " + fedTime % 12 + " PM", 600, 25)
    } else if (fedTime === 0) {
      text("Last fed: 12 AM", 600, 25)
    } else {
      text("Last fed: " + fedTime + " AM", 600, 25)
    }
  })
  drawSprites();
  //foodObj.display();
  //add styles here
  imageMode(CENTER)
  //image(milk, 720, 220, 70, 70)
  database.ref("Food").on("value", (data) => {
    foods = data.val()
  })

    if (foods != 0) {
      var x = 80, y = 130

      for (var i = 0; i < foods; i++) {
        if (i % 10 == 0) {
          x = 150;
          
         
          y = y + 80
          

        }
        image(milk, x, y, 100, 100);
        x = x + 50
      }



    }
   
  

}



