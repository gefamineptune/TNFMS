try {
    // Parse query parameters
    const queryParams = req.query;
    
    // Check if 'where' parameter exists and parse it
    let whereCondition = {};
    if (queryParams.where) {
        try {
            whereCondition = JSON.parse(queryParams.where);
        } catch (parseError) {
            console.error('Error parsing where condition:', parseError);
            result.data = { error: 'Invalid where condition format' };
            result.statusCode = 400;
            return complete();
        }
    }
    
    // Extract user_id from the where condition
    const userId = whereCondition.user_id;
    
    if (!userId) {
        result.data = { error: 'User ID is required in the where condition' };
        result.statusCode = 400;
        return complete();
    }
    
    // Query user data with all relationships
    const userData = await entities.fms_user
        .createQueryBuilder('user')
        .leftJoinAndSelect(
            'fms_department',
            'department',
            'user.user_department = department.department_id'
        )
        .leftJoinAndSelect(
            'fms_branch',
            'branch',
            'user.user_branch = branch.branch_id'
        )
        .leftJoinAndSelect(
            'fms_role',
            'role',
            'user.user_role = role.role_id'
        )
        .leftJoinAndSelect(
            'fms_access',
            'access',
            'role.role_access = access.access_id'
        )
        .leftJoinAndSelect(
            'fms_status',
            'status',
            'user.user_status = status.status_id'
        )
        .where('user.user_id = :userId', { userId })
        .getRawMany();
    
    if (!userData || userData.length === 0) {
        result.data = { message: 'No user found with the provided ID' };
        return complete();
    }
    
    // Format the response data
    const formattedData = userData.map(record => {
        return {
            user: {
                id: record.user_user_id,
                name: record.user_user_name
            },
            department: {
                id: record.department_department_id,
                name: record.department_department_name
            },
            branch: {
                id: record.branch_branch_id,
                label: record.branch_branch_label
            },
            role: {
                id: record.role_role_id,
                label: record.role_role_label,
                access: record.role_role_access,
                status: record.role_role_status
            },
            access: {
                id: record.access_access_id,
                label: record.access_access_label
            },
            status: {
                id: record.status_status_id,
                label: record.status_status_label
            }
        };
    });
    
    // Set the response
    result.data = formattedData;
    complete();
    
} catch (error) {
    console.error('Error retrieving user relationship data:', error);
    result.data = { error: 'Failed to retrieve user relationship data' };
    result.statusCode = 500;
    fail();
}





// result = await entities.fms_user
//   .createQueryBuilder()
//   .leftJoinAndSelect(
//     "fms_department",
//     "fms_department",
//     "fms_user.user_department = fms_department.department_id"
//   )
//   .leftJoinAndSelect(
//     "fms_branch",
//     "fms_branch",
//     "fms_user.user_branch = fms_branch.branch_id"
//   )
//   .leftJoinAndSelect(
//     "fms_role",
//     "fms_role",
//     "fms_user.user_role = fms_role.role_id"
//   )
//   .leftJoinAndSelect(
//     "fms_access",
//     "fms_access",
//     "fms_role.role_access = fms_access.access_id"
//   )
//   .leftJoinAndSelect(
//     "fms_status",
//     "fms_status",
//     "fms_user.user_status = fms_status.status_id"
//   )
//   .getRawMany();

/*
    This code snippet retrieves a record based on the id of the record
*/
// result = await entities.fms_user.findOne();

// console.log(JSON.stringify(result));
// console.log(result);