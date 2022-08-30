import { httpService } from "./http.service"

export const callService = {
    query,
    getById,
    getEmptyCall,
    addNewCall

}

function query() {
    return httpService.get('call')
}

async function getById(technicianId) {
    return httpService.get(`call/${technicianId}`)
}

async function addNewCall(call) {
    console.log('call', call)
    return httpService.post('call', call)
}

function getEmptyCall() {
    return {
        title: '',
        description: '',
        hardwareToReplace: '',
        customerName: '',
    }
}



