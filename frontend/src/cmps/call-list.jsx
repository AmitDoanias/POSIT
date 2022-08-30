import { CallPreview } from "./call-preview"
import { Loader } from "./loader"

export const CallList = ({ calls }) => {

    if (!calls) return <Loader />
    return <section className="call-list">
        {calls.map(call => <CallPreview key={call._id} call={call} />)}
    </section>
}