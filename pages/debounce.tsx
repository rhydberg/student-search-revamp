function basic_debounce(func, time) {
	let timer;
	return ((...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), time);
	});
}

export default basic_debounce;