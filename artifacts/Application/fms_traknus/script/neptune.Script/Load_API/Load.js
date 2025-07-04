async function API_MasterData(){
    await apiGET_Department();
    await apiGET_Access();
    await apiGET_Status();
    await apiGET_Branch();
    await apiGET_Position();
    await apiGET_CarCategory();
    await apiGET_CarAcquisition();
    await apiGET_CarBrand();
    await apiGET_CarType();
    await apiGET_CarFuel();
    await apiGET_CarOwnership();
    await apiGET_CarStatus();
    await apiGET_CarRemarks();
}