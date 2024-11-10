import React, { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const EventForm = ({ contract }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [maxAttendees, setMaxAttendees] = useState("");
  const [eventId, setEventId] = useState("");
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const createEvent = async () => {
    setLoading(true);
    try {
      const tx = await contract.createEvent(name, date, location, maxAttendees);
      await tx.wait();
      const eventCreatedEvent = await contract.queryFilter(
        contract.filters.EventCreated()
      );
      const latestEventId =
        eventCreatedEvent[eventCreatedEvent.length - 1].args[0].toNumber();
      setEventId(latestEventId);
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setLoading(false);
    }
  };

  const registerForEvent = async (eventId) => {
    setLoading(true);
    try {
      const tx = await contract.registerForEvent(eventId);
      await tx.wait();
    } catch (error) {
      console.error("Error registering for event:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form>
        <label>
          Enter Event Name:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter Event Date:
          <input
            type="number"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Enter Event Location:
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Enter Max Attendees for event:
          <input
            type="number"
            placeholder="Max Attendees"
            value={maxAttendees}
            onChange={(e) => setMaxAttendees(e.target.value)}
          />
        </label>
        <button onClick={createEvent} disabled={loading}>
          Create Event
        </button>
      </form>

      {eventId && (
        <div>
          <h2>Register for Event</h2>
          <p>Event ID: {eventId}</p>
          <button onClick={() => registerForEvent(eventId)} disabled={loading}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default EventForm;
