function Counter(current_value, target_value) {
	this.current_value = current_value;
	this.target_value = target_value;
}
Object.defineProperties(Counter.prototype, {
	counter_full: { get: function() { // output signal
		return this.current_value === this.target_value;
	} },
	count_progress: { get: function() { // output signal
		return this.current_value / this.target_value;
	} }
});
Counter.prototype = {
	increase: function() { // input trigger
		this.current_value++;
	},
	decrease: function() { // input trigger
		this.current_value--;
	},
	reset: function() { // input trigger
		this.current_value = 0;
	}
};
