var paginationBarCarOwnership = {
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

        if (!keepIndex) paginationBarCarOwnership.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarOwnership.pagination.take,
            skip: paginationBarCarOwnership.pagination.take * paginationBarCarOwnership.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarOwnership.pagination.take,
                skip: paginationBarCarOwnership.pagination.take * paginationBarCarOwnership.pagination.index
            }
        }

        await apiGET_CarOwnership(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarOwnership.pagination.count / paginationBarCarOwnership.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarOwnership.pagination.count <= paginationBarCarOwnership.pagination.take) maxIndex = 1;

        TP_First_CarOwnership.setEnabled(true);
        TP_Prev_CarOwnership.setEnabled(true);
        TP_Next_CarOwnership.setEnabled(true);
        TP_Last_CarOwnership.setEnabled(true);

        if (paginationBarCarOwnership.pagination.index < 0) paginationBarCarOwnership.pagination.index = 0;

        if (paginationBarCarOwnership.pagination.index === 0) {
            TP_First_CarOwnership.setEnabled(false);
            TP_Prev_CarOwnership.setEnabled(false);
        }

        if ((paginationBarCarOwnership.pagination.index + 1) >= maxIndex) {
            TP_Next_CarOwnership.setEnabled(false);
            TP_Last_CarOwnership.setEnabled(false);
        }

        TPP_CarOwnership.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarOwnership.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarOwnership.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarOwnership.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarOwnership.setSelectedKey(paginationBarCarOwnership.pagination.index);
        TPT_CarOwnership.setNumber((paginationBarCarOwnership.pagination.index + 1) + "/" + maxIndex);

    }
}
