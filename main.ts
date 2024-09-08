function addEducation(): void {
    const educationList = document.getElementById('educationList')!;
    const newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('educationEntry');
    newEducationEntry.innerHTML = `
        <label for="education">Education Details:</label>
        <input type="text" name="education[]" class="educationInput">
    `;
    educationList.appendChild(newEducationEntry);
}

function addWork(): void {
    const workList = document.getElementById('workList')!;
    const newWorkEntry = document.createElement('div');
    newWorkEntry.classList.add('workEntry');
    newWorkEntry.innerHTML = `
        <label for="work">Work Experience:</label>
        <input type="text" name="work[]" class="workInput">
    `;
    workList.appendChild(newWorkEntry);
}

function addSkill(): void {
    const skillsList = document.getElementById('skillsList')!;
    const newSkillEntry = document.createElement('div');
    newSkillEntry.classList.add('skillEntry');
    newSkillEntry.innerHTML = `
        <label for="skills">Skills (comma separated):</label>
        <input type="text" name="skills[]" class="skillsInput">
    `;
    skillsList.appendChild(newSkillEntry);
}

function generateResume(): void {
    // Get form values
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const ageElement = document.getElementById('age') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const imageElement = document.getElementById('image') as HTMLInputElement;

    const name = nameElement.value;
    const age = ageElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;

    // Read the image file
    const file = imageElement.files ? imageElement.files[0] : null;
    const imageUrl = file ? URL.createObjectURL(file) : 'style/image/resume-img.jpeg';

    // Collect Education, Work Experience, and Skills
    const educationInputs = document.querySelectorAll('.educationInput') as NodeListOf<HTMLInputElement>;
    const workInputs = document.querySelectorAll('.workInput') as NodeListOf<HTMLInputElement>;
    const skillsInputs = document.querySelectorAll('.skillsInput') as NodeListOf<HTMLInputElement>;

    const education = Array.from(educationInputs).map(input => input.value).filter(value => value.trim() !== '').join('<br>');
    const work = Array.from(workInputs).map(input => input.value).filter
}


