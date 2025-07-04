var paginationBarCarType = {
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

        if (!keepIndex) paginationBarCarType.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarType.pagination.take,
            skip: paginationBarCarType.pagination.take * paginationBarCarType.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarType.pagination.take,
                skip: paginationBarCarType.pagination.take * paginationBarCarType.pagination.index
            }
        }

        await apiGET_CarType(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarType.pagination.count / paginationBarCarType.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarType.pagination.count <= paginationBarCarType.pagination.take) maxIndex = 1;

        TP_First_CarType.setEnabled(true);
        TP_Prev_CarType.setEnabled(true);
        TP_Next_CarType.setEnabled(true);
        TP_Last_CarType.setEnabled(true);

        if (paginationBarCarType.pagination.index < 0) paginationBarCarType.pagination.index = 0;

        if (paginationBarCarType.pagination.index === 0) {
            TP_First_CarType.setEnabled(false);
            TP_Prev_CarType.setEnabled(false);
        }

        if ((paginationBarCarType.pagination.index + 1) >= maxIndex) {
            TP_Next_CarType.setEnabled(false);
            TP_Last_CarType.setEnabled(false);
        }

        TPP_CarType.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarType.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarType.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarType.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarType.setSelectedKey(paginationBarCarType.pagination.index);
        TPT_CarType.setNumber((paginationBarCarType.pagination.index + 1) + "/" + maxIndex);

    }
}
