//event handler
const chat = document.getElementById('chatBtn');
chat.addEventListener('click', function () {
    const phoneArea = document.getElementById('phone');
    phoneArea.style.display = 'none';
    const videoArea = document.getElementById('video');
    videoArea.style.display = 'none';
    const chatArea = document.getElementById('chat');
    chatArea.style.display = 'block';
    const chatImage = document.getElementById('chatImg');
    chatImage.style.margin ='-33% 0px 0px 93.5%';
});

const phone = document.getElementById('phoneBtn');
phone.addEventListener('click', function () {
    const chatArea = document.getElementById('chat');
    chatArea.style.display = 'none';
    const videoArea = document.getElementById('video');
    videoArea.style.display = 'none';
    const phoneArea = document.getElementById('phone');
    phoneArea.style.display = 'block';
    const phoneImage = document.getElementById('phoneImg');
    phoneImage.style.margin ='-43% 0px 0px 117%';
});

const video = document.getElementById('videoBtn');
video.addEventListener('click', function () {
    const phoneArea = document.getElementById('phone');
    phoneArea.style.display = 'none';
    const chatArea = document.getElementById('chat');
    chatArea.style.display = 'none';
    const videoArea = document.getElementById('video');
    videoArea.style.display = 'block';
    const videoImage = document.getElementById('videoImg');
    videoImage.style.margin ='-41% 0px 0px 118.5%';
});