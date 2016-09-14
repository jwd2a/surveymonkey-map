module.exports = function(q, response){
	var z = {};
	
	response.answers.forEach(function(answer){
		var selRow = q.answers.rows.find(function(row){
			return row.id == answer.row_id;	
		});	

		z[selRow.text.trim()] = answer.text;
	});

	return z;
}
