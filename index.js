/*
 * Takes a survey response and a survey object, and returns a survey response with answers mapped instead of IDs
 */

exports.mapResponse = function(survey, response) {
	var mappedResponse = [];
	
	// Flatten out the survey by removing 	
  var questions = [];	
	var responses = [];

	survey.pages.forEach(function(page) {
		page.questions.forEach(function(question){
			questions.push(question);
		});
	});
	
	response.pages.forEach(function(page) {
		page.questions.forEach(function(question){
			responses.push(question);
		});
	});

	// Iterate through each response, find the question, map the response answer IDs to the question answer IDs

	responses.forEach(function(response){
		var mappedQuestion = {};
	  questions.forEach(function(q){
			if (q.id == response.id) {
				mappedQuestion.question = q.headings[0].heading;
				
				// Map answers based on what kind of question this is
				
				if (q.family == 'single_choice') {
					q.answers.choices.forEach(function(answer){
						if (answer.id == response.answers[0].choice_id){
							mappedQuestion.answer = answer.text;
						}
					});
				}

				if (q.family == 'multiple_choice') {
					mappedQuestion.answer = [];
					q.answers.choices.forEach(function(answer){
						response.answers.forEach(function(a){
							console.log("Checking answer " + answer.id + "against a " + a.choice_id);
							if (answer.id == a.choice_id) {
								mappedQuestion.answer.push(answer.text);
							}
						});
					});
				}

				if (q.family == 'open_ended' && q.subtype == 'single') {
					mappedQuestion.answer = response.answers[0].text;
				}

				mappedResponse.push(mappedQuestion);
			}
		});		
	});

	console.log(mappedResponse);


}
