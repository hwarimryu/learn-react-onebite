import { useParams } from "react-router-dom"

const Diary = () => {
    const parms = useParams()
    return <div> Diary {parms.id} 번 일기입니다. </div>
}

export default Diary