
/**
 *   Bot use cases detecting (User Roles and Current actions)
 */
function useCases(){
  
  // user current actions 1
  if(user.currentAction==UserCurrentActions.input_OGS_id||user.role==UserRoles.without_role){ 
    
  } 

  // User without current action
  else if(user.currentAction==UserCurrentActions.without_action){
    
  }

  // otherwise
  else {
    botSendText(chat_id, bot_answer_for_unknown);
  }
}

