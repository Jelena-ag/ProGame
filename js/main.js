// const btnMobile = document.querySelector('.navbar-toggler');
// const navMobile = document.querySelector('.navbar-nav');

// document.addEventListener('DOMContentLoaded', function () {
// 	const nav = document.querySelector('.navbar');
// 	const allNavItems = document.querySelectorAll('.nav-link');
// 	const navList = document.querySelector('.navbar-collapse');

// 	function addShadow() {
// 		if (window.scrollY >= 130) {
// 			nav.classList.add('shadow-bg');
// 		} else {
// 			nav.classList.remove('shadow-bg');
// 		}
// 	}

// 	allNavItems.forEach(item => item.addEventListener('click', () => {
// 		navList.classList.remove('show')
// 	}));

// 	window.addEventListener('scroll', addShadow);
// });

// function addShadowMobile() {
// 	navMobile.classList.add('shadow-bg');
// }

// btnMobile.addEventListener('click', addShadowMobile);


document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show');
		})
	);

	window.addEventListener('scroll', addShadow);
});

