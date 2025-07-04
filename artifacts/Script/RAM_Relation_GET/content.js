try {
    // Parse query parameters
    const queryParams = req.query;
    // Check if 'where' parameter exists and parse it
    let whereCondition = {};
    let role_id = "";
    if (queryParams && queryParams.where) {
        try {
            whereCondition = JSON.parse(queryParams.where);
        } catch (parseError) {
            console.error('Error parsing where condition:', parseError);
            return
        }

        role_id = whereCondition.role_id;
        
        if (!role_id) {
            console.error('Role Access Menu ID is required in the where condition');
            return
        }
    }

    // Get role_id from request parameters or set default to 1
    const roleId = role_id;
    
    // Get all menus
    const menus = await entities.fms_menu.find({
        // select: ["menu_id", "menu_name"],
        order: {
            menu_order: "ASC"
        }
    });
    // console.log(menus)
    
    // Prepare result array
    const formattedResults = [];
    
    // Process each menu to get its permissions
    for (const menu of menus) {
        // Get all permissions for this menu and role
        const role_access_menu_data = await entities.fms_role_access_menu.find({
            where: {
                menu_id: menu.menu_id,
                role_id: roleId
            }
        });
        // console.log(role_access_menu_data)
        
        // Get permission details to map permission_id to permission names
        const permission_data = await entities.fms_permission.find();
        const permissionMap = {};
        permission_data.forEach(permission => {
            permissionMap[permission.permission_id] = permission.permission_name;
        });
        // console.log(permissionMap)
        
        // Initialize permission values
        const menuPermissions = {
            RoleID: roleId,
            MenuID: menu.menu_id,
            Menu: menu.menu_name,
            ViewID: "",
            View: false,
            CreateID: "",
            Create: false,
            EditID: "",
            Edit: false,
            DeleteID: "",
            Delete: false
        };
        
        // Set permission values based on what's found
        role_access_menu_data.forEach(RAM => {
            const permName = permissionMap[RAM.permission_id];
            if (permName === 'View') {
                menuPermissions.ViewID = RAM.permission_id
                menuPermissions.View = RAM.is_allowed ? true : false
            };
            if (permName === 'Create') {
                menuPermissions.CreateID = RAM.permission_id
                menuPermissions.Create = RAM.is_allowed ? true : false
            };
            if (permName === 'Edit') {
                menuPermissions.EditID = RAM.permission_id
                menuPermissions.Edit = RAM.is_allowed ? true : false
            };
            if (permName === 'Delete') {
                menuPermissions.DeleteID = RAM.permission_id
                menuPermissions.Delete = RAM.is_allowed ? true : false
            };
            // if (permName === 'View') menuPermissions.View = RAM.is_allowed ? true : false;
            // if (permName === 'Create') menuPermissions.Create = RAM.is_allowed ? true : false;
            // if (permName === 'Edit') menuPermissions.Edit = RAM.is_allowed ? true : false;
            // if (permName === 'Delete') menuPermissions.Delete = RAM.is_allowed ? true : false;
        });
        formattedResults.push(menuPermissions);
    }
    
    // Set the result data
    result.data = formattedResults;
    
    // Complete the script execution
    complete();
} catch (error) {
    console.error('Error retrieving menu permissions:', error);
    result.data = { error: 'Failed to retrieve menu permissions data' };
    result.statusCode = 500;
    fail();
}