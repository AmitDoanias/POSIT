import { httpService } from "./http.service"

export const technicianService = {
    query,
    getById
}

function query() {
    return httpService.get('technician')
}

async function getById(technicianId) {
    return httpService.get(`technician/${technicianId}`)
}
