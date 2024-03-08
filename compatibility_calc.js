/*
Task
    - Take in an input (object containing an array of applicants and team members)
    - Produce an output of applicants that contain:
        - Name
        - Compatibility score 
*/  

const fs = require('fs');

// Function to calculate compatibility score 
function calcCompatibility(team, applicant) {
    // Initialize a value to store the total difference between the attributes of the applicant and the avg attributes of the team
    let totalDifference = 0;

    // let attrKeys represent the number of attributes of 1st team member's attributes object
        // Assuming that all team members and applicants have the same attributes
    let attrKeys = Object.keys(team[0].attributes)

    // For every attribute in the total list 
    for (let attr of attrKeys) {
        // Initialize a variable to store the sum of all attribute values across all team members
        let sum = 0;

        // Iterate through team members
        for (let i in team.length) {
            // Add value of current member's attribute (attr) to sum variable
            sum += team[i].attributes[attr];
        }

        // Calculate avg value of current attribute across all team members by dividing sum by number of team members
        let teamAverage = sum / team.length;

        // Calculate absolute difference between team's avg attribute value (teamAverage) and the corresponding attribute value of the applicant (applicant.attributes[attr])
        totalDifference += Math.abs(teamAverage - applicant.attributes[attr]);
    }
        // maxDifference used to normalize the difference between the attribute values to a standardized range to make compatibility score comparable
            // Max is assumed to be a value of 5
        let maxDifference = attrKeys.length * 5;

        // Calculate the compatibility score by subtracting ratio of totalDifference to maxDifference from 1
            // Will yield score between 0 and 1 (0 - no compatibility, 1 - perfect compatibility)
        return 1 - (totalDifference / maxDifference);
}

// Function to score each application 
function scoreApplicants(team, applicants) {
    // Initialize an array to store resulting output 
    let scoredApplicants = [];

    // For every applicant
    for (let applicant of applicants) {
        // Calculate compatibility score
        let score = calcCompatibility(team, applicant);
        // Push result to scoredApplicants array and include keys "name" and "score"
        scoredApplicants.push({name: applicant.name, score});
    }
    return {scoredApplicants};
}

// Define inputData by reading input.json file
let inputData = JSON.parse(fs.readFileSync('input.json', 'utf8'));

// Define outputData as the result of scored applicants function
let outputData = scoreApplicants(inputData.team, inputData.applicants);

// Output result in console 
console.log(outputData);