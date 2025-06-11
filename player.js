const urlParams = new URLSearchParams(window.location.search);
const file = urlParams.get('video');

if (file) {
  const videoUrl = `https://yingandseng.s3.us-east-1.amazonaws.com/videos/${file}.mp4`;

  const player = document.getElementById("videoPlayer");
  const name = document.getElementById("videoName");
  const downloadBtn = document.getElementById("downloadBtn");

  player.src = videoUrl;
  name.textContent = `Now Playing: ${file}.mp4`;
  downloadBtn.href = videoUrl;
  downloadBtn.textContent = "Download Video";
} else {
  document.body.innerHTML = "<h2>Video not specified.</h2>";
}
