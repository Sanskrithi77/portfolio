const cube = document.getElementById('cube');
const faces = document.querySelectorAll('.cube-face');

const setActiveFace = (side) => {
  faces.forEach((face) => {
    const isActive = face.classList.contains(`cube-face-${side}`);
    face.style.visibility = isActive ? 'visible' : 'hidden';
    face.style.pointerEvents = isActive ? 'auto' : 'none';
  });
};

const clickOnSide = (side) => {
  const activeSide = cube.dataset.side;
  cube.classList.replace(`show-${activeSide}`, `show-${side}`);
  cube.setAttribute('data-side', side);
  setActiveFace(side);
};

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const sideToTurn = e.currentTarget.dataset.side;
    clickOnSide(sideToTurn);

    document.querySelectorAll('.btn').forEach((b) => b.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
  });
});

// Set the correct initial state on load (front is active by default)
setActiveFace(cube.dataset.side);

// Force click handling on contact buttons to bypass browser 3D hit-testing bugs
document.addEventListener('click', (e) => {
  const target = e.target.closest('.contact-cta, .contact-line');
  if (target) {
    const href = target.getAttribute('href');
    if (href) {
      if (target.hasAttribute('download')) {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = href;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(href, '_blank');
      }
    }
  }
});