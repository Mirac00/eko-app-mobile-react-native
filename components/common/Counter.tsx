import React, { useState } from "react";
import { updatePost } from '../../services/postsService';
import { updateComment } from '../../services/commentsService';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface IProps {
    post?: Post;
    comment?: Comment;
}

interface IState {
    likes: number;
    dislikes: number;
    userVote: 'like' | 'dislike' | null;
}

const Counter: React.FC<IProps> = ({ post, comment }) => {
    const [state, setState] = useState<IState>({
        likes: post?.likes || comment?.likes || 0,
        dislikes: post?.dislikes || comment?.dislikes || 0,
        userVote: null
    });

    const incr = async (): Promise<void> => {
        let newLikes = state.likes;
        let newDislikes = state.dislikes;
        if (state.userVote === 'dislike') {
            newLikes++;
            newDislikes--;
        } else if (state.userVote === null) {
            newLikes++;
        }
        setState({
            likes: newLikes,
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

    const dincr = async (): Promise<void> => {
        let newLikes = state.likes;
        let newDislikes = state.dislikes;
        if (state.userVote === 'like') {
            newLikes--;
            newDislikes++;
        } else if (state.userVote === null) {
            newDislikes++;
        }
        setState({
            likes: newLikes,
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

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={incr} style={[styles.button, styles.likeButton]}>
                <Text style={styles.buttonText}>{state.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={dincr} style={[styles.button, styles.dislikeButton]}>
                <Text style={styles.buttonText}>{state.dislikes}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        margin: 9,
        width: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    likeButton: {
        backgroundColor: '#007bff', // Niebieski
    },
    dislikeButton: {
        backgroundColor: '#dc3545', // Czerwony
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Counter;
