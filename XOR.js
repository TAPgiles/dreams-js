function XOR(number_of_ports) { // exclusive OR gate
	this.number_of_ports = number_of_ports;
}
Object.defineProperties(XOR.prototype, {
	A: {
		set: function(value) { // input signal
			this.A_current = value;
		}
	}, // repeat for all ports

	result: {
		get: function() { // output signal
			var result = this.A_current;
			if (this.B_current >= 0) {
				if (result >= 0) { return 0; }
				else { result = this.B_current; }
			}
			if ((this.number_of_ports >= 3) && (this.C_current >= 0)) {
				if (result >= 0) { return 0; }
				else { result = this.C_current; }
			} // repeat for each port

			return result;
		}
	}
});
