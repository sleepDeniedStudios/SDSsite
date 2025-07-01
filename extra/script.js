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

document.querySelectorAll('.progress-bar').forEach(bar => {
  const widthStr = bar.style.width;
  if (!widthStr) return;
  const percent = parseInt(widthStr);

  if (percent === 100) {
    bar.classList.add('full');
  } else {
    bar.classList.remove('full');
  }
});

