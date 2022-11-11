import { sql } from '../database.utils'

export interface Like {
    likeProfileId: string | null
    likePostId: string | null
    likeDate: Date | null
}

export async function  insertLike (like: Like): Promise<string> {
    const {likeProfileId, likePostId} = like
    await sql `INSERT INTO "like" (like_profile_id, like_post_id, like_date) VALUES(${likeProfileId}, ${likePostId}, NOW())`
    return 'Like successful'
}

export async function deleteLike (like: Like): Promise<string> {
    const {likeProfileId, likePostId} = like
    await sql `DELETE FROM "like" WHERE like_profile_id = ${likeProfileId} AND like_post_id = ${likePostId}`
    return 'Unlike Successful'
}

export async function selectLikeByLikeId (like: Like): Promise<Like|null> {
    const {likeProfileId, likePostId} = like
    const result = <Like[]> await sql `SELECT like_profile_id, like_post_id, like_date_id FROM "like" WHERE like_profile_id = ${likeProfileId} AND like_post_id = ${likePostId}`
    return result?.length === 1 ? result [0] : null
}

export async function selectLikesByLikePostId (likePostId: string): Promise<Like[]> {
    return <Like[]> await sql `SELECT like_profile_id, like_post_id, like_date FROM "like" WHERE like_post_id = ${likePostId}`
}