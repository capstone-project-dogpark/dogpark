import { sql } from '../database.utils'

export interface Park {
    parkId : string|null
    parkAddress : string|null
    parkLat : string|null
    parkLng : string|null
    parkName : string|null
}
export async function insertPark(park: Park): Promise<string> {
    const {parkId, parkAddress, parkLat, parkLng, parkName} = park
    await sql `INSERT INTO park (park_id, park_address, park_lat, park_lng, park_name) VALUES (gen_random_uuid), ${parkId}, ${parkAddress}, ${parkLat}, ${parkLng}, ${parkName}`
    return 'Park created successfully'
}



export async function selectParksByDistance(userLng: string, userLat: string, distance: string):Promise<Park[]> {
    return sql<Park[]>`SELECT park_id, park_address, park_lat, park_lng, park_name FROM park WHERE haversine(${userLng}, ${userLat}, park_lng, park_lat) < ${distance}`
}

export async function selectAllParks():Promise<Park[]> {
    return sql<Park[]>`SELECT park_id, park_address, park_lat, park_lng, park_name FROM park`
}

export async function selectParkByParkId(parkId: string):Promise<Park[]> {
    return sql<Park[]>`SELECT park_id, park_address, park_lat, park_lng, park_name FROM park WHERE park_id = ${parkId}`
}