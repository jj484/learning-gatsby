import React from "react"

export default class Video extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.data
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    alert ("HI")
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click me!</button>

        <h1></h1>
        <p>There will be a video below</p>
        <iframe
          width="941"
          height="539"
          src="https://www.youtube.com/embed/CN_NPmKjWDM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    )
  }
}
