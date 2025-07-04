if (TPSI_Department.getVisible()) {
    paginationBarDepartment.pagination.take = parseInt(TPSI_Department.getSelectedKey());
}

let result = await apiGET_DepartmentCount();

paginationBarDepartment.pagination.count = result.count;
paginationBarDepartment.pagination.index = 0;
paginationBarDepartment.run(true); 
paginationBarDepartment.handlePagination();