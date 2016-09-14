# SurveyMonkey Response Mapper

The SurveyMonkey API returns survey responses that have IDs representing the answers in the survey, instead of the actual text of the answer. This requires mapping between the survey and response manually, a bit of a bitch, considering all the different control types. 

This module provides an interface for doing this mapping, and returning a simplified response object with each answer text inline with the question itself, instead of the IDs.

Care has been taken to cover all current SurveyMonkey controls. Submit a pull request if you fix someting that's amiss!
