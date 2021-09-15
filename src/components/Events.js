import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Events(props) {
  let [event, setEvent] = useState({});
  let [seatMap, setSeatMap] = useState(false);
  let [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?id=${props.match.params.eventId}&apikey=biW1fGE1aeVKqhiGWAdGttCRSItyVN2z`
      )
      .then((resApi) => {
        setEvent(resApi.data._embedded.events[0]);
        console.log(resApi.data._embedded.events[0]);
        setImg(
          resApi.data._embedded.events[0].images.filter((im) => im.width > 1000)
        );
      });
  }, []);

  return (
    <div>
      <div>
        <div className="eventsimage">
          <img src={img[0]?.url} width="100%" />
          <div class="eventtitle"><h1>{event.name}</h1></div>
        </div>
        <h2>
          Price Ranges: ${event.priceRanges?.[0]?.min} to $
          {event.priceRanges?.[0]?.max}
        </h2>
        <h3>{event.promoter?.description}</h3>
        <h3>Date: {event.dates?.start?.localDate}</h3>
        <h3>Event starts at: {event.dates?.start?.localTime}</h3>
        {!seatMap ? (
          <button onClick={() => setSeatMap(!seatMap)}>See Seatmap</button>
        ) : (
          ""
        )}

        {seatMap ? (
          <div>
            <button onClick={() => setSeatMap(!seatMap)}>Hide Seatmap</button>
            <br />
            <img src={event.seatmap.staticUrl} width="500" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Events;
