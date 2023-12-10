// src/services/StaffService.js
import { useState } from 'react';

const useStaffService = () => {
  const [staffList, setStaffList] = useState([]);

  const getStaffList = () => staffList;

  const addOrUpdateStaff = (staff) => {
    const updatedStaffList = [...staffList.filter((s) => s.id !== staff.id), staff];
    setStaffList(updatedStaffList);
  };

  return {
    getStaffList,
    addOrUpdateStaff,
  };
};

export default useStaffService;
