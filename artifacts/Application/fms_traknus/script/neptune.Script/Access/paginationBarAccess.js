var paginationBarAccess = {
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

        if (!keepIndex) paginationBarAccess.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarAccess.pagination.take,
            skip: paginationBarAccess.pagination.take * paginationBarAccess.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarAccess.pagination.take,
                skip: paginationBarAccess.pagination.take * paginationBarAccess.pagination.index
            }
        }

        await apiGET_Access(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarAccess.pagination.count / paginationBarAccess.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarAccess.pagination.count <= paginationBarAccess.pagination.take) maxIndex = 1;

        TP_First_Access.setEnabled(true);
        TP_Prev_Access.setEnabled(true);
        TP_Next_Access.setEnabled(true);
        TP_Last_Access.setEnabled(true);

        if (paginationBarAccess.pagination.index < 0) paginationBarAccess.pagination.index = 0;

        if (paginationBarAccess.pagination.index === 0) {
            TP_First_Access.setEnabled(false);
            TP_Prev_Access.setEnabled(false);
        }

        if ((paginationBarAccess.pagination.index + 1) >= maxIndex) {
            TP_Next_Access.setEnabled(false);
            TP_Last_Access.setEnabled(false);
        }

        TPP_Access.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarAccess.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarAccess.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_Access.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_Access.setSelectedKey(paginationBarAccess.pagination.index);
        TPT_Access.setNumber((paginationBarAccess.pagination.index + 1) + "/" + maxIndex);

    }
}
