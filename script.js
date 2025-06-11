const gallery = document.getElementById("gallery");
const start = 0;
const end = 55;

for (let i = start; i <= end; i++) {
  const file = i.toString().padStart(5, '0');
  const videoUrl = `https://yingandseng.s3.us-east-1.amazonaws.com/videos/${file}.mp4`;

  const video = document.createElement("video");
  video.src = videoUrl;
  video.muted = true;
  video.autoplay = false;
  video.loop = false;
  video.controls = false;
  video.playsInline = true;
  video.preload = "metadata";
  video.width = 300;
  video.height = 180;
  video.style.borderRadius = "12px";
  video.style.objectFit = "cover";
  video.controls = false;

  video.onloadeddata = () => {
    const card = document.createElement("div");
    card.className = "card";

    const link = document.createElement("a");
    link.href = `player.html?video=${file}`;
    link.appendChild(video);

    const download = document.createElement("a");
    download.href = videoUrl;
    download.download = "";
    download.className = "btn";
    download.textContent = "Download";

    card.appendChild(link);
    card.appendChild(download);
    gallery.appendChild(card);
  };

  video.onerror = () => {
    console.log(`Skipping missing file: ${videoUrl}`);
  };
}
