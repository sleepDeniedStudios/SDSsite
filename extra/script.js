function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  document.getElementById(id).classList.add('active');

  // Update nav buttons
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Highlight current button
  const matchingButton = Array.from(document.querySelectorAll('nav button')).find(
    btn => btn.textContent.replace(/\s/g, '').toLowerCase() === id.toLowerCase()
  );
  if (matchingButton) matchingButton.classList.add('active');
}

// Apply .full class to 100% progress bars
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const width = parseFloat(bar.style.width);
    if (width >= 100) {
      bar.classList.add("full");
    }
  });
});
