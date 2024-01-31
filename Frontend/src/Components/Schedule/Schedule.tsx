import React from "react";

type ScheduleProps = {
    text: string;
}
const Schedule = ({ text }: ScheduleProps): React.JSX.Element => <button>{ text }</button>;

export default Schedule;