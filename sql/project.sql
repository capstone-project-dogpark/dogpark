-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS "like";
DROP TABLE IF EXISTS follow;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS park;
DROP TABLE IF EXISTS profile;
DROP FUNCTION IF EXISTS haversine;

CREATE TABLE profile (
    -- this creates the attribute for the primary key
    -- auto_increment tells mySQL to number them {1, 2, 3, ...}
    -- not null means the attribute is required!
                         profile_id uuid NOT NULL,
                         profile_about_pet VARCHAR(275)NULL,
                         profile_activation_token CHAR(32) NULL,
                         profile_email VARCHAR(64) NOT NULL UNIQUE ,
                         profile_at_handle VARCHAR(48) NOT NULL UNIQUE,
    -- to make something optional, exclude the not null
                         profile_hash CHAR(97) NOT NULL,
                         profile_image VARCHAR(255) NULL,
                         UNIQUE(profile_email),
                         UNIQUE(profile_at_handle),
    -- this officiates the primary key for the entity
                         PRIMARY KEY(profile_id)
);


CREATE TABLE park (

                      park_id uuid NOT NULL,
                      park_address VARCHAR(255),
                      park_lat FLOAT NOT NULL ,
                      park_lng FLOAT NOT NULL,
                      park_name VARCHAR(64) NOT NULL,

                      PRIMARY KEY(park_id)
);

CREATE TABLE post (
                        post_id uuid NOT NULL,
                        post_park_id uuid NOT NULL,
                        post_profile_id uuid NOT NULL,
                        post_caption VARCHAR,
                        post_date DATE NOT NULL,
                        post_image_url VARCHAR(36) NOT NULL,

                       FOREIGN KEY(post_park_id) REFERENCES park (park_id),
                       FOREIGN KEY(post_profile_id) REFERENCES profile (profile_id),
                       PRIMARY KEY(post_id)

);

CREATE INDEX ON post (post_park_id);
CREATE INDEX ON post (post_profile_id);

CREATE TABLE follow (
                       follow_approved BOOLEAN,
                       follow_date DATE NOT NULL,
                       follow_profile_id uuid NOT NULL ,
                       follower_profile_id uuid NOT NULL
);

CREATE TABLE comment (
                        comment_id uuid PRIMARY KEY NOT NULL,
                        comment_post_id uuid NOT NULL,
                        comment_profile_id uuid NOT NULL,
                        comment_date TIMESTAMP WITH TIME ZONE NOT NULL,
                        comment_text VARCHAR(512) NULL,
                        FOREIGN KEY(comment_post_id) REFERENCES post(post_id),
                        FOREIGN KEY(comment_profile_id) REFERENCES profile(profile_id)

);

CREATE INDEX ON comment (comment_post_id);
CREATE INDEX ON comment (comment_profile_id);


    CREATE TABLE "like" (
        like_profile_id uuid NOT NULL,
        like_post_id uuid NOT NULL,
        like_date TIMESTAMP WITH TIME ZONE NOT NULL,
        FOREIGN KEY(like_post_id) REFERENCES post(post_id),
        FOREIGN KEY(like_profile_id) REFERENCES profile(profile_id)
        );

CREATE INDEX ON "like" (like_post_id);
CREATE INDEX ON "like" (like_profile_id);

create function haversine(originx double precision, originy double precision, destinationx double precision, destinationy double precision) returns double precision
    language plpgsql
as
$$
DECLARE
    -- first,  all variables; I don't think you can declare later
    radius         FLOAT;
    latitudeAngle1 FLOAT;
    latitudeAngle2 FLOAT;
    latitudePhase  FLOAT;
    longitudePhase FLOAT;
    alpha          FLOAT;
    corner         FLOAT;
    distance       FLOAT;
BEGIN
    -- assign the variables that were declared & use them
    radius := 3958.7613; -- radius of the earth in miles
    latitudeAngle1 := RADIANS(originY);
    latitudeAngle2 := RADIANS(destinationY);
    latitudePhase := RADIANS(destinationY - originY);
    longitudePhase := RADIANS(destinationX - originX);
    alpha := POW(SIN(latitudePhase / 2), 2)
        + POW(SIN(longitudePhase / 2), 2)
                 * COS(latitudeAngle1) * COS(latitudeAngle2);
    corner := 2 * ASIN(SQRT(alpha));
    distance := radius * corner;
    RETURN distance;
END;
$$;