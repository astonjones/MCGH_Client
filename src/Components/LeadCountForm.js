import Datepicker from 'react-datepicker'
import { Button } from 'react-bootstrap'
import useState from 'react'

function LeadCountForm(){
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetchData()
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className="dateForm">
            <div>
                <label>Start Time</label>
                <Datepicker selected={startDate} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" onChange={sDate => setStartDate(sDate)}/>
            </div>
            <div>
                <label>End Time</label>
                <Datepicker selected={endDate} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" onChange={eDate => setEndDate(eDate)}/>
            </div>
            <div><Button variant="primary" type="submit">Submit</Button></div>
        </form>
    )
}


export default LeadCountForm