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
            .where('fms_role_access_menu.role_id = :role_id', { role_id })
            .getRawMany();      

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
