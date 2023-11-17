import React from "react";

type PersonalScheduleProps = {
    text: string;
}
const PersonalSchedule = ({ text }: PersonalScheduleProps): React.JSX.Element => <button>{ text }</button>;

export default PersonalSchedule;