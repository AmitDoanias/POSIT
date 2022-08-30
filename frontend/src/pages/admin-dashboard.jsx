import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AddCall } from "../cmps/add-call"
import { CallList } from "../cmps/call-list"
import { callService } from "../services/call-service"
import backBtn from "../assets/img/arrow-back.svg"


export const AdminDashboard = () => {
    const [calls, setCalls] = useState()
    const [isAddOpen, setIsAddOpen] = useState(false)
    const history = useHistory()

    useEffect(() => {
        loadCalls()
    }, [])


    const loadCalls = async () => {
        const calls = await callService.query()
        setCalls(calls)
    }

    const onGoBack = () => {
        history.push('/')
    }

    const onClose = () => {
        setIsAddOpen(false)
    }

    return <section className="admin-dashboard">
        <div className={`main-screen ${isAddOpen ? 'menu-open' : ''}`} onClick={onClose}></div>
        <h1 className="title">Admin Dash</h1>
        <div className="btns-container flex space-between">
            <button className="btn-back" onClick={onGoBack}><img src={backBtn} alt="back" /></button>
            <button className="btn-add" onClick={() => setIsAddOpen(true)}>New Call</button>
        </div>

        <CallList calls={calls} />
        {isAddOpen && <AddCall loadCalls={loadCalls} onClose={onClose} />}

    </section>
}