import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { increment } from "../../../../src/redux/action";
import { getCounterValue, setCounterValue } from "../../../api/counter";

function Counter(props) {
  const { count, add, caption } = props;

  useEffect(() => {
    // const res = getCounterValue("http://localhost:3001/api/counter");
    getCounterValue("http://localhost:9000/api/counter").then(
      (res) => console.log("=====", res),
      (res) => console.log("=====", res)
    );

    setCounterValue("http://localhost:9000/api/counter/save", {
      name: "hah",
    }).then((res) => console.log("-----res", res));
  }, []);

  return (
    <div>
      <input
        type="button"
        value={`${caption} +`}
        onClick={(e) => {
          add(caption);
        }}
        // value="+"
      />
      <p>Counter222: {count}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { counter } = state;
  // ownProps就是除state以外获取的props，这里是caption
  return { count: counter[ownProps.caption] };
};

const mapActionToProps = (dispatch) => ({
  add: (caption) => dispatch(increment(caption)),
});

export default connect(mapStateToProps, mapActionToProps)(Counter);
