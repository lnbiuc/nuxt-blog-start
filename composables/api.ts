export const getCount = async () => {
    return await useFetch('https://vio.vin/api/count', {
        method: 'GET'
    })
}