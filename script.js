const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

function populateSkills() {
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

function greet() {
    const nameInput = document.getElementById('greet-name');
    const name = nameInput.value.trim();
    if (name) {
        alert(`Hello, ${name}! Nice to meet you!`);
    } else {
        alert('Hello, nice to meet you!');
    }
}

document.addEventListener('DOMContentLoaded', populateSkills);
