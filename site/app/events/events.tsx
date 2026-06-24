import { event } from "@/data/events";
import { SwooshUnderline } from "@/components/ui/swoosh-underline";

export default function Events() {
  return (
    <div className="events-wrapper">
      <div className="events-grid">

        {/* Column 1 — Date + Title */}
        <div className="events-col events-col-date">
          <h2 className="events-section-label">UPCOMING EVENT</h2>

          <div className="events-date-display">
            <div className="relative inline-block">
              <h1 className="events-date-text">{event.date}</h1>
              <svg className="events-date-ring" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40,75 C 40,10 360,10 360,75 C 360,140 40,140 40,75 Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="opacity-90" />
                <path d="M 35,70 C 45,15 355,15 365,80 C 355,135 45,135 35,70 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-60" />
                <path d="M 45,80 C 35,25 345,5 355,70 C 365,125 55,145 45,80 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
              </svg>
            </div>
          </div>

          <div className="events-title-block">
            <h3 className="events-title">{event.title}</h3>
            <SwooshUnderline className="events-title-underline" />
          </div>
        </div>

        {/* Column 2 — Description */}
        <div className="events-col events-col-hidden">
          <h4 className="event-label">Description</h4>
          <p className="events-body-text">{event.description}</p>
        </div>

        {/* Column 3 — Theme */}
        <div className="events-col events-col-hidden">
          <h4 className="event-label">Theme</h4>
          <p className="events-body-text">{event.theme ?? "TBA"}</p>
        </div>

        {/* Column 4 — Register + Location */}
        <div className="events-col events-col-last">
          <svg className="events-deco-lines" viewBox="0 0 200 200" fill="none">
            <path d="M 120,-20 Q 80,80 150,120 T 100,220" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 150,-40 Q 110,60 180,100 T 130,200" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 180,-60 Q 140,40 210,80 T 160,180" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="events-register-block">
            {event.registerLink ? (
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="events-register-link">
                Register Now
              </a>
            ) : (
              <span className="events-register-closed">Registrations Closed</span>
            )}
          </div>

          <div className="events-location-block">
            <div>
              <p className="event-label">Location</p>
              <p className="events-location-value">{event.location ?? "TBA"}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}