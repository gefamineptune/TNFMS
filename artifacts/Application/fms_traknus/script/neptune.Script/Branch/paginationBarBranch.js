var paginationBarBranch = {
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

        if (!keepIndex) paginationBarBranch.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarBranch.pagination.take,
            skip: paginationBarBranch.pagination.take * paginationBarBranch.pagination.index
        }

        //Api Call with restriction 

        var opts = {
            parameters: {
                take: paginationBarBranch.pagination.take,
                skip: paginationBarBranch.pagination.take * paginationBarBranch.pagination.index
            }
        }

        await apiGET_Branch(opts);

    },
    handlePagination() {

        var maxIndex = (paginationBarBranch.pagination.count / paginationBarBranch.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarBranch.pagination.count <= paginationBarBranch.pagination.take) maxIndex = 1;

        TP_First_Branch.setEnabled(true);
        TP_Prev_Branch.setEnabled(true);
        TP_Next_Branch.setEnabled(true);
        TP_Last_Branch.setEnabled(true);

        if (paginationBarBranch.pagination.index < 0) paginationBarBranch.pagination.index = 0;

        if (paginationBarBranch.pagination.index === 0) {
            TP_First_Branch.setEnabled(false);
            TP_Prev_Branch.setEnabled(false);
        }

        if ((paginationBarBranch.pagination.index + 1) >= maxIndex) {
            TP_Next_Branch.setEnabled(false);
            TP_Last_Branch.setEnabled(false);
        }

        TPP_Branch.destroyItems();

        var numItems = 0;
        var maxItems = paginationBarBranch.configuration.maxNumberOfButtons - 1;
        var startItem = Number.parseInt(paginationBarBranch.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) TPP_Branch.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        TPP_Branch.setSelectedKey(paginationBarBranch.pagination.index);
        TPT_Branch.setNumber((paginationBarBranch.pagination.index + 1) + "/" + maxIndex);

    }
}
