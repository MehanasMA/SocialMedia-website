import React, { useEffect } from 'react';
import './Posts.scss';
import { useDispatch,useSelector } from 'react-redux';
import Post from '../Post/Post';
import {useParams} from 'react-router-dom'
import { getTimeLinePosts } from '../../redux/actions/PostAction';
const Posts = () => {

	const dispatch=useDispatch()
	const {user}=useSelector((state)=>state.authReducer.authData)
	let {posts,loading}=useSelector((state)=>state.postReducer)
    const params=useParams()

	useEffect(()=>{
		dispatch(getTimeLinePosts(user._id))
	},[])

	if(!posts) return "No Posts"
	if(params.id) posts=posts.filter((post)=>post.userId===params.id)

	return (
		<div className="Posts">
			{loading? "Fetching posts..." : posts.map((post, id) => {
				return <Post data={post} id={id} />; 
			  })}
		</div>
	);
};

export default Posts;
