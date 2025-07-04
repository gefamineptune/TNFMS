var paginationBarCars = {
    configuration: {
        maxNumberOfButtons: 6 //number maximo of page buttons 
    },
    pagination: {
        take: 10,
        index: 0,
        count: 0
    },
    run: function (keepIndex) {

        // Pagination

        if (!keepIndex) paginationBarCars.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCars.pagination.take,
            skip: paginationBarCars.pagination.take * paginationBarCars.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCars.pagination.take,
                skip: paginationBarCars.pagination.take * paginationBarCars.pagination.index
            }
        }

        apiGET_Car(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCars.pagination.count / paginationBarCars.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCars.pagination.count <= paginationBarCars.pagination.take) maxIndex = 1;

        TP_First_Cars.setEnabled(true);
        TP_Prev_Cars.setEnabled(true);
        TP_Next_Cars.setEnabled(true);
        TP_Last_Cars.setEnabled(true);

        if (paginationBarCars.pagination.index < 0) paginationBarCars.pagination.index = 0;

        if (paginationBarCars.pagination.index === 0) {
            TP_First_Cars.setEnabled(false);
            TP_Prev_Cars.setEnabled(false);
        }

        if ((paginationBarCars.pagination.index + 1) >= maxIndex) {
            TP_Next_Cars.setEnabled(false);
            TP_Last_Cars.setEnabled(false);
        }

        TPP_Cars.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCars.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCars.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_Cars.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_Cars.setSelectedKey(paginationBarCars.pagination.index);
        TPT_Cars.setNumber((paginationBarCars.pagination.index + 1) + "/" + maxIndex);

    }
}
