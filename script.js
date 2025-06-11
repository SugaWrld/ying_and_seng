const gallery = document.getElementById("gallery");
const start = 0;
const end = 55;

for (let i = start; i <= end; i++) {
  const file = i.toString().padStart(5, '0');
  const videoUrl = `https://yingandseng.s3.us-east-1.amazonaws.com/videos/${file}.mp4`;

  const video = document.createElement("video");
  video.src = videoUrl;
  video.preload = "metadata";
  video.muted = true;
  video.playsInline = true;

  video.onloadeddata = () => {
    const card = document.createElement("div");
    card.className = "card";

    const link = document.createElement("a");
    link.href = `player.html?video=${file}`;
    link.appendChild(video);

    card.appendChild(link);
    card.innerHTML += `<a href="${videoUrl}" download class="btn">Download</a>`;
    gallery.appendChild(card);
  };

  video.onerror = () => {
    console.log(`Skipping missing file: ${videoUrl}`);
  };
}
