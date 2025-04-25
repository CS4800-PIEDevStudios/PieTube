import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill } from 'react-bootstrap-icons';
import React, { useState } from 'react';

const LikeButtons = ({size}) => {
    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(true);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(true);

    // Function for like/dislike button
    function toggleIsClickedThumbsUp () {
        if (!isClickedThumbsDown) {
            setIsClickedThumbsDown(true)
        }
        setIsClickedThumbsUp(!isClickedThumbsUp);
    }
    function toggleIsClickedThumbsDown () {
        if (!isClickedThumbsUp) {
            setIsClickedThumbsUp(true)
        }
        setIsClickedThumbsDown(!isClickedThumbsDown);
    }

    return (
        <div id='LikeButtons' className='d-flex mb-3' style={{columnGap:"10px"}}>
            {isClickedThumbsUp ? (
                <HandThumbsUp onClick={toggleIsClickedThumbsUp} width={size} height={size} style={{cursor:"pointer"}}/>
                ) : (
                <HandThumbsUpFill onClick={toggleIsClickedThumbsUp} width={size} height={size} style={{cursor:"pointer"}}/>
                )}
            {isClickedThumbsDown ? (
                <HandThumbsDown onClick={toggleIsClickedThumbsDown} width={size} height={size} style={{cursor:"pointer"}}/>
                ) : (
                <HandThumbsDownFill onClick={toggleIsClickedThumbsDown} width={size} height={size} style={{cursor:"pointer"}}/>
                )}
        </div>
    );
};

export default LikeButtons;