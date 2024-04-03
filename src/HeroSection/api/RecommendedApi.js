import axios from "axios";
const URL = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";

async function getRecommendedData (){
    try {
        const response = await axios.get(URL)
        const data = await response.data
        return data.events
    } catch (error) {
        console.log(error)
    }
}



export default getRecommendedData