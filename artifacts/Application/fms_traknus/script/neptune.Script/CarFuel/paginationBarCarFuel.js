var paginationBarCarFuel = {
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

        if (!keepIndex) paginationBarCarFuel.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarCarFuel.pagination.take,
            skip: paginationBarCarFuel.pagination.take * paginationBarCarFuel.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarCarFuel.pagination.take,
                skip: paginationBarCarFuel.pagination.take * paginationBarCarFuel.pagination.index
            }
        }

        await apiGET_CarFuel(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarCarFuel.pagination.count / paginationBarCarFuel.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarCarFuel.pagination.count <= paginationBarCarFuel.pagination.take) maxIndex = 1;

        TP_First_CarFuel.setEnabled(true);
        TP_Prev_CarFuel.setEnabled(true);
        TP_Next_CarFuel.setEnabled(true);
        TP_Last_CarFuel.setEnabled(true);

        if (paginationBarCarFuel.pagination.index < 0) paginationBarCarFuel.pagination.index = 0;

        if (paginationBarCarFuel.pagination.index === 0) {
            TP_First_CarFuel.setEnabled(false);
            TP_Prev_CarFuel.setEnabled(false);
        }

        if ((paginationBarCarFuel.pagination.index + 1) >= maxIndex) {
            TP_Next_CarFuel.setEnabled(false);
            TP_Last_CarFuel.setEnabled(false);
        }

        TPP_CarFuel.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarCarFuel.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarCarFuel.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_CarFuel.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_CarFuel.setSelectedKey(paginationBarCarFuel.pagination.index);
        TPT_CarFuel.setNumber((paginationBarCarFuel.pagination.index + 1) + "/" + maxIndex);

    }
}
