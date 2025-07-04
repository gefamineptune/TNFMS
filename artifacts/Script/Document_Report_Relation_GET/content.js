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

        // Extract id from the where condition
        const documentId = whereCondition.id;
        
        if (!documentId) {
            console.error('Document ID is required in the where condition');
            return
        }

        // Query document data with all relationships
        result = await entities.fms_document_report
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_car",
                "fms_car",
                "fms_document_report.document_car_id = fms_car.car_id"
            )
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
            .where('fms_document_report.id = :documentId', { documentId })
            .getRawMany();
    } else {
        result = await entities.fms_document_report
            .createQueryBuilder()
            .leftJoinAndSelect(
                "fms_car",
                "fms_car",
                "fms_document_report.document_car_id = fms_car.car_id"
            )
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
            .getRawMany();

        // console.log(JSON.stringify(result))
    }
    
} catch (error) {
    console.error('Error retrieving document relation data:', error);
    result.data = { error: 'Failed to retrieve document relation data' };
    result.statusCode = 500;
    fail();
}