var dateTimeBoth = require("./modules/datetime-both");
var demographicInternational = require("./modules/demographic-international");
var singleChoiceMenu = require("./modules/single-choice-menu");
var matrixMenu = require("./modules/matrix-menu");
var matrixRanking = require("./modules/matrix-ranking");
var matrixRating = require("./modules/matrix-rating");
var multipleChoice = require("./modules/multiple-choice");
var openEndedEssay = require("./modules/open-ended-essay"); 
var openEndedMulti = require("./modules/open-ended-multi"); 
var openEndedSingle = require("./modules/open-ended-single"); 
var singleChoice = require("./modules/single-choice");

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
				
 /*       if (q.family == 'datetime' && q.subtype == 'both') {*/
					//mappedQuestion.answer = dateTimeBoth(q, response);
				//}
				
				/*if (q.family == 'demographic' && q.subtype == 'international') {*/
					//mappedQuestion.answer = demographicInternational(q, response);
				/*}*/
				
				/*if (q.family == 'matrix' && q.subtype == 'menu') {*/
					//mappedQuestion.answer = matrixMenu(q, response);
				/*}*/
				
				if (q.family == 'matrix' && q.subtype == 'ranking') {
					mappedQuestion.answer = matrixRanking(q, response);
				}
				
				if (q.family == 'matrix' && q.subtype == 'rating') {
					mappedQuestion.answer = matrixRating(q, response);
				}
					
				if (q.family == 'single_choice' && q.subtype == 'menu') {
					mappedQuestion.answer = singleChoiceMenu(q, response);
				}
				
				if (q.family == 'single_choice') {
					mappedQuestion.answer = singleChoice(q, response);	
				}

				if (q.family == 'multiple_choice') {
					mappedQuestion.answer = multipleChoice(q, response);
				}

				if (q.family == 'open_ended' && q.subtype == 'single') {
					mappedQuestion.answer = openEndedSingle(q, response);	
				}

				if (q.family == 'open_ended' && q.subtype == 'essay') {
					mappedQuestion.answer = openEndedEssay(q, response);
				}

				if (q.family == 'open_ended' && q.subtype == 'multi') {
					mappedQuestion.answer = openEndedMulti(q, response);
				}

				mappedResponse.push(mappedQuestion);
			}
		});		
	});

	console.log(mappedResponse);
}

if (!Array.prototype.find) {
	Array.prototype.find = function(predicate) {
		'use strict';
		if (this == null) {
			throw new TypeError('Array.prototype.find called on null or undefined');
		}
		if (typeof predicate !== 'function') {
			throw new TypeError('predicate must be a function');
		}
		var list = Object(this);
		var length = list.length >>> 0;
		var thisArg = arguments[1];
		var value;

		for (var i = 0; i < length; i++) {
			value = list[i];
			if (predicate.call(thisArg, value, i, list)) {
				return value;
			}
		}
		return undefined;
	};
}
