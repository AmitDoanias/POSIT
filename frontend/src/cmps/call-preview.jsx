
export const CallPreview = ({ call }) => {
    return <section className="call-preview flex">
        <div className="call-id flex direction-column space-between">
            <h4>Date: {call.date}</h4>
            <h4>ID: {call._id}</h4>
        </div>

        <div className="call-data flex direction-column space-between gap-15">
            <div >
                <h4>Customer: {call.customerName}</h4>
                <h4>Title: {call.title}</h4>
                <h4>Replace: {call.hardwareToReplace} </h4>
                <h4>Warehouse: {call.warehouse}</h4>
                <h4>Assigned To: {call.assignedTechnicianId}</h4>
            </div>

            <div>
                <h4>Description: {call.description}</h4>
            </div>
        </div>
    </section>
}