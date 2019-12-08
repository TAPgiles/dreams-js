function Selector(number_of_ports) {
	this.number_of_ports = number_of_ports;
	this.passthrough = false;
	
	this.hidden_active_port = 0;
}

Object.defineProperties(Selector.prototype, {
	A: {
		set: function(value) { // input signal
			if (this.passthrough) {
				this.A_current = value;
			}
			else {
				if (value > 0) {
					this.hidden_active_port = 0;
				}
			}
		},
		get: function() { // output signal
			if (this.powered && this.active_port === 0) {
				return this.A_current;
			}
		}
	}, // repeat for the other ports

	active_port: {
		set: function(value) { // input signal
			if (value < 0) { this.hidden_active_port = 0; }
			else if (value > this.number_of_ports) {
				this.hidden_active_port = this.number_of_ports - 1;
			}
			else {
				value = Math.floor(value); // round down
				this.hidden_active_port = value;
			}
		},
		get: function() { // output signal
			return this.hidden_active_port;
		}
	}
});
Selector.prototype = {
	next: function() { // input trigger
		this.active_port++;
	},
	previous: function() { // input trigger
		this.active_port--;
	}
};
