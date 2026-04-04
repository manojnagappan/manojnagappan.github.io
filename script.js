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


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    let lastPlayed = 0;

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            console.log("hover detected"); // 👈 debug

            const now = Date.now();

            if (now - lastPlayed > 100) {
                const sound = new Audio("hover.mp3");
                sound.volume = 0.3;
                sound.play().catch(err => console.log(err));
                lastPlayed = now;
            }
        });
    });
});
