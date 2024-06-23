import React, { Component } from "react";

class GoogleMapStyle extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly

      <div className="google-map-style-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8384690962475!2d90.39643718642805!3d23.859869029390495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c427bb423b2b%3A0x9a16544773dbf7e!2s03%2C%20House%2C%20353%20Road-05%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1705291137600!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px", position: "relative", border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;
