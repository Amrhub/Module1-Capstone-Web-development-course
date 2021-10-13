const hamburgerMenu = document.querySelector('.hamburger-img');
const collapseList = document.querySelector('.collapse-list');
const closeBtn = document.getElementById('close-btn');
const collapseListLinks = Array.from(collapseList.querySelectorAll('a'));
const desktopNavbarLinks = Array.from(
  document.querySelectorAll('.desktop-navbar ul li')
);

hamburgerMenu.addEventListener('click', () => {
  collapseList.style.position = 'static';
  collapseList.style.transform = 'scale(1)';
});

function closeMobileMenu(link) {
  collapseList.style.transform = 'scale(0)';
  if (!link) {
    setTimeout(() => {
      collapseList.style.position = 'absolute';
    }, 450);
  } else {
    collapseList.style.position = 'absolute';
  }
}

function activeTab(link) {
  const currentActiveTab = document.querySelector('.active-tab');
  currentActiveTab.classList.remove('active-tab');
  link.lastElementChild.classList.add('active-tab');
}

closeBtn.addEventListener('click', () => {
  closeMobileMenu(0);
});

collapseListLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.id === 'home-link' || link.id === 'about-link') {
      closeMobileMenu(0);
    } else closeMobileMenu(1);
  });
});

desktopNavbarLinks.forEach((link) => {
  if (link.lastElementChild.textContent !== 'Join') {
    link.addEventListener('click', () => activeTab(link));
  }
});
