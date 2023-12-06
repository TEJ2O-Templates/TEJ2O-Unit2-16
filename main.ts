/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program uses the bluetooth radios
*/

// setup
radio.setGroup(1)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  radio.sendString("Hello, World!")
})

radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})
