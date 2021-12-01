if (location.hostname != 'localhost') {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/sw.js');
		});
	}
}