-- Create attendee_types table
CREATE TABLE IF NOT EXISTS public.attendee_types
(
    attendee_type_id smallserial NOT NULL,
    attendee_type_name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT attendee_types_pkey PRIMARY KEY (attendee_type_id, attendee_type_name)
);

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS public.event_registrations
(
    registration_id bigserial NOT NULL,
    person_id bigint NOT NULL,
    event_id bigint NOT NULL,
	attendee_type_id bigint NOT NULL,
    expires_on timestamp with time zone NOT NULL DEFAULT (CURRENT_TIMESTAMP + '6 mons'::interval),
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT event_registration_pkey PRIMARY KEY (registration_id)
);

-- Create events table
CREATE TABLE IF NOT EXISTS public.events
(
    event_id bigserial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    start_date timestamp with time zone NOT NULL,
	end_date timestamp with time zone NOT NULL,
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone NOT NULL,
    CONSTRAINT events_pkey PRIMARY KEY (event_id)
);

-- Create people table
CREATE TABLE IF NOT EXISTS public.people
(
    person_id bigserial NOT NULL,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default",
    salt bigint,
    dietary_restrictions character varying(4096) COLLATE pg_catalog."default",
    accommodations character varying(4096) COLLATE pg_catalog."default",
    CONSTRAINT people_pkey PRIMARY KEY (person_id, email)
);

-- Create presentation_assignments table
CREATE TABLE IF NOT EXISTS public.presentation_assignments
(
    assignment_id bigserial NOT NULL,
    registration_id bigint NOT NULL,
    presentation_id bigint NOT NULL,
    review boolean NOT NULL DEFAULT false,
    CONSTRAINT presentation_assignment_pkey PRIMARY KEY (assignment_id, registration_id, presentation_id)
);

-- Create presentations table
CREATE TABLE IF NOT EXISTS public.presentations
(
    presentation_id bigserial NOT NULL,
    attendee_id bigint NOT NULL,
    presentation_name character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'Untitled Presentation'::character varying,
    authors character varying COLLATE pg_catalog."default" NOT NULL,
    abstract character varying COLLATE pg_catalog."default",
    technical_requirements character varying COLLATE pg_catalog."default",
    presentation_type character varying COLLATE pg_catalog."default" NOT NULL,
    accepted boolean NOT NULL DEFAULT false,
    CONSTRAINT presentations_pkey PRIMARY KEY (presentation_id)
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS public.sessions
(
    session_id bigserial NOT NULL,
    presentation_id bigint NOT NULL,
    event_id bigint NOT NULL,
    session_start_time timestamp with time zone NOT NULL,
    session_end_time timestamp with time zone NOT NULL,
    room_number character varying(16) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT sessions_pkey PRIMARY KEY (session_id, event_id, presentation_id)
);
