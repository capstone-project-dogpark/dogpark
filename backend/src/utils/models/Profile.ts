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

export async function selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {
    const result = <Profile[]>await sql`SELECT profile_id, profile_about_pet, profile_activation_token, profile_at_handle,profile_email,profile_hash,profile_image FROM  profile WHERE profile_activation_token = ${profileActivationToken}`
    return result?.length === 1 ? result[0] : null
}

export async function updateProfile (profile: Profile): Promise<string> {
    const {profileId, profileActivationToken, profileAtHandle, profileEmail, profileHash, profileImage} = profile
    await sql `UPDATE profile SET profile_activation_token = ${profileActivationToken}, profile_at_handle = ${profileAtHandle}, profile_email = ${profileEmail}, profile_hash = ${profileHash}, profile_image = ${profileImage} WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'
}
