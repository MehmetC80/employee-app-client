import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../services/employeeService";

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
                <tr key={emp.id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm"> {emp.firstname}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{emp.lastname}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{emp.emailId}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Edit
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-800">
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
