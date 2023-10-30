CREATE TYPE attendee_type AS ENUM ('attendee', 'reviewer', 'scheduler');

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS public.event_registrations
(
    event_registration_id bigserial NOT NULL PRIMARY KEY,
    user_id bigint NOT NULL,
    event_id bigint NOT NULL,
	attendee_type_id attendee_type NOT NULL,
    expires_on timestamp with time zone NOT NULL DEFAULT (CURRENT_TIMESTAMP + '6 mons'::interval),
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE( user_id, event_id)
);

-- Create events table
CREATE TABLE IF NOT EXISTS public.events
(
    event_id bigserial NOT NULL,
    conference_id bigint NOT NULL,
    first_date date NOT NULL,
    last_date date NOT NULL,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT events_pkey PRIMARY KEY (event_id),
    UNIQUE(first_date, last_date, conference_id)
);

-- Create people table
CREATE TABLE IF NOT EXISTS public.users
(
    user_id bigserial NOT NULL PRIMARY KEY,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default",
    salt bigint,
    dietary_restrictions character varying(4096) COLLATE pg_catalog."default",
    accommodations character varying(4096) COLLATE pg_catalog."default",
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(email)
);

-- Create presentation_assignments table
CREATE TABLE IF NOT EXISTS public.presentation_assignments
(
    presentation_assignment_id bigserial NOT NULL PRIMARY KEY,
    user_id bigint NOT NULL,
    presentation_id bigint NOT NULL,
    review boolean NOT NULL DEFAULT false,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create presentation table
CREATE TABLE IF NOT EXISTS public.presentations
(
    presentation_id bigserial NOT NULL PRIMARY KEY,
    presentation_name character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'Untitled Presentation'::character varying,
    authors character varying COLLATE pg_catalog."default" NOT NULL,
    abstract character varying COLLATE pg_catalog."default",
    documentation character varying COLLATE pg_catalog."default",
    technical_requirements character varying COLLATE pg_catalog."default",
    presentation_type character varying COLLATE pg_catalog."default" NOT NULL,
    accepted boolean NOT NULL DEFAULT false,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS public.sessions
(
    session_id bigserial NOT NULL PRIMARY KEY,
    presentation_id bigint NOT NULL,
    event_id bigint NOT NULL,
    room_id bigint NOT NULL,
    session_start_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    session_end_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create rooms table
CREATE TABLE IF NOT EXISTS public.rooms
(
    room_id bigserial NOT NULL PRIMARY KEY,
    room_number bigint NOT NULL,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create user_sessions table
CREATE TABLE IF NOT EXISTS public.user_sessions
(
    user_session_id bigserial NOT NULL PRIMARY KEY,
    event_id bigint NOT NULL,
    user_id bigint NOT NULL,
    session_id bigint NOT NULL,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(event_id, user_id),
    UNIQUE(event_id, session_id)
);

-- Create conferences table
CREATE TABLE IF NOT EXISTS public.conferences
(
    conference_id bigserial NOT NULL PRIMARY KEY,
    name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP 
);
