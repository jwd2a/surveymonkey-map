module.exports = function(q, response) {
	var z = [];
	q.answers.choices.forEach(function(answer){
		response.answers.forEach(function(a){
			if (answer.id == a.choice_id) {
				z.push(answer.text);
			}
		});
	});
	return z;
}
