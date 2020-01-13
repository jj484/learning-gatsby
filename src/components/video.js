import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { Typography } from "@material-ui/core/"
import "typeface-roboto"

export default class Video extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoURL: this.props.data.videoURL,
      formmatedURL: this.props.data.formmatedURL,
      submitURL: this.props.data.submitURL,
    }

    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }

  onClick() {}

  handleChange(event) {
    this.setState({
      formmatedURL: event.target.value.includes("https://youtu.be/")
        ? event.target.value.replace(
            "https://youtu.be/",
            "https://www.youtube.com/embed/"
          ) +
          "?loop=1&playlist=" +
          event.target.value.replace("https://youtu.be/", "")
        : event.target.value.replace("watch?v=", "embed/") +
          "?loop=1&playlist=" +
          event.target.value.replace("https://www.youtube.com/watch?v=", ""),
    })
  }
  buttonClick() {
    this.setState({ submitURL: this.state.formmatedURL })
  }

  render() {
    return (
      <div>
        <form>
          <TextField
            required
            value={this.state.value}
            onChange={this.handleChange}
            label="Enter a YouTube Link"
          />
        </form>

        <div style={{ paddingBottom: "1%" }}>
          <Button
            onClick={this.buttonClick}
            variant="contained"
            color="primary"
          >
            Go!
          </Button>
        </div>

        <br></br>
        <Typography
          variant="body1"
          style={{ paddingBottom: "2%", paddingTop: "1%" }}
        >
          Enter the URL of a YouTube video and press go! The YouTube video will
          loop indefinitely! <br />
          eg: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        </Typography>

        {/*
        <p>Formmated URL: {this.state.formmatedURL}</p>
        */}

        <iframe
          style={{
            width: "100%",
            position: "relative",
          }}
          height="539"
          src={this.state.submitURL}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    )
  }
}
