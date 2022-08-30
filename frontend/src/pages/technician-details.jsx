import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { callService } from "../services/call-service"
import { CallList } from "../cmps/call-list"
import { Loader } from "../cmps/loader"
import { technicianService } from "../services/technician-service"
import backBtn from "../assets/img/arrow-back.svg"

export const TechnicianDetails = () => {

    const [calls, setCalls] = useState([])
    const [technicial, setTechnicial] = useState({})
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        loadCalls()
        loadTechnician()
    }, [])

    const loadCalls = async () => {
        const calls = await callService.getById(id)
        setCalls(calls)
    }

    const loadTechnician = async () => {
        const technicial = await technicianService.getById(id)
        setTechnicial(technicial)
    }

    const onGoBack = () => {
        history.push('/')
    }
    if (!technicial) return <Loader />
    return <section className="technician-details">
        {calls.length ? <h2 className="title"> Open Calls:{calls.length}</h2> : <h2>No Opens Calls</h2>}
        <button className="btn-back" onClick={onGoBack}><img src={backBtn} alt="back" /></button>
        <CallList calls={calls} />
    </section>
}