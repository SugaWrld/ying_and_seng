const gallery = document.getElementById("gallery");
const folder = "videos/";
const start = 0;
const end = 55;

for (let i = start; i <= end; i++) {
  const filename = i.toString().padStart(5, "0") + ".mp4";
  const video = document.createElement("video");
  video.src = folder + filename;
  video.preload = "metadata";
  video.muted = true;

  // When video is loaded, show the card
  video.onloadeddata = () => {
    const card = document.createElement("div");
    card.className = "card";

    video.onclick = () => openModal(video.src);

    card.appendChild(video);
    card.innerHTML += `<a href="${video.src}" download class="btn">Download</a>`;
    gallery.appendChild(card);
  };

  // If not found (404), skip
  video.onerror = () => {
    // Silent skip
  };
}

function openModal(src) {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modalVideo.src = src;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modal.style.display = "none";
}
