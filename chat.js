let chatArea = document.getElementById('chatArea');
let userInput = document.getElementById('userInput');
let sendButton = document.getElementById('sendButton');
let clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function() {
  let chatArea = document.getElementById('chatArea');
  chatArea.innerHTML = ''; // Clear the chat area
});


// Example of a very basic response system
let getBotResponse = (userText) => {
    let botResponse = 'Sorry, I didn\'t understand that.';
    if (userText.toLowerCase() === 'hi') {
        botResponse = 'Hi, my name is Milo. Can i tell you a joke?';
    } else if (userText.toLowerCase().includes('yes tell me')) {
        botResponse = 'I know they say that money talks, but all mine says is ‘Goodbye.! wanna hear another one?';
    } else if (userText.toLowerCase().includes('another one')) {
        botResponse = 'Why don\'t skeletons fight each other? They don\'t have the guts! Do you wanna hear a quote now?';
    }  else if (userText.toLowerCase().includes('no')) {
        botResponse = 'how about a quote';
    }  else if (userText.toLowerCase().includes('quote')) {
        botResponse = 'The only limit to our realization of tomorrow will be our doubts of today.';
    } else if (userText.toLowerCase().includes('time')) {
        let now = new Date();
        let time = now.toLocaleTimeString();
        botResponse = 'The current time is ' + time;
    }  else if (userText.toLowerCase().includes('day')) {
        let now = new Date();
        let day = now.toLocaleDateString('en-US', { weekday: 'long' });
        botResponse = 'Today is ' + day + '.';
    } else if (userText.toLowerCase().includes('thank you')) {
        botResponse = 'You\'re welcome!';
    } else if (userText.toLowerCase().includes('joke')) {
        botResponse = ' used to have a handle on life, but then it broke!';
    } else if (userText.toLowerCase().includes('music')) {
        botResponse = 'What genre of music do you enjoy listening to?';
    } else if (userText.toLowerCase().includes('movie')) {
        botResponse = 'Do you have any favorite movies?';
    } else if (userText.toLowerCase().includes('favorite movie')) {
            botResponse = 'That\'s great! I\'ll make a note of it. By the way, one of my favorite movies is Wolf Children. It\'s an animated film that you should check out!';
    } else if (userText.toLowerCase().includes('are you real')) {
        botResponse = 'I am an AI, which stands for Artificial Intelligence. So while I am not a human, I am a real piece of software that can chat with you!';
    } else if (userText.toLowerCase().includes('Chatgpt')) {
        botResponse = 'I am an Chatbox, Not Chatgpt. So while I dont have a big database, I am a Program by my creator Debora Narvaez! with limited knowledge';
    }

    return botResponse;
}

sendButton.addEventListener('click', function() {
    let userText = userInput.value;
    userInput.value = '';
    chatArea.innerHTML += '<span class="user">You: ' + userText + '</span><br>';
    
    setTimeout(function() {
        let botResponse = getBotResponse(userText);
        chatArea.innerHTML += '<span class="bot">Milo: ' + botResponse + '</span><br>';
        chatArea.scrollTop = chatArea.scrollHeight;
    }, 1000);

    chatArea.scrollTop = chatArea.scrollHeight;
});
