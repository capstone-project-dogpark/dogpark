import {insertPark, Park} from "../models/Park";
import {data} from "./json";





async function ParksDataDownloader(data: any) : Promise<any> {
        try {
            for (let park of data.features){
            // data.features.forEach((park: any) => {
                if(park.attributes.DogPark ==="y"){
                    let parkLat
                    let parkLng
                    let parkName = park.attributes.ParkName;
                    let parkAddress = park.attributes.ParkAddress;
                    if(park.geometry.rings){
                         parkLat = park.geometry?.rings[0][0][0];
                         parkLng = park.geometry?.rings[0][0][1];
                    }
                    if(park.geometry.curveRings){
                        parkLat = park.geometry?.curveRings[0][0][0];
                        parkLng = park.geometry?.curveRings[0][0][1];
                    }
                    const newPark: Park ={
                        parkId: null,
                        parkName,
                        parkAddress,
                        parkLat,
                        parkLng,
                    }

                    await insertPark(newPark)
                }
            }

        } catch (error) {
            console.error(error)
        }
}

ParksDataDownloader(data)
    .then(finished =>{
        console.log("finished")
    }).catch(error => {
    console.error(error)
})
