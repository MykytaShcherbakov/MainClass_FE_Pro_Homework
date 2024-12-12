


const form = document.getElementById('addNewStudentForm');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;


    const student = {
        firstname: firstname,
        lastname: lastname,
        age: age
    };


    console.log(student);

    form.reset();
});

function renderStudents(students) {
    const container = document.getElementById('studentsContainer');
    container.innerHTML = '';

    students.forEach(student => {
        const card = document.createElement('div');
        card.classList.add('studentCard');
        if (student.age < 18) {
            card.classList.add('young');
        }

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${student.firstname} ${student.lastname}`;

        const ageParagraph = document.createElement('p');
        ageParagraph.textContent = `Age: ${student.age}`;

        card.appendChild(nameParagraph);
        card.appendChild(ageParagraph);

        container.appendChild(card);
    });
}
