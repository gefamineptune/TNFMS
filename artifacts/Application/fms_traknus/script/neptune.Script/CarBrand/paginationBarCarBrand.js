var paginationBarCarBrand = {
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

        if (!keepIndex) paginationBarCarBrand.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarBrand.pagination.take,
            skip: paginationBarCarBrand.pagination.take * paginationBarCarBrand.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarBrand.pagination.take,
                skip: paginationBarCarBrand.pagination.take * paginationBarCarBrand.pagination.index
            }
        }

        await apiGET_CarBrand(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarBrand.pagination.count / paginationBarCarBrand.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarBrand.pagination.count <= paginationBarCarBrand.pagination.take) maxIndex = 1;

        TP_First_CarBrand.setEnabled(true);
        TP_Prev_CarBrand.setEnabled(true);
        TP_Next_CarBrand.setEnabled(true);
        TP_Last_CarBrand.setEnabled(true);

        if (paginationBarCarBrand.pagination.index < 0) paginationBarCarBrand.pagination.index = 0;

        if (paginationBarCarBrand.pagination.index === 0) {
            TP_First_CarBrand.setEnabled(false);
            TP_Prev_CarBrand.setEnabled(false);
        }

        if ((paginationBarCarBrand.pagination.index + 1) >= maxIndex) {
            TP_Next_CarBrand.setEnabled(false);
            TP_Last_CarBrand.setEnabled(false);
        }

        TPP_CarBrand.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarBrand.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarBrand.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarBrand.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarBrand.setSelectedKey(paginationBarCarBrand.pagination.index);
        TPT_CarBrand.setNumber((paginationBarCarBrand.pagination.index + 1) + "/" + maxIndex);

    }
}
