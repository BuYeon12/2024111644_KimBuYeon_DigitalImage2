function toggleFrame() {
    var hiddenFrame = document.getElementById('hidden-frame');
    if (hiddenFrame.style.display === 'none' || hiddenFrame.style.display === '') {
      hiddenFrame.style.display = 'flex';
    } else {
      hiddenFrame.style.display = 'none';
    }
  }
  