module.exports = function(q, response){
	var z;
	q.answers.choices.forEach(function(answer){
		if (answer.id == response.answers[0].choice_id){
			z = answer.text;
		}
	});
	return z;
}
