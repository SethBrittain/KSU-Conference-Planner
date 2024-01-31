import React from "react";

type LandingPageProps = {
    text: string;
}
const LandingPage = ({ text }: LandingPageProps): React.JSX.Element => <button>{ text }</button>;

export default LandingPage;