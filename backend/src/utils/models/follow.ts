import { sql } from '../database.utils'

export interface Follow {
    followApproved: boolean
    followProfileId: string | null
    followerProfileId: string | null
    followDate: Date | null

}

export async function  insertFollow (follow: Follow): Promise<string> {
    const {followProfileId, followerProfileId} = follow
    await sql `INSERT INTO follow (follow_profile_id, follower_profile_id, follow_date) VALUES(${followProfileId}, ${followerProfileId}, NOW())`
    return 'Follow successful'
}

export async function deleteFollow(follow: Follow): Promise<string> {
    const {followProfileId, followerProfileId} = follow
    await sql `DELETE FROM follow WHERE follow_profile_id = ${followProfileId} AND follower_profile_id = ${followerProfileId}`
    return 'Unfollow Successful'
}

export async function selectFollowByFollowProfileId (follow: Follow): Promise<Follow|null> {
    const {followProfileId, followerProfileId} = follow
    const result = <Follow[]> await sql `SELECT follow_profile_id, follower_profile_id, follow_date FROM follow WHERE follow_profile_id = ${followProfileId} AND follower_profile_id = ${followerProfileId}`
    return result?.length === 1 ? result [0] : null
}

export async function selectFollowsByFollowerProfileId (followProfileId: string): Promise<Follow[]> {
    return <Follow[]> await sql `SELECT follow_profile_id, follower_profile_id, follow_date FROM follow WHERE follow_profile_id = ${followProfileId}`
}


