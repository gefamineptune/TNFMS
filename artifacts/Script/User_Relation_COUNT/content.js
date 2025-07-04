try {
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
        .getCount();
} catch (error) {
    console.error('Error retrieving user relationship data:', error);
    result.data = { error: 'Failed to retrieve user relationship data' };
    result.statusCode = 500;
    fail();
}