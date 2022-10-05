

function directMessage(){



  if (text == "/start") {
    if(userRegister(user_id)){ // проверка и регистрация если это новый юзер в боте
      // TODO новый юзер
    }
    
    botSendText(token, chat_id, text);
  }
  else if (text.startsWith("/start ")) { // start deep link
    if(userRegister(user_id)){ // проверка и регистрация если это новый юзер в боте
      // TODO новый юзер
    }
    let payload = text.split(" ")[1];

  }
  else {
    botSendText(token, chat_id, text);
  }

  // else if (text == "/help" || text == "/help@terraforming_mars_bot") {
  //   textToSend = tTexts.getRange('B1').getValue();
  //   TelegramAPI.sendText(token, chat_id, textToSend);
  // }
  // else if (text == "/givemyid" || text == "/givemyid@terraforming_mars_bot") {
  //   textToSend = user_id + "";
  //   TelegramAPI.sendText(token, chat_id, textToSend);
  // }
  // else if (text.startsWith("@")) {
  //   let requestedID = getUseridByUsername(text);
  //   if (requestedID != null) textToSend = requestedID + "";
  //   else textToSend = tTexts.getRange('B2').getValue().replaceAll("${text}", text);
  //   TelegramAPI.sendText(token, chat_id, textToSend);
  // }
  // else { // логика
  //   textToSend = tTexts.getRange('B3').getValue();
  //   TelegramAPI.sendText(token, chat_id, textToSend);
  // }
}