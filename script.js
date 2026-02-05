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
