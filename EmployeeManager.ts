import {Employee} from "./Employee";

export class EmployeeManager {
    static employeeList: Employee[] = [];

    constructor() {
    }

    showList() {
        EmployeeManager.employeeList.forEach((employee: Employee) => {
            console.log(`lastname: ${employee.getLastname()}, role: ${employee.getRole()}`);
        });
    }

    add(employee: Employee) {
        EmployeeManager.employeeList.push(employee);
    }

    employeeInfo(id: number) {
        let result = EmployeeManager.employeeList.filter((employee: Employee) => employee.getId() === id);
        console.log(result);
    }

    delete(id: number) {
        let result = EmployeeManager.employeeList.findIndex((employee: Employee) => employee.getId() === id);
        EmployeeManager.employeeList.splice(result, 1);
    }

    update(id: number, employee: Employee) {
        let result = EmployeeManager.employeeList.findIndex((employee: Employee) => employee.getId() === id);
        EmployeeManager.employeeList.splice(result, 1, employee);
    }
}