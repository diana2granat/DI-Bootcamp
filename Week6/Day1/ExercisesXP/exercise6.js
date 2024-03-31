// 🌟 Exercise 6 : Fortune teller
// Instructions

//     1)Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//     2)The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const sentenceDom = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    document.getElementById('sentence').innerHTML = sentenceDom;
})(1, "Ofer", "Petah Tikva", "Software Engineer");
