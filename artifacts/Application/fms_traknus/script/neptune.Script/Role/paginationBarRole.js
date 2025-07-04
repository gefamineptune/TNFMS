var paginationBarRole = {
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

        if (!keepIndex) paginationBarRole.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarRole.pagination.take,
            skip: paginationBarRole.pagination.take * paginationBarRole.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarRole.pagination.take,
                skip: paginationBarRole.pagination.take * paginationBarRole.pagination.index
            }
        }

        apiGET_RoleRelation(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarRole.pagination.count / paginationBarRole.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarRole.pagination.count <= paginationBarRole.pagination.take) maxIndex = 1;

        TP_First_Role.setEnabled(true);
        TP_Prev_Role.setEnabled(true);
        TP_Next_Role.setEnabled(true);
        TP_Last_Role.setEnabled(true);

        if (paginationBarRole.pagination.index < 0) paginationBarRole.pagination.index = 0;

        if (paginationBarRole.pagination.index === 0) {
            TP_First_Role.setEnabled(false);
            TP_Prev_Role.setEnabled(false);
        }

        if ((paginationBarRole.pagination.index + 1) >= maxIndex) {
            TP_Next_Role.setEnabled(false);
            TP_Last_Role.setEnabled(false);
        }

        TPP_Role.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarRole.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarRole.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_Role.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_Role.setSelectedKey(paginationBarRole.pagination.index);
        TPT_Role.setNumber((paginationBarRole.pagination.index + 1) + "/" + maxIndex);

    }
}
