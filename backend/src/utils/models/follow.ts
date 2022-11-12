import { sql } from '../database.utils'

export interface Follow {
    followApproved: boolean
    followProfileId: string | null
    followerProfileId: string | null
    followDate: Date | null

}

export async function  followProfile (follow: Follow): Promise<string> {
    const {followProfileId, followerProfileId} = follow
    await sql `INSERT INTO follow (follow_profile_id, follower_profile_id, follow_date) VALUES(${followProfileId}, ${followerProfileId}, NOW())`
    return 'Follow successful'
}

export async function unfollowProfile(follow: Follow): Promise<string> {
    const {followerProfileId, followProfileId} = follow
    await sql `DELETE FROM follow WHERE follower_profile_id = ${followerProfileId} AND follow_profile_id = ${followProfileId}`
    return 'Unfollow Successful'
}

