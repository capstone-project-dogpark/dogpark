import {sql} from "../database.utils";

export interface Profile {
    profileId: string|null,
    profileAboutPet: string|null,
    profileActivationToken: string|null,
    profileAtHandle: string,
    profileEmail: string,
    profileHash: string,
    profileImage: string|null
}

export async function insertProfile(profile:Profile) {
    const {profileAboutPet, profileActivationToken, profileAtHandle, profileEmail, profileHash, profileImage} = profile
    await sql`Insert Into profile(profile_id, profile_about_pet, profile_activation_token, profile_at_handle, profile_email, profile_hash, profile_image) VALUES (gen_random_uuid(),${profileAboutPet},${profileActivationToken},${profileAtHandle},${profileEmail},${profileHash},${profileImage})`
    return 'profile successfully created'
}