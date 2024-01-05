import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hi! I'm Kyle.",
      subTitle: "You bastard!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.subTitle}</p>
      </div>
    );
  }
}

////Saat kita membuat komponen di file terpisah, kita harus mengekspornya agar nanti bisa kita impor.
export default Title;
