let favorites = [];
function SaveToStorageByCityName(CityName)
{
    favorites.push(CityName);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function SaveToLocalStorage()
{
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}
function CheckStorage()
{
    const localStorageItem = localStorage.getItem('Favorites');
    localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
}
function GetStorage()
{
    CheckStorage();
    return favorites;
}
function RemoveFromLocalStorage(CityName)
{
    let cityIndex = favorites.indexOf(CityName);
    favorites.splice(cityIndex,1);
    SaveToLocalStorage();
}

export{SaveToStorageByCityName, GetStorage, RemoveFromLocalStorage}