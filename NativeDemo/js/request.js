document.writeln('<script src="../js/axios.min.js"></script>');

var request = {
	get: function(url, callback) {
		axios.get(url).then(function(res) {
			callback(res);
		})
	},
	post: function(url, body, callback) {
		axios.post(url, body).then(function(res) {
			callback(res);
		})
	}
}