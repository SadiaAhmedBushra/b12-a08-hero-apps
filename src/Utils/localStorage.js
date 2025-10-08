export const loadInstalledApps = () => {
    try{
        const data = localStorage.getItem('installedApps')
        return data? JSON.parse(data) : []
    }
    catch(err)
    {
        console.log(err)
        return []
    }
}