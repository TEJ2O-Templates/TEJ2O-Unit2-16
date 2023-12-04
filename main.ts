
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})


/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program uses the bluetooth radios
 * Also, using the new standard of using a while (true) statement
*/

// setup
radio.setGroup(1)
basic.showIcon(IconNames.Happy)

// loop forever
while (true) {
    if (input.buttonIsPressed(Button.A) == true) {
        radio.sendString("Hello, World!")
    }
    radio.onDataReceived(() => {
        basic.clearScreen()
        let message: string = radio.receiveString()
        basic.showString(message)
        basic.showIcon(IconNames.Happy)
    })
}
