var SM = require('../index');

var response = {
	"total_time" : 5,
	"survey_id" : "83782329",
	"custom_value" : "",
	"date_created" : "2016-08-29T20:35:16+00:00",
	"metadata" : {},
	"collection_mode" : "default",
	"edit_url" : "http://www.surveymonkey.com/r/?sm=HE0fZFOj6JR3VGxQo0Rhuy0_2ByDMXh6qHUdgw5sZwmprpeX6Tq6H0DVBLdj1KfCXB",
	"date_modified" : "2016-08-29T20:35:22+00:00",
	"analyze_url" : "http://www.surveymonkey.com/analyze/browse/E1_2BxdPmhzTkmDL26lRC18z8ou1S_2B3JYt4powkqi6jW4_3D?respondent_id=4938835159",
	"recipient_id" : "",
	"href" : "https://api.surveymonkey.net/v3/responses/4938835159",
	"response_status" : "completed",
	"id" : "4938835159",
	"page_path" : [],
	"custom_variables" : {},
	"collector_id" : "90414226",
	"pages" : [
		{
		"id" : "251807401",
		"questions" : [
			{
			"id" : "1004323634",
			"answers" : [
				{
				"choice_id" : "10504196603"
			}
			]
		},
		{
			"answers" : [
				{
				"choice_id" : "10504200756"
			},
			{
				"choice_id" : "10504200758"
			}
			],
			"id" : "1004324285"
		},
		{
			"answers" : [
				{
				"text" : "justin@maderalabs.com"
			}
			],
			"id" : "1004324484"
		}
		]
	}
	],
	"ip_address" : "72.186.115.142",
	"logic_path" : {}
}

var survey = {
	"preview" : "http://www.surveymonkey.com/r/Preview/?sm=DHBZ_2BcWQle6ZMgWXkD6GCf5xIicP1OQdZSWMVAlYlsk_3D",
	"question_count" : 3,
	"analyze_url" : "http://www.surveymonkey.com/analyze/E1_2BxdPmhzTkmDL26lRC18z8ou1S_2B3JYt4powkqi6jW4_3D",
	"href" : "https://api.surveymonkey.net/v3/surveys/83782329",
	"buttons_text" : {
		"exit_button" : "",
		"prev_button" : "Prev",
		"next_button" : "Next",
		"done_button" : "Done"
	},
	"date_created" : "2016-08-23T20:19:00",
	"id" : "83782329",
	"page_count" : 1,
	"collect_url" : "http://www.surveymonkey.com/collect/list?sm=E1_2BxdPmhzTkmDL26lRC18z8ou1S_2B3JYt4powkqi6jW4_3D",
	"date_modified" : "2016-08-29T20:45:00",
	"language" : "en",
	"category" : "",
	"custom_variables" : {},
	"response_count" : 9,
	"edit_url" : "http://www.surveymonkey.com/create/?sm=E1_2BxdPmhzTkmDL26lRC18z8ou1S_2B3JYt4powkqi6jW4_3D",
	"pages" : [
		{
		"title" : "",
		"questions" : [
			{
			"headings" : [
				{
				"heading" : "This is a question about how perfect you are for this research:"
			}
			],
			"position" : 1,
			"subtype" : "vertical",
			"sorting" : null,
			"family" : "single_choice",
			"href" : "https://api.surveymonkey.net/v3/surveys/83782329/pages/251807401/questions/1004323634",
			"validation" : null,
			"visible" : true,
			"forced_ranking" : false,
			"required" : null,
			"id" : "1004323634",
			"answers" : {
				"choices" : [
					{
					"text" : "I'm awesome",
					"position" : 1,
					"visible" : true,
					"id" : "10504196603"
				},
				{
					"id" : "10504196604",
					"visible" : true,
					"position" : 2,
					"text" : "I'm OK"
				},
				{
					"visible" : true,
					"id" : "10504196606",
					"text" : "I totally suck",
					"position" : 3
				},
				{
					"position" : 4,
					"text" : "Toast",
					"id" : "10504196608",
					"visible" : true
				}
				]
			}
		},
		{
			"family" : "multiple_choice",
			"subtype" : "vertical",
			"sorting" : null,
			"position" : 2,
			"headings" : [
				{
				"heading" : "This is a multi-select, because that's badass n shit."
			}
			],
			"answers" : {
				"choices" : [
					{
					"id" : "10504200756",
					"visible" : true,
					"text" : "Cats",
					"position" : 1
				},
				{
					"text" : "Dogs",
					"position" : 2,
					"id" : "10504200757",
					"visible" : true
				},
				{
					"visible" : true,
					"id" : "10504200758",
					"position" : 3,
					"text" : "Llamas"
				}
				]
			},
			"id" : "1004324285",
			"required" : null,
			"forced_ranking" : false,
			"visible" : true,
			"validation" : null,
			"href" : "https://api.surveymonkey.net/v3/surveys/83782329/pages/251807401/questions/1004324285"
		},
		{
			"subtype" : "single",
			"sorting" : null,
			"family" : "open_ended",
			"position" : 3,
			"headings" : [
				{
				"heading" : "Your email address:"
			}
			],
			"id" : "1004324484",
			"forced_ranking" : false,
			"visible" : true,
			"required" : null,
			"validation" : null,
			"href" : "https://api.surveymonkey.net/v3/surveys/83782329/pages/251807401/questions/1004324484"
		}
		],
		"id" : "251807401",
		"description" : "",
		"href" : "https://api.surveymonkey.net/v3/surveys/83782329/pages/251807401",
		"question_count" : 3,
		"position" : 1
	}
	],
	"title" : "My Test Screener",
	"summary_url" : "http://www.surveymonkey.com/summary/E1_2BxdPmhzTkmDL26lRC18z8ou1S_2B3JYt4powkqi6jW4_3D"
}
	
SM.mapResponse(survey, response);
