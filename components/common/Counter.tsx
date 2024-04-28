import React, { useState } from "react";
import { updatePost } from '../../services/postsService';
import { updateComment } from '../../services/commentsService';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
import { View, Text, TouchableOpacity } from 'react-native';

interface IProps{
    post?: Post;
    comment?: Comment;
}
interface IState{
    likes : number;
    dislikes: number;
    userVote: 'like' | 'dislike' | null; 
}

let Counter: React.FC<IProps> = ({ post, comment }) => {

    let [state , setState] = useState<IState>({
        likes : post?.likes || comment?.likes || 0,
        dislikes: post?.dislikes || comment?.dislikes || 0,
        userVote: null
    });

    let incr = async (): Promise<void> => {
        let newLikes = state.likes;
        let newDislikes = state.dislikes;
        if (state.userVote === 'dislike') {
            newLikes++;
            newDislikes--;
        } else if (state.userVote === null) {
            newLikes++;
        }
        setState({
            likes : newLikes,
            dislikes: newDislikes,
            userVote: 'like'
        });
        if (post) {
            let updatedPost = { ...post, likes: newLikes, dislikes: newDislikes };
            await updatePost(updatedPost);
            console.log('Updated post:', updatedPost);
        } else if (comment) {
            let updatedComment = { ...comment, likes: newLikes, dislikes: newDislikes };
            await updateComment(comment.id, updatedComment);
            console.log('Updated comment:', updatedComment);
        }
    };

    let dincr = async (): Promise<void> => {
        let newLikes = state.likes;
        let newDislikes = state.dislikes;
        if (state.userVote === 'like') {
            newLikes--;
            newDislikes++;
        } else if (state.userVote === null) {
            newDislikes++;
        }
        setState({
            likes : newLikes,
            dislikes: newDislikes,
            userVote: 'dislike'
        });
        if (post) {
            let updatedPost = { ...post, likes: newLikes, dislikes: newDislikes };
            await updatePost(updatedPost);
            console.log('Updated post:', updatedPost);
        } else if (comment) {
            let updatedComment = { ...comment, likes: newLikes, dislikes: newDislikes };
            await updateComment(comment.id, updatedComment);
            console.log('Updated comment:', updatedComment);
        }
    };

    return(
        <View>
            <TouchableOpacity onPress={incr}>
                <Text>{state.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={dincr}>
                <Text>{state.dislikes}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Counter;
