class FoodF {
    constructor() {
        this.image = loadImage("Milk.png")
    }
    
    getFoodStock() {
        
         
    }
    updateFoodStock() {
       
    }
    deductFood(x) {
        if (x <= 0) {
            x = 0
          } else {
            x = x - 1
          }  
    }
    display() {
        // var x = 80
        // var y = 100

        // imageMode(CENTER)
        // image(this.image, 720, 220, 70, 70)
        
        
    }

}