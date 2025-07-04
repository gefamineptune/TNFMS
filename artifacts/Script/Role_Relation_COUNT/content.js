try {
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
        .getCount();
} catch (error) {
    console.error('Error retrieving user relationship data:', error);
    result.data = { error: 'Failed to retrieve user relationship data' };
    result.statusCode = 500;
    fail();
}