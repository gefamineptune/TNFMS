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
    "fms_car_remarks",
    "fms_car_remarks",
    "fms_car.car_remarks = fms_car_remarks.remarks_id"
  )
  .leftJoinAndSelect(
    "fms_car_status",
    "fms_car_status",
    "fms_car.car_status = fms_car_status.status_id"
  )
  .getRawMany();

// console.log(JSON.stringify(result));