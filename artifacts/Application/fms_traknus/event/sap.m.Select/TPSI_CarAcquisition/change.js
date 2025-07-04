if (TPSI_CarAcquisition.getVisible()) {
    paginationBarCarAcquisition.pagination.take = parseInt(TPSI_CarAcquisition.getSelectedKey());
}

let result = await apiGET_CarAcquisitionCount();

paginationBarCarAcquisition.pagination.count = result.count;
paginationBarCarAcquisition.pagination.index = 0;
paginationBarCarAcquisition.run(true); 
paginationBarCarAcquisition.handlePagination();