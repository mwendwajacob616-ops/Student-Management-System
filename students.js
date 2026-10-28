
const studentTableBody = document.getElementById("studentTableBody");

function displayStudents() {
const students = JSON.parse(localStorage.getItem("students")) || [];

studentTableBody.innerHTML = "";

if (students.length === 0) {
    studentTableBody.innerHTML = `
        <tr>
            <td colspan="9">No student records available.</td>
        </tr>
    `;
    return;
}

students.forEach(function(student, index) {
    const row = document.createElement("tr");

   row.innerHTML = `
    <td>${index + 1}</td> 
    <td>${student.admissionNumber}</td> 
    <td>${student.fullName}</td> 
    <td>${student.email}</td> 
    <td>${student.phone}</td> 
    <td>${student.course}</td>                                              
    <td>${student.yearOfStudy}</td> 
    <td>${student.status}</td> 
    <td> 
    <button type="button" class="edit-btn">Edit</button> 
    <button type="button" class="delete-btn">Delete</button> 
    </td> 
    `;

    studentTableBody.appendChild(row);
});

}

displayStudents();
