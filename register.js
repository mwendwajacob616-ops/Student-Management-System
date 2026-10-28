const studentForm = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");

console.log("Register JavaScript loaded!");

studentForm.addEventListener("submit", function(event) {
console.log("Registration form submitted!");

event.preventDefault();

const admissionNumber = document.getElementById("admissionNumber").value.trim();
const fullName = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const gender = document.getElementById("gender").value;
const course = document.getElementById("course").value;
const yearOfStudy = document.getElementById("yearOfStudy").value;
const status = document.getElementById("status").value;

const students = JSON.parse(localStorage.getItem("students")) || [];

const studentExists = students.some(function(student) {
    return student.admissionNumber.toLowerCase() === admissionNumber.toLowerCase();
});

if (studentExists) {
    formMessage.textContent = "Error: This admission number is already registered.";
    formMessage.style.color = "red";
    return;
}

const newStudent = {
    admissionNumber: admissionNumber,
    fullName: fullName,
    email: email,
    phone: phone,
    gender: gender,
    course: course,
    yearOfStudy: yearOfStudy,
    status: status
};

students.push(newStudent);
localStorage.setItem("students", JSON.stringify(students));

formMessage.textContent = "Student registered successfully!";
formMessage.style.color = "green";

studentForm.reset();

});
