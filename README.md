### Compatibility Predictor Guide and Explanation

To generate compability scores for applicants, the scores of the chosen attributes - technical skill, soft skill, and intelligence, for each applicant are compared to the average value for the attributes across all team members. 

For each attribute, the difference between the applicants score and the team's avearage attribute value is calculated. The absolute value of each difference is then summed to calculate the total difference between the applicant and team member averages. Absolute value is used to prevent positive and negative differences from cancelling each other out.

Additionally, to ensure the compatibility scores are comparable across different scenarios, the total differences are normalized. To do this, the total difference is compared to the maximum possible difference score, which in this case would be 15. This is under the assumption that there are 3 attributes with maximum values of 5.

From these values, the score is calculated by subtracting the ratio of the total difference to the maximum possible difference from 1. This will produce a score between 0 and 1, with 0 indicating no compatibility and 1 being perfect compatibility. 
