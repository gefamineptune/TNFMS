try {
    // Parse query parameters
    const queryParams = req.query;
    
    // Check if 'where' parameter exists and parse it
    let whereCondition = {};
    if (queryParams && queryParams.where) {
        try {
            whereCondition = JSON.parse(queryParams.where);
        } catch (parseError) {
            console.error('Error parsing where condition:', parseError);
            return
        }

        const role_id = whereCondition.role_id;
        
        if (!role_id) {
            console.error('Role Access Menu ID is required in the where condition');
            return
        }

        // Query role access menu data with all relationships
        const result = await entities.fms_role_access_menu
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_role",
                "fms_role",
                "fms_role_access_menu.role_id = fms_role.role_id"
            )
            .leftJoinAndSelect(
                "fms_menu",
                "fms_menu",
                "fms_role_access_menu.menu_id = fms_menu.menu_id"
            )
            .leftJoinAndSelect(
                "fms_permission",
                "fms_permission",
                "fms_role_access_menu.permission_id = fms_permission.permission_id"
            )
            .where('fms_role_access_menu.role_id = :role_id', { role_id })
            .getRawMany();    

        
        // Extract unique role_id values from the result set
        let uniqueRoleIds = new Set();
        let uniqueMenuIds = new Set();
        result.forEach(item => {
            // Look for all columns that contain role_id in their name
            Object.keys(item).forEach(key => {
                if (key.includes('fms_role_access_menu_role_id') && item[key] !== null && item[key] !== undefined) {
                    uniqueRoleIds.add(item[key]);
                }
                if (key.includes('fms_role_access_menu_menu_id')) {
                    uniqueMenuIds.add(item[key]);
                }
            });
        });

        // Convert Set to array for easier handling
        const uniqueRoleIdsArray = Array.from(uniqueRoleIds);
        const uniqueMenuIdsArray = Array.from(uniqueMenuIds);
        console.log('Unique menu_id values:', uniqueMenuIds);
        console.log('Unique role_id values:', uniqueRoleIdsArray[0]);
        console.log('Unique menu_id values:', uniqueMenuIdsArray);
        // console.log('Unique role_id values:', uniqueRoleIdsArray);
        // console.log('Unique menu_id values:', uniqueMenuIdsArray);

        // Map the original data if needed for further processing
        mappedData = result.map(item => {
            // Your mapping logic here if needed
            return item;
        });

    } else {
        result = await entities.fms_role_access_menu
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_role",
                "fms_role",
                "fms_role_access_menu.role_id = fms_role.role_id"
            )
            .leftJoinAndSelect(
                "fms_menu",
                "fms_menu",
                "fms_role_access_menu.menu_id = fms_menu.menu_id"
            )
            .leftJoinAndSelect(
                "fms_permission",
                "fms_permission",
                "fms_role_access_menu.permission_id = fms_permission.permission_id"
            )
            .getRawMany();
        // console.log(JSON.stringify(result));
    }
    
} catch (error) {
    console.error('Error retrieving role access menu relationship data:', error);
    result.data = { error: 'Failed to retrieve role access menu relationship data' };
    result.statusCode = 500;
    fail();
}
