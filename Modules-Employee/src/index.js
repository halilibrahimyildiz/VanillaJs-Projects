import { Request } from './request.js';
import { UI } from './ui';

// Elemetleri Seçme

const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const employeeList = document.getElementById('employees');

salaryInput.insertAdjacentElement
const request = new Request('http://localhost:3000/employees');

const ui = new UI();
let updateState = null;

addEventListeners();


function addEventListeners(e) {
    document.addEventListener('DOMContentLoaded', getAllEployees);
    form.addEventListener('submit', addEmployee);
    employeeList.addEventListener('click', deleteOrUpdateEmployee);

}

function getAllEployees() {
    request
        .get()
        .then(employees => {
            ui.addAllEmployeeToUI(employees);
        })
        .catch(err => console.log(err));
}

function addEmployee(e) {
    const nameEmployee = nameInput.value.trim();
    const departmentEmployee = departmentInput.value.trim();
    const salaryEmployee = salaryInput.value.trim();

    if (nameEmployee === '' || departmentEmployee === '' || salaryEmployee === '') {
        alert('Lütfen Tüm Alanları Doldurunuz');
    } else {
        request
            .post({ name: nameEmployee, department: departmentEmployee, salary: salaryEmployee })
            .then(employee => {
                ui.addNewEmployeUI(employee);
                console.log(employee);
            })
            .catch(err => console.log(err));
    }

    ui.UIClear();
    e.preventDefault();
}

function deleteOrUpdateEmployee(e) {


    if (e.target.id === 'delete-employee') {
        // Silme

        deleteEmployee(e.target);

    } else if (e.target.id === 'update-employee') {

        // Güncelleme

        updateEmployeeController(e.target.parentElement.parentElement);



    }
}

function deleteEmployee(targetEmployee) {
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request
        .delete(id)
        .then(message => {
            ui.deleteToUI(targetEmployee.parentElement.parentElement);
        })
        .catch(err => console.log(err));
}

function updateEmployeeController(targetEmployee) {

    console.log(targetEmployee)
    ui.toggleUpdateButton(targetEmployee, updateEmployee)

    updateState = null

    if (updateState === null) {
        updateState = {
            updateId: targetEmployee.children[3].textContent,
            updateParent: targetEmployee
        }
    }

}

function updateEmployee() {
    const updatedName = document.getElementById('update-name');
    const updatedDepartment = document.getElementById('update-department');
    const updatedSalary = document.getElementById('update-salary');

    const nameEmployee = updatedName.value.trim();
    const departmentEmployee = updatedDepartment.value.trim();
    const salaryEmployee = Number(updatedSalary.value.trim());
    const data = { name: nameEmployee, department: departmentEmployee, salary: salaryEmployee };

    if (updateState) {
        // Güncelleme
        request
            .put(updateState.updateId, data)
            .then(updatedEmployee => {
                ui.updateToUI(updatedEmployee, updateState.updateParent);
            }).catch(err => console.log(err))

    }

}