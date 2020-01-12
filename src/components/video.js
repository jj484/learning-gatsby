import React from "react"

export default class Video extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.data.title,
      videoURL: this.props.data.videoURL,
    }

    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onClick() {}

  handleChange(event) {
    this.setState({
      videoURL:
        event.target.value.replace("watch?v=", "embed/") +
        "?loop=1&playlist=" +
        event.target.value.replace("https://www.youtube.com/watch?v=", ""),
    })
  }

  handleSubmit(event) {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Enter a YouTube Video URL <br></br>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br></br>
        </form>
        <br></br>
        <h1>{this.state.title}</h1>
        <p>The video will loop indefinitely!</p>

        {/*
        <p>Formmated URL: {this.state.videoURL}</p>
        */}

        <iframe
          width="941"
          height="539"
          src={this.state.videoURL}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    )
  }
}
