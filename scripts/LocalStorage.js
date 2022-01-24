let favorites = [];
function SaveToStorageByCityName(cityName)
{
    favorites.push(cityName);
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
function RemoveFromLocalStorage(cityName)
{
    let cityIndex = favorites.indexOf(cityName);
    favorites.splice(cityIndex,1);
    SaveToLocalStorage();
}

export{SaveToStorageByCityName, GetStorage, RemoveFromLocalStorage}