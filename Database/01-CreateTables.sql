CREATE TYPE attendee_type AS ENUM ('attendee', 'reviewer', 'scheduler')

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS public.event_registrations
(
    event_registration_id bigserial NOT NULL,
    user_id bigint NOT NULL,
    event_id bigint NOT NULL,
	attendee_type attendee_type NOT NULL,
    expires_on timestamp with time zone NOT NULL DEFAULT (CURRENT_TIMESTAMP + '6 mons'::interval),
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT event_registration_pkey PRIMARY KEY (registration_id),
    UNIQUE( user_id, event_id)
);

-- Create events table
CREATE TABLE IF NOT EXISTS public.events
(
    event_id bigserial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    first_date date NOT NULL,
	last_date date NOT NULL,
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone NOT NULL,
    conference_id bigint NOT NULL,
    CONSTRAINT events_pkey PRIMARY KEY (event_id),
    UNIQUE(first_date, last_date, conference_id)
);

-- Create people table
CREATE TABLE IF NOT EXISTS public.user
(
    user_id bigserial NOT NULL PRIMARY KEY,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default",
    salt bigint,
    dietary_restrictions character varying(4096) COLLATE pg_catalog."default",
    accommodations character varying(4096) COLLATE pg_catalog."default",
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone NOT NULL
    UNIQUE(email)
);

-- Create presentation_assignments table
CREATE TABLE IF NOT EXISTS public.presentation_assignments
(
    presentation_assignment_id bigserial NOT NULL PRIMARY KEY,
    user_id bigint NOT NULL,
    presentation_id bigint NOT NULL,
    review boolean NOT NULL DEFAULT false,
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone NOT NULL
);

-- Create presentation table
CREATE TABLE IF NOT EXISTS public.presentation
(
    presentation_id bigserial NOT NULL PRIMARY,
    attendee_id bigint NOT NULL,
    presentation_name character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'Untitled Presentation'::character varying,
    authors character varying COLLATE pg_catalog."default" NOT NULL,
    abstract character varying COLLATE pg_catalog."default",
    technical_requirements character varying COLLATE pg_catalog."default",
    presentation_type character varying COLLATE pg_catalog."default" NOT NULL,
    accepted boolean NOT NULL DEFAULT false,
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone NOT NULL
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS public.sessions
(
    session_id bigserial NOT NULL PRIMARY KEY,
    presentation_id bigint NOT NULL,
    event_id bigint NOT NULL,
    session_start_time timestamp with time zone NOT NULL,
    session_end_time timestamp with time zone NOT NULL,
    room_id bigint NOT NULL,
    room_number character varying(16) COLLATE pg_catalog."default" NOT NULL, --Move this to room table
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone NOT NULL,
    UNIQUE(event_id, session_start_time, session_end_time, room_id)
);
