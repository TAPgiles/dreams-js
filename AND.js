function AND(number_of_ports) {
	this.number_of_ports = number_of_ports; // minimum: 2, maximum: 10
}
Object.defineProperties(AND.prototype, {
	A: {
		set: function(value) { // input signal
			this.A_current = value;
		}
	}, // repeat for all ports

	result: {
		get: function() { // output signal
			var result = this.A_current;
			if (this.B_current < result) { result = this.B_current; }
			if ((this.number_of_ports >= 3) && (this.C_current < result)) {
				result = this.C_current;
			} // repeat for each port
			
			return result;
		}
	}
});
