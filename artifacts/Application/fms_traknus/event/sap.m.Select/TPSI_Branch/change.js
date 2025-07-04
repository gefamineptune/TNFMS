if (TPSI_Branch.getVisible()) {
    paginationBarBranch.pagination.take = parseInt(TPSI_Branch.getSelectedKey());
}

let result = await apiGET_BranchCount();

paginationBarBranch.pagination.count = result.count;
paginationBarBranch.pagination.index = 0;
paginationBarBranch.run(true); 
paginationBarBranch.handlePagination();