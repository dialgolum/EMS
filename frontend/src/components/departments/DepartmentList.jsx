import React from "react";
import { Link } from "react-router-dom";

const DepartmentList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Departments</h3>
      </div>
      <div className="justify-between flex items-center">
        <input
          type="text"
          placeholder="Search by Department Name"
          className="px-4 py-0.5 w-1/4 border"
        />
        <Link
          to="/admin-dashboard/add-department"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add new Department
        </Link>
      </div>
    </div>
  );
};

export default DepartmentList;
