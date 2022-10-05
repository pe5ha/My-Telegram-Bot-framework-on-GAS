
/**
 * Логирование всех сообщений, нажатий кнопок и всего прочего приходящего в бота в таблицу
 * @param {String} text - Текст обновления в нужном для таблице виде
 */
function logUpdate(text) {
  let tLog = table.getSheetByName(LogSheet);
  if(tLog == null) { // если такого листа нет
    table.insertSheet(LogSheet); // то такой лист создаётся
    tLog = table.getSheetByName(LogSheet);
  }
  let saveData = [];
  saveData.push(Utilities.formatDate(new Date(date * 1000), "GMT+3", "dd.MM.yyyy HH:mm:ss"));
  saveData.push(user_id);
  saveData.push(nick);
  saveData.push(name);
  saveData.push(text);
  tLog.insertRowBefore(2);
  tLog.getRange(2, 1, 1, saveData.length).setValues([saveData]);
}

/**
 * Логирование всего что исходит пользователям ИЗ бота. То есть сообщения от бота
 * @param {String} text - Текст обновления в нужном для таблице виде
 */
function logBotSending(text) {
  let tLog = table.getSheetByName(LogSheet);
  let saveData = [];
  saveData.push(Utilities.formatDate(new Date(date * 1000), "GMT+3", "dd.MM.yyyy HH:mm:ss"));
  saveData.push(chat_id);
  saveData.push(nick);
  saveData.push(name);
  saveData.push("");
  saveData.push(text);
  tLog.insertRowBefore(2);
  tLog.getRange(2, 1, 1, saveData.length).setValues([saveData]);
}

function logDebug(e){
  let tDebug = table.getSheetByName(DebugSheet);
  if(tDebug == null) { // если такого листа нет
    table.insertSheet(DebugSheet); // то такой лист создаётся
    tDebug = table.getSheetByName(DebugSheet);
  }
  tDebug.getRange(1, 3).setValue(JSON.stringify(e, null, 5));
  let contents = JSON.parse(e.postData.contents);
  tDebug.getRange(1, 1).setValue(JSON.stringify(contents, null, 5));
}

/**
 * @deprecated use logUpdate with text parameter instead 
 */
function logButtons() {
  let tLog = table.getSheetByName(LogSheet);
  let saveData = [];
  saveData.push(Utilities.formatDate(new Date(), "GMT+3", "dd.MM.yyyy HH:mm:ss"));
  saveData.push(user_id);
  saveData.push(nick);
  saveData.push(name);
  saveData.push("Кнопка: " + data);
  tLog.insertRowBefore(2);
  tLog.getRange(2, 1, 1, saveData.length).setValues([saveData]);
}

/**
 * @deprecated use logUpdate with text parameter instead 
 */
function logMessages() {
  let tLog = table.getSheetByName(LogSheet);
  let saveData = [];
  saveData.push(Utilities.formatDate(new Date(date * 1000), "GMT+3", "dd.MM.yyyy HH:mm:ss"));
  saveData.push(user_id);
  saveData.push(nick);
  saveData.push(name);
  saveData.push(text);
  tLog.insertRowBefore(2);
  tLog.getRange(2, 1, 1, saveData.length).setValues([saveData]);
}

