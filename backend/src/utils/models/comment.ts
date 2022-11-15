import { sql } from '../database.utils'

export interface Comment {
    commentId: string | null
    commentPostId: string | null
    commentProfileId: string | null
    commentText: string
    commentDate: Date | null
}

export async function insertComment(Comment: {comment: Comment}): Promise<string> {
    const {commentProfileId, commentText} = Comment
    await sql `INSERT INTO comment (comment_id, comment_post_id, comment_profile_id, comment_text, comment_date) VALUES(gen_random_uuid(), ${commentProfileId}, ${commentText}, NOW())`
    return 'Comment created successfully'
}

export async function selectAllComments(): Promise<Comment[]> {
    return sql <Comment[]> `SELECT comment_id, comment_post_id, comment_profile_id, comment_text, comment_date FROM comment ORDER BY comment_date DESC`

}

export async function selectCommentByCommentId ( commentId: string): Promise<Comment|null> {
    const result = <Comment[]> await sql `SELECT comment_id, comment_post_id, comment_profile_id, comment_text, comment_date FROM post WHERE comment_id = ${commentId}`
    return result?.length === 1 ? result [0] : null
}

export async function selectCommentByCommentProfileId (commentId: string): Promise<Comment|null> {
    const result = <Comment[]> await sql `SELECT comment_id, comment_post_id, comment_profile_id, comment_text, comment_date FROM post WHERE comment_profile_id = ${commentId}`
    return result?.length === 1 ? result [0] : null
}