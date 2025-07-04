var paginationBarCarRemarks = {
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

        if (!keepIndex) paginationBarCarRemarks.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarRemarks.pagination.take,
            skip: paginationBarCarRemarks.pagination.take * paginationBarCarRemarks.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarRemarks.pagination.take,
                skip: paginationBarCarRemarks.pagination.take * paginationBarCarRemarks.pagination.index
            }
        }

        await apiGET_CarRemarks(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarRemarks.pagination.count / paginationBarCarRemarks.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarRemarks.pagination.count <= paginationBarCarRemarks.pagination.take) maxIndex = 1;

        TP_First_CarRemarks.setEnabled(true);
        TP_Prev_CarRemarks.setEnabled(true);
        TP_Next_CarRemarks.setEnabled(true);
        TP_Last_CarRemarks.setEnabled(true);

        if (paginationBarCarRemarks.pagination.index < 0) paginationBarCarRemarks.pagination.index = 0;

        if (paginationBarCarRemarks.pagination.index === 0) {
            TP_First_CarRemarks.setEnabled(false);
            TP_Prev_CarRemarks.setEnabled(false);
        }

        if ((paginationBarCarRemarks.pagination.index + 1) >= maxIndex) {
            TP_Next_CarRemarks.setEnabled(false);
            TP_Last_CarRemarks.setEnabled(false);
        }

        TPP_CarRemarks.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarRemarks.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarRemarks.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarRemarks.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarRemarks.setSelectedKey(paginationBarCarRemarks.pagination.index);
        TPT_CarRemarks.setNumber((paginationBarCarRemarks.pagination.index + 1) + "/" + maxIndex);

    }
}
