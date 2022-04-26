// start coding your function here!
function running_late(date) {
	var time = date.split(" ")[3].split(":")[0];
	time = parseInt(time);
	if (time >= 22)
		return "It is late!";
	return "It is still early!";
}

module.exports = {
        running_late,
};
