import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import Comment from './Comment';

const CommentsList = (props) => {
  const { comments } = props;

  console.log(comments);

  if (!comments.length) {
    return null;
  }

  const commentsList = comments.map((comment, index) => {
    return <Comment key={index} {...comment}/>
  });
/*
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments/')
    .then(response => {
     comments = response.data
    });
  }, []);
*/
  return (
    <>
      <h1>Комментарии</h1>
      {commentsList}
    </>
  );
}

const mapStateToProps = (state) => {
  return { 
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentsList);