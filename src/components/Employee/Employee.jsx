export const Employee = ({ emp, deleteEmployee }) => {
  return (
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
        <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, emp.id)}
          className="text-red-600 hover:text-red-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};
