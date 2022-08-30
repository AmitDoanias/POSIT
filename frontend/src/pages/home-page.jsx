import { useEffect, useState } from 'react'
import { DropDown } from '../cmps/drop-down'
import { technicianService } from '../services/technician-service'
import { Loader } from '../cmps/loader'


export const HomePage = ({ history }) => {

    const [technicians, setTechnicians] = useState()

    useEffect(() => {
        loadTechnician()
    }, [])

    const loadTechnician = async () => {
        const technicians = await technicianService.query()
        setTechnicians(technicians)
    }

    console.log(technicians)
    if (!technicians) return <Loader />
    return <section className="home-page">

        <DropDown technicians={technicians} history={history} />

    </section>

}