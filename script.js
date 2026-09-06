const cube = document.getElementById('cube');

const clickOnSide = (side) => {
  const activeSide = cube.dataset.side;
  cube.classList.replace(`show-${activeSide}`, `show-${side}`);
  cube.setAttribute('data-side', side);
};

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const sideToTurn = e.currentTarget.dataset.side;
    clickOnSide(sideToTurn);

    document.querySelectorAll('.btn').forEach((b) => b.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
  });
});
