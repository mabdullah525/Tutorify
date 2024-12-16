// NAV BAR
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

// TABS
document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tab');
  let contents = document.querySelectorAll('.tab-content');

  tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
          let targetId = tab.id.replace('Tab', 'Content');

          // Hide all content divs
          contents.forEach(function (content) {
              content.classList.add('hidden');
          });

          // Remove active class from all tabs
          tabs.forEach(function (tab) {
              tab.classList.remove('text-input', 'font-bold', 'bg-input');
              tab.classList.add('text-btn-col', 'font-semibold');
          });

          // Show the target content
          document.getElementById(targetId).classList.remove('hidden');

          // Add active class to the clicked tab
          tab.classList.add('text-input', 'font-bold', 'border-blue-600');
          tab.classList.remove('text-btn-col', 'font-semibold');
      });
  });
});