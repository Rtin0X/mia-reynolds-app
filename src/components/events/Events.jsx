import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";

const getEvents = async () => {
    const res = await fetch('http://localhost:3001/events');
    return res.json();
};

const Events = async () => {
    const events = await getEvents();
    return (
        <section className="section" id="tours">
            <div className="container mx-auto pt-[140px] pb-[100px]">
                <SectionHeader pretitle='Tournée Mondiale' title='Prochains Concerts' />
                {/* event box */}
                <EventBox events={events} />
            </div>
        </section>
    );
};

export default Events;