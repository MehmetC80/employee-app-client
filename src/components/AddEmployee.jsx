export const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl shadow-sm border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add new Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 ">
          <label className="block text-gray-600 text-sm font-normal px-2 py-2">
            First Name
          </label>
          <input type="text" className="h-10 w-96 border mt-2" />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 py-2">
          <label className="block text-gray-600 text-sm font-normal px-2 py-2">
            Last Name
          </label>
          <input type="text" className="h-10 w-96 border mt-2" />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 py-2">
          <label className="block text-gray-600 text-sm font-normal px-2 py-2">
            Email
          </label>
          <input type="email" className="h-10 w-96 border mt-2" />
        </div>
        <div className="items-center justify-center h-14 w-full my-8 space-x-4 py-4">
          <button className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700">
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
