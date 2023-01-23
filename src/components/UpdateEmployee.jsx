import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

export const UpdateEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstname: "",
    lastname: "",
    emailId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await employeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();

    employeeService
      .updateEmployee(id, employee)
      .then((res) => {
        navigate("/employeeList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex max-w-2xl shadow-sm border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 ">
          <label className="block text-gray-600 text-sm font-normal px-2 py-2">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            value={employee.firstname}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 py-2">
          <label className="block text-gray-600 text-sm font-normal px-2 py-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            value={employee.lastname}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 py-2">
          <label className="block text-gray-600 text-sm font-normal px-2 py-4">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-8 space-x-4 py-8">
          <button
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
