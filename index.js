var singleChoice = require("./modules/single-choice");
var multipleChoice = require("./modules/multiple-choice");
var openEndedSingle = require("./modules/open-ended-single"); 

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
					mappedQuestion.answer = singleChoice(q, response);	
				}

				if (q.family == 'multiple_choice') {
					mappedQuestion.answer = multipleChoice(q, response);
				}

				if (q.family == 'open_ended' && q.subtype == 'single') {
					mappedQuestion.answer = openEndedSingle(q, response);	
				}

				mappedResponse.push(mappedQuestion);
			}
		});		
	});

	console.log(mappedResponse);
}
