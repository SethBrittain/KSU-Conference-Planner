import React from "react";

type PersonalSchedulePageProps = {
    text: string;
}
const PersonalSchedulePage = ({ text }: PersonalSchedulePageProps): React.JSX.Element => <button>{ text }</button>;

export default PersonalSchedulePage;