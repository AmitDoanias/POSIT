import { useState } from "react"

export const DropDown = ({ technicians, history }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState('Who\'s Using The System')


    const handleChange = (name, id) => {
        setUser(name)
        setIsOpen(false)
        if (name === 'Admin') {
            history.push('/dashboard')
        } else {
            history.push(`/technician/${id}`)
        }
    }

    return <section className="drop-down">
        <div className="select-box">
            <div className={`options-container ${isOpen ? 'active' : ''} `} >
                <div className="option" onClick={() => handleChange('Admin')}>
                    Admin
                </div>

                {technicians.map(technician =>
                    <div key={technician.id} className="option" onClick={() => handleChange(technician.name, technician.id)}>
                        {technician.name}
                    </div>
                )}
            </div>

            <div className="selected" onClick={() => setIsOpen(!isOpen)}>{user}</div>
        </div>

    </section>
}