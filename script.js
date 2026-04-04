function openTab(event, id) {
    const contents = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');

    contents.forEach(c => c.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
}

function toggleBibtex(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "none" || el.style.display === "")
    ? "block"
    : "none";
}


// Get audio element AFTER page loads
let hoverSound;

document.addEventListener("DOMContentLoaded", () => {
    hoverSound = document.getElementById("hoverSound");

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play().catch(() => {}); // avoid error
            }
        });
    });
});

// Unlock audio after first click
document.addEventListener("click", () => {
    if (hoverSound) {
        hoverSound.play().then(() => {
            hoverSound.pause();
            hoverSound.currentTime = 0;
        }).catch(() => {});
    }
}, { once: true });
