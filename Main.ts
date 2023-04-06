import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee1 = new Employee('Tran', "Khiem", new Date('2001-11-14'), 'HN', 'Staff', 1);
let employee2 = new Employee('Nguyen', "Ngoc", new Date('2001-01-15'), 'HN', 'Boss', 2);

let employeeManager = new EmployeeManager();

employeeManager.add(employee1);
employeeManager.add(employee2);

employeeManager.showList();
employeeManager.employeeInfo(2);
employeeManager.delete(1);
employeeManager.showList();

let employee3 = new Employee('Tran', "Khiem", new Date('2001-11-14'), 'HN', 'Staff', 2)
employeeManager.update(1, employee3);

employeeManager.showList();


