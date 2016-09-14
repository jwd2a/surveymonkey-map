module.exports = function(q, response) {
	var z = [];

	response.answers.forEach(function(a){
		
		// If there is only one row, without text, it's a star or NPS rating

		if (q.answers.rows.length === 1 && q.answers.rows[0].text == "") {
			var selCol = q.answers.choices.find(function(choice){
				return choice.id == a.choice_id;
			});	
			
			z = selCol.text || selCol.position;

		} else {
			var selRow = q.answers.rows.find(function(row){
				return row.id == a.row_id;	
			});	

			var selCol = q.answers.choices.find(function(choice){
				return choice.id == a.choice_id;
			});

			z.push({
				item: selRow.text,
				answer: selCol.text
			});		
		}
	});
	
	return z;
}

