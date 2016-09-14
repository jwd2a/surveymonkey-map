module.exports = function(q, response) {
	var z = [];

	response.answers.forEach(function(a){

		var selCol, selChoice;

		var selRow = q.answers.rows.find(function(row){
			return row.id == a.row_id;	
		});	

		q.answers.cols.forEach(function(col){
			if (col.id == a.col_id) {
				selCol = col;
				selChoice = col.choices.find(function(choice){
			    return choice.id == a.choice_id;		
				});
			}		
		});

		z.push({
			item: selRow.text,
			column: selCol.text,
			answer: selChoice.text
		});		
	});
	console.log(z);
	return z;
}
