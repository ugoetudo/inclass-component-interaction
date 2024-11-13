import events from './sample_data';
import ScheduleItem from './ScheduleItem';

function Schedule ({selected_date, goBack}) {

    const checkDate = (event_to_check) => {
        return event_to_check.event_date === selected_date
    }

    return (
        <div>
            <input type="button" value="Go Back" onClick={goBack()}/>

            {
                events.map((ee, ix) => {
                    if (checkDate(ee)) {
                        return (
                            <ScheduleItem 
                                key={ix}
                                event_start={ee.event_start}
                                event_end={ee.event_end}
                                event_name={ee.event_name}
                                attendees={ee.attendees}
                                event_owner={ee.event_owner}
                                desc={ee.desc} />
                        )
                    }
                    else {
                        return (null);
                    }
                })
            }
        </div>
    );
}

module.exports = Schedule;