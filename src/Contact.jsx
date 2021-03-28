import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Contact() {
  return (
    <form>
      <Grid container spacing={2} xs={12} sm={6} md={5} lg={4}>
        <div className="text">
          <h1>GET IN TOUCH</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </Grid>
      <Grid
        className="contact-card"
        container
        spacing={2}
        xs={12}
        sm={6}
        md={5}
        lg={4}
      >
        <Grid align="left" item xs={12} sm={6}>
          <label className="required">Name</label>
          <input
            type="text"
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid align="left" item xs={12} sm={6}>
          <label className="required">Email Address</label>
          <input
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            required
          />
        </Grid>
        <Grid align="left" item xs={12}>
          <label className="required">Message</label>
          <br />
          <textarea
            rows="4"
            cols="50"
            required
            name="textarea"
            label="Message"
            id="textarea"
          />
        </Grid>
        <Grid item xs={12}>
          <button type="submit" fullWidth variant="contained">
            Send
          </button>
        </Grid>
      </Grid>
    </form>
  );
}
