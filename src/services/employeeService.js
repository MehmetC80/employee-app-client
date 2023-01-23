import axios from "axios";

const EMPLOYEE_API_BASE_URL = `${import.meta.env.VITE_EMPLOYEE_API}`;

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}

export default new EmployeeService();
