import { sql } from '../database.utils'
import {Like} from "./like";

export interface Comment {
    commentId: string|null
    commentPostId: string
    commentProfileId: string
    commentText: string
    commentDate: Date
}

export async function insertComment(comment: Comment): Promise<string> {
    const {commentProfileId, commentPostId, commentText} = comment
    await sql `INSERT INTO comment (comment_id, comment_post_id, comment_profile_id, comment_text, comment_date) VALUES (gen_random_uuid(), ${commentPostId}, ${commentProfileId}, ${commentText}, NOW())`
    return 'Comment created successfully'
}

export async function selectAllComments(): Promise<Comment[]> {
    return sql <Comment[]> `SELECT comment_id, comment_post_id, comment_profile_id, comment_text, comment_date FROM comment ORDER BY comment_date DESC`

}

export async function selectCommentByCommentId ( commentId: string): Promise<Comment|null> {
    const result = <Comment[]> await sql `SELECT comment_id, comment_post_id, comment_profile_id, comment_text, comment_date FROM comment WHERE comment_id = ${commentId}`
    return result?.length === 1 ? result [0] : null
}

export async function selectCommentByCommentProfileId (commentId: string): Promise<Comment|null> {
    const result = <Comment[]> await sql `SELECT comment_id, comment_post_id, comment_profile_id, comment_text, comment_date FROM comment WHERE comment_profile_id = ${commentId}`
    return result?.length === 1 ? result [0] : null
}

export async function selectCommentsByCommentPostId (commentPostId: string): Promise<Comment[]> {
    return <Comment[]> await sql `SELECT comment_id, comment_post_id, comment_profile_id, comment_date, comment_text FROM "comment" WHERE comment_post_id = ${commentPostId}` }