function NOT() {
}
Object.defineProperties(XOR.prototype, {
	result: {
		set: function(value) { // input signal
			this.current = value;
		},
		get: function() { // output signal
			if (this.current > -1) { return 0; }
			else if (this.current < 0) { return -1 - this.current; }
			else if (this.current < 1) { return 1 - this.current; }
			else { return 0; }
		}
	}
});
