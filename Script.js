// JavaScript to play the video continuously
const video = document.getElementById('background-video');

// Loop the video when it ends
video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play();
});
