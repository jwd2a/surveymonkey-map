module.exports = function(q, response) {
	var z = [];
	response.answers.forEach(function(a){
		q.answers.rows.forEach(function(questionRow){
			if (questionRow.id == a.row_id) {
				z.push({
					item: questionRow.text,
					answer: a.text		
				});
			}
		});
	});
	return z;
}

