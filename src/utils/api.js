export const getData = async () => {
    const request = await fetch('https://rickandmortyapi.com/api/character')
    const data = await request.json()
    return data
}