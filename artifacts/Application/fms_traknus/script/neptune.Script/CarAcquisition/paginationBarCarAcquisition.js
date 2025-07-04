var paginationBarCarAcquisition = {
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

        if (!keepIndex) paginationBarCarAcquisition.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarAcquisition.pagination.take,
            skip: paginationBarCarAcquisition.pagination.take * paginationBarCarAcquisition.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarAcquisition.pagination.take,
                skip: paginationBarCarAcquisition.pagination.take * paginationBarCarAcquisition.pagination.index
            }
        }

        await apiGET_CarAcquisition(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarAcquisition.pagination.count / paginationBarCarAcquisition.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarAcquisition.pagination.count <= paginationBarCarAcquisition.pagination.take) maxIndex = 1;

        TP_First_CarAcquisition.setEnabled(true);
        TP_Prev_CarAcquisition.setEnabled(true);
        TP_Next_CarAcquisition.setEnabled(true);
        TP_Last_CarAcquisition.setEnabled(true);

        if (paginationBarCarAcquisition.pagination.index < 0) paginationBarCarAcquisition.pagination.index = 0;

        if (paginationBarCarAcquisition.pagination.index === 0) {
            TP_First_CarAcquisition.setEnabled(false);
            TP_Prev_CarAcquisition.setEnabled(false);
        }

        if ((paginationBarCarAcquisition.pagination.index + 1) >= maxIndex) {
            TP_Next_CarAcquisition.setEnabled(false);
            TP_Last_CarAcquisition.setEnabled(false);
        }

        TPP_CarAcquisition.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarAcquisition.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarAcquisition.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarAcquisition.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarAcquisition.setSelectedKey(paginationBarCarAcquisition.pagination.index);
        TPT_CarAcquisition.setNumber((paginationBarCarAcquisition.pagination.index + 1) + "/" + maxIndex);

    }
}
