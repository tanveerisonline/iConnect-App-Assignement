import React from "react";
import "../components/TestPeriod.css";

export default function TestPeriod(props) {
  return (
    <div>
      <table className="circular-points">
        <tr>
          <td>
            {" "}
            <div className="number">{props.number}</div>
          </td>
          <td>
            {" "}
            <div className="period-title">{props.period_title}</div>
          </td>
        </tr>
      </table>

      <div
        className={
          "period-desc " + (props.last_item ? "remove-border-left" : " ")
        }
      >
        <div className="period-description">{props.period_description}</div>
        <div className="period-description">{props.period_descriptions}</div>
      </div>
    </div>
  );
}
