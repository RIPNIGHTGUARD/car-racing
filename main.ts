let Score = 0
let Player_Car: game.LedSprite = null
let Game_On = false
input.onButtonPressed(Button.A, function () {
    if (0 > 0) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (0 < 4) {
    	
    }
})
basic.forever(function () {
    Score = 0
    Player_Car = game.createSprite(2, 4)
    Game_On = true
    while (Game_On == true) {
        basic.pause(100)
    }
    Score += Score
    game.gameOver()
})
