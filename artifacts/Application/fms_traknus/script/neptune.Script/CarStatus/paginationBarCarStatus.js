var paginationBarCarStatus = {
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

        if (!keepIndex) paginationBarCarStatus.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarStatus.pagination.take,
            skip: paginationBarCarStatus.pagination.take * paginationBarCarStatus.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarStatus.pagination.take,
                skip: paginationBarCarStatus.pagination.take * paginationBarCarStatus.pagination.index
            }
        }

        await apiGET_CarStatus(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarStatus.pagination.count / paginationBarCarStatus.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarStatus.pagination.count <= paginationBarCarStatus.pagination.take) maxIndex = 1;

        TP_First_CarStatus.setEnabled(true);
        TP_Prev_CarStatus.setEnabled(true);
        TP_Next_CarStatus.setEnabled(true);
        TP_Last_CarStatus.setEnabled(true);

        if (paginationBarCarStatus.pagination.index < 0) paginationBarCarStatus.pagination.index = 0;

        if (paginationBarCarStatus.pagination.index === 0) {
            TP_First_CarStatus.setEnabled(false);
            TP_Prev_CarStatus.setEnabled(false);
        }

        if ((paginationBarCarStatus.pagination.index + 1) >= maxIndex) {
            TP_Next_CarStatus.setEnabled(false);
            TP_Last_CarStatus.setEnabled(false);
        }

        TPP_CarStatus.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarStatus.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarStatus.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarStatus.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarStatus.setSelectedKey(paginationBarCarStatus.pagination.index);
        TPT_CarStatus.setNumber((paginationBarCarStatus.pagination.index + 1) + "/" + maxIndex);

    }
}
