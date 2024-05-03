import ApiDataOutput from "./ApiDataOutput";
/**
 * A component meant to test if the API is working. Can be deleted eventaully
 * @returns A component meant to test if the API is working
 */
const ApiTest = (): React.JSX.Element => {
    return (
        <div>
            <ApiDataOutput name={"attendee_types"} which={0} />
            <ApiDataOutput name={"event_registrations"} which={1} />
            <ApiDataOutput name={"events"} which={2} />
            <ApiDataOutput name={"people"} which={3} />
            <ApiDataOutput name={"presentation_assignments"} which={4} />
            <ApiDataOutput name={"presentations"} which={5} />
            <ApiDataOutput name={"sessions"} which={6} />
        </div>
    );
};

export default ApiTest;
