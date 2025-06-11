const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('video');

if (videoId) {
  const videoSrc = `videos/${videoId}.mp4`;

  const player = document.getElementById("videoPlayer");
  const name = document.getElementById("videoName");
  const downloadBtn = document.getElementById("downloadBtn");

  player.src = videoSrc;
  name.textContent = `Now Playing: ${videoId}.mp4`;
  downloadBtn.href = videoSrc;
  downloadBtn.textContent = "Download Video";
} else {
  document.body.innerHTML = "<h2>Video not found or not specified.</h2>";
}
