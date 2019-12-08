function Wire_Input(source_wires, setting) {
	// source_wires = [{ value, gadget_power }, ...] all connected wires
	// setting = { set_value, live_value } setting
	this.source_wires = source_wires;
	this.setting = setting;

	this.blend_mode = blend_mode;
	if (setting.set_value === 0) {
		this.blend_mode = "override";
	}
	else {
		this.blend_mode = "modulate";
	}
	// can be changed by the creator
}

Wire_Input.prototype.process = function() {
	if (this.blend_mode === "blend") {
		var inputs = 0;
		var total_value = 0;
		for (var i = 1, l = this.source_wires.length; i < l; i++) {
			inputs += this.source_wires[i].gadget_power;
			total_value += this.source_wires[i].value;
		}
		this.setting.live_value = (total_value / inputs);
	}
	else {
		// find the highest value
		var highest = this.source_wires[0];
		for (var i = 1, l = this.source_wires.length; i < l; i++) {
			if (this.source_wires[i].value > highest) {
				highest = this.source_wires[i].value;
			}
		}
		
		if (this.blend_mode === "override") {
			this.setting.live_value = highest;
		}
		else if (this.blend_mode === "modulate") {
			this.setting.live_value = this.setting.set_value * highest;
		}
	}
};
