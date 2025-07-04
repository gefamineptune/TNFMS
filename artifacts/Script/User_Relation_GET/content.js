try {
    // Parse query parameters
    const queryParams = req.query;
    // console.log(queryParams)
    // console.log(queryParams.take)
    
    // Check if 'where' parameter exists and parse it
    let whereCondition = {};
    if (queryParams && queryParams.where) {
        try {
            whereCondition = JSON.parse(queryParams.where);
        } catch (parseError) {
            console.error('Error parsing where condition:', parseError);
            return
        }

        // Extract user_id from the where condition
        let userId = whereCondition.user_id;
        
        if (!userId) {
            console.error('User ID is required in the where condition');
            return
        }

        // Query user data with all relationships
        result = await entities.fms_user
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_department",
                "fms_department",
                "fms_user.user_department = fms_department.department_id"
            )
            .leftJoinAndSelect(
                "fms_branch",
                "fms_branch",
                "fms_user.user_branch = fms_branch.branch_id"
            )
            .leftJoinAndSelect(
                "fms_role",
                "fms_role",
                "fms_user.user_role = fms_role.role_id"
            )
            .leftJoinAndSelect(
                "fms_access",
                "fms_access",
                "fms_role.role_access = fms_access.access_id"
            )
            .leftJoinAndSelect(
                "fms_status",
                "fms_status",
                "fms_user.user_status = fms_status.status_id"
            )
            .where('fms_user.user_id = :userId', { userId })
            .getRawMany();
    } else if (queryParams && queryParams.take) {
        try {
            takeCondition = JSON.parse(queryParams.take);
        } catch (parseError) {
            console.error('Error parsing take condition:', parseError);
            return
        }

        // Extract take from the take condition
        let take = takeCondition.take;

        result = await entities.fms_user
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_department",
                "fms_department",
                "fms_user.user_department = fms_department.department_id"
            )
            .leftJoinAndSelect(
                "fms_branch",
                "fms_branch",
                "fms_user.user_branch = fms_branch.branch_id"
            )
            .leftJoinAndSelect(
                "fms_role",
                "fms_role",
                "fms_user.user_role = fms_role.role_id"
            )
            .leftJoinAndSelect(
                "fms_access",
                "fms_access",
                "fms_role.role_access = fms_access.access_id"
            )
            .leftJoinAndSelect(
                "fms_status",
                "fms_status",
                "fms_user.user_status = fms_status.status_id"
            )
            .take(isNaN(parseInt(take)) ? 100 : parseInt(take))
            .getRawMany();
    } else {
        result = await entities.fms_user
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_department",
                "fms_department",
                "fms_user.user_department = fms_department.department_id"
            )
            .leftJoinAndSelect(
                "fms_branch",
                "fms_branch",
                "fms_user.user_branch = fms_branch.branch_id"
            )
            .leftJoinAndSelect(
                "fms_role",
                "fms_role",
                "fms_user.user_role = fms_role.role_id"
            )
            .leftJoinAndSelect(
                "fms_access",
                "fms_access",
                "fms_role.role_access = fms_access.access_id"
            )
            .leftJoinAndSelect(
                "fms_status",
                "fms_status",
                "fms_user.user_status = fms_status.status_id"
            )
            .getRawMany();
    }
    
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