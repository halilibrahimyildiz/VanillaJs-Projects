export class UI {
    constructor() {
        this.employeeList = document.getElementById('employees');
        this.updateEmployeeBtn = document.getElementById('update');

        this.nameInput = document.getElementById('name');
        this.departmentInput = document.getElementById('department');
        this.salaryInput = document.getElementById('salary');


        this.emp = document.getElementById("emp")
    }
    UIClear() {
        this.nameInput.value = '';
        this.departmentInput.value = '';
        this.salaryInput.value = '';
    }
    addAllEmployeeToUI(employees) {
        let result = '';

        employees.forEach(employee => {
            result += `
             <tr id="emp">
                                            
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><button type="button" class="btn btn-danger" id="update-employee">Güncelle</button></td> 
                <td><button type="button" class="btn btn-danger" id="delete-employee">Sil</button></td>
            
            </tr>
                                                    
            `;
        });

        this.employeeList.innerHTML = result;
    }
    addNewEmployeUI(employee) {
        this.employeeList.innerHTML += `
             <tr>                                       
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><button type="button" class="btn btn-danger" id="update-employee">Güncelle</button></td> 
                <td><button type="button" class="btn btn-danger" id="delete-employee">Sil</button></td>
            
            </tr>
                                                    
            `;
    }
    deleteToUI(element) {
        console.log(element);
        element.remove();
    }
    toggleUpdateButton(target, update) {


        const updateBtn = target.children[4].children[0];
        console.log(updateBtn)


        if (updateBtn.textContent === "Güncelle") {
            console.log(updateBtn.textContent)

            this.addEmployeeInfo(updateBtn);



        } else if (updateBtn.textContent === "Bitir") {

            update();
            updateBtn.textContent = "Güncelle";


        }


    }
    addEmployeeInfo(target) {
        const parent = target.parentElement.parentElement
        const children = parent.children;

        console.log(parent)
        console.log(target);



        parent.innerHTML = `
             <tr >
                <td class="updated"><input type="text" id="update-name" class="updateInput" value="${children[0].textContent}"></td>     
                <td class="updated"><input type="text" id="update-department" class="updateInput" value="${children[1].textContent}"></td>     
                <td class="updated"><input type="text" id="update-salary" class="updateInput" value="${children[2].textContent}"></td>                 
                <td>${children[3].textContent}</td>
                <td><button type="button" class="btn btn-danger" id="update-employee">Bitir</button></td> 
                <td><button type="button" class="btn btn-danger" id="delete-employee">Sil</button></td>
            
            </tr>
                                                    
            `
            // this.nameInput.value = children[0].textContent
            // this.departmentInput.value = children[1].textContent
            // this.salaryInput.value = children[2].textContent

    }
    updateToUI(employee, parentElement) {
        console.log(parentElement)
        parentElement.innerHTML = `
             <tr>
                                            
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><button type="button" class="btn btn-danger" id="update-employee">Güncelle</button></td> 
                <td><button type="button" class="btn btn-danger" id="delete-employee">Sil</button></td>
            
            </tr>
                                                    
            `;

        this.UIClear();
    }

}