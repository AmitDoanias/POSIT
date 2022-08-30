import { httpService } from "./http.service"

export const customerService = {
    query
}

function query() {
    return httpService.get('customer')
}