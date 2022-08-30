import { useState } from "react"
import { callService } from "../services/call-service"

export const AddCall = ({ loadCalls, onClose }) => {

    const [newCall, setNewCall] = useState(callService.getEmptyCall())

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setNewCall((prevFields) => ({ ...prevFields, [field]: value }))
    }

    const onSaveCall = async (ev) => {
        ev.preventDefault()
        await callService.addNewCall(newCall)
        loadCalls()
        onClose()
    }

    return <section className="add-call">
        <div className="modal-container">
            <div className="data-container flex direction-column">

                <button className="close-btn flex-end" onClick={onClose}>X</button>
                <form onSubmit={onSaveCall}>
                    <label htmlFor="customer">Customer: </label>
                    <input onChange={(ev) => handleChange(ev)} type="text" value={newCall.customerName} name="customerName" id="customerName" placeholder="Customer Name" />
                    <label htmlFor="title">Title: </label>
                    <input onChange={(ev) => handleChange(ev)} type="text" value={newCall.title} name="title" id="title" placeholder="Title" />
                    <label htmlFor="hardwareToReplace">Replace: </label>
                    <select onChange={(ev) => handleChange(ev)} name="hardwareToReplace" id="hardwareToReplace">
                        <option>Pinpad</option>
                        <option>Scanner</option>
                        <option>Weight</option>
                        <option>Biometric</option>
                    </select>
                    <label htmlFor="description">Description: </label>
                    <textarea cols="50" rows="6" onChange={(ev) => handleChange(ev)} type="text" value={newCall.description} name="description" id="description" placeholder="Description" />
                    <button className="save-btn">Save</button>
                </form>
            </div>
        </div>
    </section >
}