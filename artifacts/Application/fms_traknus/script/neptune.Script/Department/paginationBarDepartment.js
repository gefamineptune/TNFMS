var paginationBarDepartment = {
    configuration: {
        maxNumberOfButtons: 6 //number maximo of page buttons 
    },
    pagination: {
        take: 10,
        index: 0,
        count: 0
    },
    run: async function (keepIndex) {

        // Pagination

        if (!keepIndex) paginationBarDepartment.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarDepartment.pagination.take,
            skip: paginationBarDepartment.pagination.take * paginationBarDepartment.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarDepartment.pagination.take,
                skip: paginationBarDepartment.pagination.take * paginationBarDepartment.pagination.index
            }
        }

        await apiGET_Department(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarDepartment.pagination.count / paginationBarDepartment.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarDepartment.pagination.count <= paginationBarDepartment.pagination.take) maxIndex = 1;

        TP_First_Department.setEnabled(true);
        TP_Prev_Department.setEnabled(true);
        TP_Next_Department.setEnabled(true);
        TP_Last_Department.setEnabled(true);

        if (paginationBarDepartment.pagination.index < 0) paginationBarDepartment.pagination.index = 0;

        if (paginationBarDepartment.pagination.index === 0) {
            TP_First_Department.setEnabled(false);
            TP_Prev_Department.setEnabled(false);
        }

        if ((paginationBarDepartment.pagination.index + 1) >= maxIndex) {
            TP_Next_Department.setEnabled(false);
            TP_Last_Department.setEnabled(false);
        }

        TPP_Department.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarDepartment.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarDepartment.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_Department.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_Department.setSelectedKey(paginationBarDepartment.pagination.index);
        TPT_Department.setNumber((paginationBarDepartment.pagination.index + 1) + "/" + maxIndex);

    }
}
