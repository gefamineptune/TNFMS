var paginationBarCarCategory = {
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

        if (!keepIndex) paginationBarCarCategory.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarCategory.pagination.take,
            skip: paginationBarCarCategory.pagination.take * paginationBarCarCategory.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarCategory.pagination.take,
                skip: paginationBarCarCategory.pagination.take * paginationBarCarCategory.pagination.index
            }
        }

        await apiGET_CarCategory(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarCategory.pagination.count / paginationBarCarCategory.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarCategory.pagination.count <= paginationBarCarCategory.pagination.take) maxIndex = 1;

        TP_First_CarCategory.setEnabled(true);
        TP_Prev_CarCategory.setEnabled(true);
        TP_Next_CarCategory.setEnabled(true);
        TP_Last_CarCategory.setEnabled(true);

        if (paginationBarCarCategory.pagination.index < 0) paginationBarCarCategory.pagination.index = 0;

        if (paginationBarCarCategory.pagination.index === 0) {
            TP_First_CarCategory.setEnabled(false);
            TP_Prev_CarCategory.setEnabled(false);
        }

        if ((paginationBarCarCategory.pagination.index + 1) >= maxIndex) {
            TP_Next_CarCategory.setEnabled(false);
            TP_Last_CarCategory.setEnabled(false);
        }

        TPP_CarCategory.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarCategory.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarCategory.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarCategory.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarCategory.setSelectedKey(paginationBarCarCategory.pagination.index);
        TPT_CarCategory.setNumber((paginationBarCarCategory.pagination.index + 1) + "/" + maxIndex);

    }
}
