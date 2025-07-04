var paginationBarStatus = {
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

        if (!keepIndex) paginationBarStatus.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarStatus.pagination.take,
            skip: paginationBarStatus.pagination.take * paginationBarStatus.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarStatus.pagination.take,
                skip: paginationBarStatus.pagination.take * paginationBarStatus.pagination.index
            }
        }

        await apiGET_Status(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarStatus.pagination.count / paginationBarStatus.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarStatus.pagination.count <= paginationBarStatus.pagination.take) maxIndex = 1;

        TP_First_Status.setEnabled(true);
        TP_Prev_Status.setEnabled(true);
        TP_Next_Status.setEnabled(true);
        TP_Last_Status.setEnabled(true);

        if (paginationBarStatus.pagination.index < 0) paginationBarStatus.pagination.index = 0;

        if (paginationBarStatus.pagination.index === 0) {
            TP_First_Status.setEnabled(false);
            TP_Prev_Status.setEnabled(false);
        }

        if ((paginationBarStatus.pagination.index + 1) >= maxIndex) {
            TP_Next_Status.setEnabled(false);
            TP_Last_Status.setEnabled(false);
        }

        TPP_Status.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarStatus.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarStatus.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_Status.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_Status.setSelectedKey(paginationBarStatus.pagination.index);
        TPT_Status.setNumber((paginationBarStatus.pagination.index + 1) + "/" + maxIndex);

    }
}
