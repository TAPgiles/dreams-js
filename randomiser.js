function Randomiser(randomise_mode, number_of_ports) {
	this.number_of_ports = number_of_ports;
	
	this.to_output = 1;

	this.randomise_mode = randomise_mode;

	if (randomise_mode === "shuffle") {
		var order = [];
		while (order.length < this.number_of_ports) {
			var found = false;
			while (!found) {
				var possible = choose_random_port(this.number_of_ports);
				if (!order.includes(possible)) {
					order.push(possible);
					found = true;
				}
			}
		}

		this.shuffled_order = order;
		this.shuffle_index = 0;
	}

	this.active_port = 0; // output signal
	this.randomise();
}

Randomiser.prototype.randomise = function() {
	if (this.randomise_mode === "true random") {
		this.active_port = choose_random_port(this.number_of_ports);
	}
	else if (this.randomise_mode === "no repeat") {
		var previous_port = this.active_port;
		var found = true;
		while (!found) {
			var possible = choose_random_port(this.number_of_ports);
			if (possible !== previous_port) {
				this.active_port = possible;
				found = true;
			}
		}
	}
	else if (this.randomise_mode === "shuffle") {
		var current_index = this.shuffle_index;
		
		// move on to next shuffled port, looping to the start
		this.shuffle_index++;
		if (this.shuffle_index >= this.active_port) { this.shuffle_index = 0; }

		return this.shuffled_order[current_index];
	}
};

function choose_random_port(number_of_ports) {
	var random = Math.random();
	// changes to a random port
	return Math.floor(this.number_of_ports * random);
}

Object.defineProperties(Randomiser.prototype, {
	A: { get: function() {
		if (this.active_port === 0) {
			return this.to_output;
		}
	} }, // repeat for each port

	input_to_randomise: { set: function(value) { // input signal
		this.to_output = value;
	} }
});
