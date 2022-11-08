-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS like;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS park;

CREATE TABLE profile (
    -- this creates the attribute for the primary key
    -- auto_increment tells mySQL to number them {1, 2, 3, ...}
    -- not null means the attribute is required!
                         profile_id uuid NOT NULL PRIMARY KEY,
                         profile_about_pet VARCHAR(275)NULL,
                         profile_activation_token CHAR(32) NOT NULL,
                         profile_email VARCHAR(64) NOT NULL UNIQUE ,
                         profile_at_handle VARCHAR(48) NOT NULL UNIQUE,
    -- to make something optional, exclude the not null
                         profile_hash CHAR(97) NOT NULL,
                         profile_image VARCHAR(32) NULL,
                         UNIQUE(profile_email),
                         UNIQUE(profile_at_handle),
    -- this officiates the primary key for the entity
                         PRIMARY KEY(profile_id)
);
-- create the tweet entity
CREATE TABLE post (
    -- this is for yet another primary key...
                        post_id BINARY(22) NOT NULL,
    -- this is for a foreign key; auto_incremented is omitted by design
                        post_park_id BINARY(16) NOT NULL,
                        post_profile_id VARCHAR(140) NOT NULL,
                        post_caption VARCHAR,
                        post_date DATE,
                        post_image_url ,
    -- notice dates don't need a size parameter

    -- this creates an index before making a foreign key
                       INDEX(post_park_id),
    -- this creates the actual foreign key relation
                       FOREIGN KEY(post_park_id) REFERENCES profile(profileId),
    -- and finally create the primary key
                       PRIMARY KEY(tweetId)
);
-- create the tweetImage entity
CREATE TABLE follow (
                       imageId BINARY(16) NOT NULL,
                       imageTweetId BINARY(16) NOT NULL,
                       imageCloudinaryToken VARCHAR(255) NOT NULL,
                       imageUrl VARCHAR(128) NOT NULL ,
                       INDEX(imageId),
                       INDEX(imageTweetId),
                       FOREIGN KEY(imageTweetId) REFERENCES tweet(tweetId),
                       PRIMARY KEY (imageId)
);
-- create the like entity (a weak entity from an m-to-n for profile --> tweet)
CREATE TABLE comment (
    -- these are not auto_increment because they're still foreign keys
                        likeTweetId BINARY(16) NOT NULL,
                        likeProfileId BINARY(16) NOT NULL,
                        likeDate DATETIME(6) NOT NULL,	-- index the foreign keys
                        INDEX(likeProfileId),
                        INDEX(likeTweetId),
    -- create the foreign key relations
                        FOREIGN KEY(likeTweetId) REFERENCES tweet(tweetId),
                        FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
    -- finally, create a composite foreign key with the two foreign keys
                        PRIMARY KEY(likeProfileId, likeTweetId)
);

CREATE TABLE park (
    -- these are not auto_increment because they're still foreign keys
    likeTweetId BINARY (16) NOT NULL,
    likeProfileId BINARY (16) NOT NULL,
    likeDate DATETIME(6) NOT NULL, -- index the foreign keys
    INDEX(likeProfileId
),
                        INDEX(likeTweetId),
    -- create the foreign key relations
                        FOREIGN KEY(likeTweetId) REFERENCES tweet(tweetId),
                        FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
    -- finally, create a composite foreign key with the two foreign keys
                        PRIMARY KEY(likeProfileId, likeTweetId)
    );

    CREATE TABLE like (
        -- these are not auto_increment because they're still foreign keys
        likeTweetId BINARY (16) NOT NULL,
        likeProfileId BINARY (16) NOT NULL,
        likeDate DATETIME(6) NOT NULL, -- index the foreign keys
        INDEX(likeProfileId) ,
                        INDEX(likeTweetId),
    -- create the foreign key relations
                        FOREIGN KEY(likeTweetId) REFERENCES tweet(tweetId),
                        FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
    -- finally, create a composite foreign key with the two foreign keys
                        PRIMARY KEY(likeProfileId, likeTweetId)
        );