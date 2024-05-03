ALTER TABLE IF EXISTS public.event_registrations
    ADD CONSTRAINT event_registration_has_event_id_fk FOREIGN KEY (event_id)
    REFERENCES public.events (event_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.event_registrations
    ADD CONSTRAINT event_registration_has_user_fk FOREIGN KEY (user_id)
    REFERENCES public.users (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.presentation_assignments
    ADD CONSTRAINT presentation_assignment_has_presentation_id_fk FOREIGN KEY (presentation_id)
    REFERENCES public.presentations (presentation_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.presentation_assignments
    ADD CONSTRAINT presentation_assignment_has_user_id_fk FOREIGN KEY (user_id)
    REFERENCES public.users (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.sessions
    ADD CONSTRAINT session_has_event_id_fk FOREIGN KEY (event_id)
    REFERENCES public.events (event_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.sessions
    ADD CONSTRAINT session_has_presentation_id_fk FOREIGN KEY (presentation_id)
    REFERENCES public.presentations (presentation_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.sessions
    ADD CONSTRAINT session_has_room_id_fk FOREIGN KEY (room_id)
    REFERENCES public.rooms (room_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

