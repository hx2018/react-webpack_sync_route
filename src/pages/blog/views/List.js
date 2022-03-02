import React from "react";
import Counter from "../components/Counter";

const captions = ["firstCounter", "secondCounter", "thirdCounter"];
export default class List extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 100 };
  // }

  render() {
    return (
      <div>
        <h3>Blog-List</h3>
        {/* <Counter caption={"first"} /> */}
        {captions.map((e, index) => (
          <Counter key={index} caption={e} />
        ))}
      </div>
    );
  }
}
