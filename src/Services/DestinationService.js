import axios from 'axios'

class DestinationService {
    static fetchDestinations(){
        return axios.get('http://127.0.0.1:3001/destinations');
    }

    static fetchDestinationsByID(id){
        return axios.get('http://127.0.0.1:3001/destinations/'+id);
    }

}

export default DestinationService