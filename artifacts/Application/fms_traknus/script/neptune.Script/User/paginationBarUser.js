var paginationBarUser = {
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

        if (!keepIndex) paginationBarUser.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarUser.pagination.take,
            skip: paginationBarUser.pagination.take * paginationBarUser.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarUser.pagination.take,
                skip: paginationBarUser.pagination.take * paginationBarUser.pagination.index
            }
        }

        apiGET_UserRelationship(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarUser.pagination.count / paginationBarUser.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarUser.pagination.count <= paginationBarUser.pagination.take) maxIndex = 1;

        TP_First_User.setEnabled(true);
        TP_Prev_User.setEnabled(true);
        TP_Next_User.setEnabled(true);
        TP_Last_User.setEnabled(true);

        if (paginationBarUser.pagination.index < 0) paginationBarUser.pagination.index = 0;

        if (paginationBarUser.pagination.index === 0) {
            TP_First_User.setEnabled(false);
            TP_Prev_User.setEnabled(false);
        }

        if ((paginationBarUser.pagination.index + 1) >= maxIndex) {
            TP_Next_User.setEnabled(false);
            TP_Last_User.setEnabled(false);
        }

        TPP_User.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarUser.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarUser.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_User.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_User.setSelectedKey(paginationBarUser.pagination.index);
        TPT_User.setNumber((paginationBarUser.pagination.index + 1) + "/" + maxIndex);

    }
}
