var button = document.getElementById('chat_button');
var chatContentBlock = document.getElementById('chat_content');
var chatUserInput = document.getElementById('input_text_chat');
var chatHistory = document.getElementById("chat_container");
const buttonPress = () => {
  button.classList.remove('collapsible')
  button.classList.add('display-none')

  chatContentBlock.classList.remove('display-none');
  chatContentBlock.classList.add('display-block');

}

const closeChatBox = () => {
  button.classList.add('collapsible')
  button.classList.remove('display-none')

  chatContentBlock.classList.add('display-none');
  chatContentBlock.classList.remove('display-block');
}

const emojibutton1 = document.querySelector('#emoji_button');

const picker = new EmojiButton();

emojibutton1.addEventListener('click', () => {
  picker.togglePicker(emojibutton1);

});

picker.on('emoji', emoji => {
  document.querySelector('#input_text_chat').value += emoji;
});

const sendMessage = () => {
  console.log('message')
}


// const getResponse = (message) => {
//   let userHtml = '<p class="userText"><span>' + message + '</span></p>';
// }

chatUserInput.onkeypress = (e) => {
  if (e.which == 13) {
    debugger
    getResponse()
  }
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function firstBotMessage() {
  let firstMessage = "How's it going? , this is chat box from counsling team, we are happy to help you?"
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("chat_container").scrollIntoView(false);
}

firstBotMessage();

function getResponse() {
  debugger
  let userText = $("#input_text_chat").val();

  if (userText == "") {
    userText = "I love Code Palace!";
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $("#input_text_chat").val("");
  $("#chat_container").append(userHtml);
  // document.getElementById("chat_container").scrollIntoView(true);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000)

}

function getHardResponse() {
  let botResponse = 'Try asking something else!'
  let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
  $("#chat_container").append(botHtml);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  // document.getElementById("chat_container").scrollIntoView(true);
}


