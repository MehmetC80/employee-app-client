import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../../services/employeeService";
import { Employee } from "./Employee";

export const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await employeeService.getEmployees();
        setEmployees(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    employeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((emp) => emp.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="roubded bg-green-500 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="text-left font-medium uppercase py-3 px-6 tracking-wider">
                First Name
              </th>
              <th className="text-left font-medium uppercase py-3 px-6 tracking-wider">
                Last Name
              </th>
              <th className="text-left font-medium uppercase py-3 px-6 tracking-wider">
                Email ID
              </th>
              <th className="text-right font-medium uppercase py-3 px-6 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-slate-100 text-slate-900">
              {employees.map((emp) => (
                <Employee
                  emp={emp}
                  key={emp.id}
                  deleteEmployee={deleteEmployee}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
