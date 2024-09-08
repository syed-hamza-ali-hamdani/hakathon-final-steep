function addEducation() {
    var educationList = document.getElementById('educationList');
    var newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('educationEntry');
    newEducationEntry.innerHTML = "\n        <input type=\"text\" class=\"educationInput editable-input\" placeholder=\"Education Details\">\n        <span class=\"editable-content\"></span>\n        <button type=\"button\" onclick=\"removeEntry(this)\">Remove</button>\n    ";
    educationList.appendChild(newEducationEntry);
}
function addWork() {
    var workList = document.getElementById('workList');
    var newWorkEntry = document.createElement('div');
    newWorkEntry.classList.add('workEntry');
    newWorkEntry.innerHTML = "\n        <input type=\"text\" class=\"workInput editable-input\" placeholder=\"Work Experience\">\n        <span class=\"editable-content\"></span>\n        <button type=\"button\" onclick=\"removeEntry(this)\">Remove</button>\n    ";
    workList.appendChild(newWorkEntry);
}
function addSkill() {
    var skillsList = document.getElementById('skillsList');
    var newSkillEntry = document.createElement('div');
    newSkillEntry.classList.add('skillEntry');
    newSkillEntry.innerHTML = "\n        <input type=\"text\" class=\"skillsInput editable-input\" placeholder=\"Skill\">\n        <span class=\"editable-content\"></span>\n        <button type=\"button\" onclick=\"removeEntry(this)\">Remove</button>\n    ";
    skillsList.appendChild(newSkillEntry);
}
function generateResume() {
    var nameElement = document.getElementById('name');
    var ageElement = document.getElementById('age');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var imageElement = document.getElementById('image');
    var name = nameElement.value;
    var age = ageElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var file = imageElement.files ? imageElement.files[0] : null;
    var imageUrl = file ? URL.createObjectURL(file) : 'style/image/resume-img.jpeg';
    var educationInputs = document.querySelectorAll('.educationInput');
    var education = Array.from(educationInputs)
        .map(function (input) { return input.value; })
        .filter(function (value) { return value.trim() !== ''; })
        .join('<br>');
    var workInputs = document.querySelectorAll('.workInput');
    var work = Array.from(workInputs)
        .map(function (input) { return input.value; })
        .filter(function (value) { return value.trim() !== ''; })
        .join('<br>');
    var skillsInputs = document.querySelectorAll('.skillsInput');
    var skills = Array.from(skillsInputs)
        .map(function (input) { return input.value; })
        .filter(function (value) { return value.trim() !== ''; })
        .join('<br>');
    var resumeHTML = "\n        <div class=\"header editable\" onclick=\"editSection('header')\">\n            <div class=\"img-area\">\n                <img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\">\n            </div>\n            <h1 class=\"editable-content\">").concat(name, "</h1>\n            <input type=\"text\" class=\"editable-input\" value=\"").concat(name, "\" style=\"display: none;\">\n            <h3>Full-Stack Web Developer</h3>\n        </div>\n        <div class=\"main\">\n            <div class=\"left editable\" onclick=\"editSection('personal-info')\">\n                <h2>Personal Information</h2>\n                <p><strong>Name:</strong> <span class=\"editable-content\">").concat(name, "</span><input type=\"text\" class=\"editable-input\" value=\"").concat(name, "\" style=\"display: none;\"></p>\n                <p><strong>Age:</strong> <span class=\"editable-content\">").concat(age, "</span><input type=\"text\" class=\"editable-input\" value=\"").concat(age, "\" style=\"display: none;\"></p>\n                <p><strong>Email:</strong> <span class=\"editable-content\">").concat(email, "</span><input type=\"email\" class=\"editable-input\" value=\"").concat(email, "\" style=\"display: none;\"></p>\n                <p><strong>Phone:</strong> <span class=\"editable-content\">").concat(phone, "</span><input type=\"text\" class=\"editable-input\" value=\"").concat(phone, "\" style=\"display: none;\"></p>\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n                <h2>Work Experience</h2>\n                <p>").concat(work, "</p>\n                <h2>Skills</h2>\n                <p>").concat(skills, "</p>\n            </div>\n        </div>\n    ");
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
    }
}
function editSection(section) {
    var sectionElement = document.querySelector(".".concat(section));
    if (sectionElement) {
        sectionElement.classList.toggle('editing');
    }
}
function removeEntry(button) {
    var entry = button.parentElement;
    entry.remove();
}

