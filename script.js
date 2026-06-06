const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent('LayerHive Quote Request');
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Email: ${data.get('email')}
Project type: ${data.get('type')}
Quantity: ${data.get('quantity')}
Material / color: ${data.get('material')}

Project notes:
${data.get('notes')}

I will attach my STL file if available.`
  );
  window.location.href = `mailto:layerhiveinc@gmail.com?subject=${subject}&body=${body}`;
});
