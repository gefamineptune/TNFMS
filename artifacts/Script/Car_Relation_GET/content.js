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

        // Extract car_id from the where condition
        let carId = whereCondition.car_id;
        
        if (!carId) {
            console.error('Car ID is required in the where condition');
            return
        }

        // Query user data with all relationships
        result = await entities.fms_car
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_car_brand",
                "fms_car_brand",
                "fms_car.car_brand = fms_car_brand.brand_id"
            )
            .leftJoinAndSelect(
                "fms_car_type",
                "fms_car_type",
                "fms_car.car_type = fms_car_type.type_id"
            )
            .leftJoinAndSelect(
                "fms_car_ownership",
                "fms_car_ownership",
                "fms_car.car_ownership = fms_car_ownership.ownership_id"
            )
            .leftJoinAndSelect(
                "fms_car_status",
                "fms_car_status",
                "fms_car.car_status = fms_car_status.status_id"
            )
            .leftJoinAndSelect(
                "fms_car_acquisition",
                "fms_car_acquisition",
                "fms_car.car_acquisition_type = fms_car_acquisition.acquisition_id"
            )
            .leftJoinAndSelect(
                "fms_car_category",
                "fms_car_category",
                "fms_car.car_category = fms_car_category.category_id"
            )
            .leftJoinAndSelect(
                "fms_car_fuel",
                "fms_car_fuel",
                "fms_car.car_fuel = fms_car_fuel.fuel_id"
            )
            .leftJoinAndSelect(
                "fms_branch",
                "fms_branch",
                "fms_car.car_branch = fms_branch.branch_id"
            )
            .leftJoinAndSelect(
                "fms_car_condition_type",
                "fms_car_condition_type",
                "fms_car.car_condition_type = fms_car_condition_type.condition_type_id"
            )
            .leftJoinAndSelect(
                "fms_car_cost_center",
                "fms_car_cost_center",
                "fms_car.car_cost_center = fms_car_cost_center.cost_center_id"
            )
            .where('fms_car.car_id = :carId', { carId })
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

        result = await entities.fms_car
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_car_brand",
                "fms_car_brand",
                "fms_car.car_brand = fms_car_brand.brand_id"
            )
            .leftJoinAndSelect(
                "fms_car_type",
                "fms_car_type",
                "fms_car.car_type = fms_car_type.type_id"
            )
            .leftJoinAndSelect(
                "fms_car_ownership",
                "fms_car_ownership",
                "fms_car.car_ownership = fms_car_ownership.ownership_id"
            )
            .leftJoinAndSelect(
                "fms_car_status",
                "fms_car_status",
                "fms_car.car_status = fms_car_status.status_id"
            )
            .leftJoinAndSelect(
                "fms_car_acquisition",
                "fms_car_acquisition",
                "fms_car.car_acquisition_type = fms_car_acquisition.acquisition_id"
            )
            .leftJoinAndSelect(
                "fms_car_category",
                "fms_car_category",
                "fms_car.car_category = fms_car_category.category_id"
            )
            .leftJoinAndSelect(
                "fms_car_fuel",
                "fms_car_fuel",
                "fms_car.car_fuel = fms_car_fuel.fuel_id"
            )
            .leftJoinAndSelect(
                "fms_branch",
                "fms_branch",
                "fms_car.car_branch = fms_branch.branch_id"
            )
            .leftJoinAndSelect(
                "fms_car_condition_type",
                "fms_car_condition_type",
                "fms_car.car_condition_type = fms_car_condition_type.condition_type_id"
            )
            .leftJoinAndSelect(
                "fms_car_cost_center",
                "fms_car_cost_center",
                "fms_car.car_cost_center = fms_car_cost_center.cost_center_id"
            )
            .take(isNaN(parseInt(take)) ? 100 : parseInt(take))
            .getRawMany();
    } else {
        result = await entities.fms_car
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_car_brand",
                "fms_car_brand",
                "fms_car.car_brand = fms_car_brand.brand_id"
            )
            .leftJoinAndSelect(
                "fms_car_type",
                "fms_car_type",
                "fms_car.car_type = fms_car_type.type_id"
            )
            .leftJoinAndSelect(
                "fms_car_ownership",
                "fms_car_ownership",
                "fms_car.car_ownership = fms_car_ownership.ownership_id"
            )
            .leftJoinAndSelect(
                "fms_car_status",
                "fms_car_status",
                "fms_car.car_status = fms_car_status.status_id"
            )
            .leftJoinAndSelect(
                "fms_car_acquisition",
                "fms_car_acquisition",
                "fms_car.car_acquisition_type = fms_car_acquisition.acquisition_id"
            )
            .leftJoinAndSelect(
                "fms_car_category",
                "fms_car_category",
                "fms_car.car_category = fms_car_category.category_id"
            )
            .leftJoinAndSelect(
                "fms_car_fuel",
                "fms_car_fuel",
                "fms_car.car_fuel = fms_car_fuel.fuel_id"
            )
            .leftJoinAndSelect(
                "fms_branch",
                "fms_branch",
                "fms_car.car_branch = fms_branch.branch_id"
            )
            .leftJoinAndSelect(
                "fms_car_condition_type",
                "fms_car_condition_type",
                "fms_car.car_condition_type = fms_car_condition_type.condition_type_id"
            )
            .leftJoinAndSelect(
                "fms_car_cost_center",
                "fms_car_cost_center",
                "fms_car.car_cost_center = fms_car_cost_center.cost_center_id"
            )
            .getRawMany();
        // console.log(JSON.stringify(result))
    }
    
} catch (error) {
    console.error('Error retrieving car relationship data:', error);
    result.data = { error: 'Failed to retrieve car relationship data' };
    result.statusCode = 500;
    fail();
}