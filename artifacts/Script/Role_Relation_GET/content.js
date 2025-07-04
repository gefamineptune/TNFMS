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

        // Extract role_id from the where condition
        const roleId = whereCondition.role_id;
        
        if (!roleId) {
            console.error('Role ID is required in the where condition');
            return
        }

        // Query role data with all relationships
        result = await entities.fms_role
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_access",
                "fms_access",
                "fms_role.role_access = fms_access.access_id"
            )
            .leftJoinAndSelect(
                "fms_status",
                "fms_status",
                "fms_role.role_status = fms_status.status_id"
            )
            .where('fms_role.role_id = :roleId', { roleId })
            .getRawMany();
    } else {
        result = await entities.fms_role
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_access",
                "fms_access",
                "fms_role.role_access = fms_access.access_id"
            )
            .leftJoinAndSelect(
                "fms_status",
                "fms_status",
                "fms_role.role_status = fms_status.status_id"
            )
            .getRawMany();
    }
    
} catch (error) {
    console.error('Error retrieving role relationship data:', error);
    result.data = { error: 'Failed to retrieve role relationship data' };
    result.statusCode = 500;
    fail();
}

/*
    This code snippet retrieves a record based on the id of the record
*/
// result = await entities.fms_role.findOne();

// result = await entities.fms_role
//   .createQueryBuilder()
//   .leftJoinAndSelect(
//     "fms_access",
//     "fms_access",
//     "fms_role.role_access = fms_access.access_id"
//   )
//   .leftJoinAndSelect(
//     "fms_status",
//     "fms_status",
//     "fms_role.role_status = fms_status.status_id"
//   )
//   .getRawMany();
// console.log(JSON.stringify(result));