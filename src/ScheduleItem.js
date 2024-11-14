import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ScheduleItem ({event_start, event_end, event_name, attendees, event_owner, desc}) {
    const [modal_active, setModalActive] = useState(false);

    const handleModalShow = () => setModalActive(true);
    const handleModalClose = () => setModalActive(false);

    if (!modal_active) {
        return (
            <div>
                <table class='table table-dark'>
                    <tbody>
                        <tr>
                            <td>What:</td><td>{event_name}</td>
                        </tr>
                        <tr>
                            <td>Start Time:</td><td>{event_start}</td>
                        </tr>
                        <tr>
                            <td>End Time:</td><td>{event_end}</td>
                        </tr>
                        <tr>
                            <td>Attendees:</td><td>{attendees.map((att, ix) => {
                                return (<span key={ix}>{att};&nbsp;</span>)
                            })}</td>
                        </tr>
                        
                        <tr>
                            <td>Organizer:</td><td>{event_owner}</td>
                        </tr>
                        <input type='button' value='Details' onClick={handleModalShow}></input>
                    </tbody>
                </table>
                <div><br></br></div>
            </div>
        );
    }
    else {
        return (
            <Modal show={modal_active} onHide={handleModalClose}>
                <Modal.Header>
                    <Modal.Title>Meeting Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {desc}
                </Modal.Body>
                <Modal.Footer>
                    <input type="button" value="Done" onClick={handleModalClose}></input>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ScheduleItem;