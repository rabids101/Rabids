const chatBox = document.getElementById("chat-box");
const userMessageInput = document.getElementById("user-message");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userMessageInput.value.trim();
    addUserMessage(userMessage);
    // Replace the bot's response with an actual response from your chatbot service or logic
   if(userMessage=="Abc125El"){
    
  
    addBotMessage("eliteids.discord@mail.ru");
         addBotMessage("E1LITEIDSS54QNS55Z4a");

    userMessageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  else{
        addBotMessage("Incorrect code");

  }
}

function addUserMessage(message) {
  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.textContent = message;
  chatBox.appendChild(userDiv);
}

function addBotMessage(message) {
  const botDiv = document.createElement("div");
  botDiv.className = "bot-message";
  botDiv.textContent = message;

  const copyButton = document.createElement("button");
  copyButton.className = "copy-button";
  copyButton.textContent = "Copy";
  copyButton.addEventListener("click", () => {
    copyToClipboard(message);
  });

  botDiv.appendChild(copyButton);
  chatBox.appendChild(botDiv);
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
