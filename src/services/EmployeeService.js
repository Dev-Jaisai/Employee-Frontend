import axios from "axios";

const EMPLOYEE_SERVICE_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_SERVICE_BASE_URL,employee);
  }
}

export default new EmployeeService();
