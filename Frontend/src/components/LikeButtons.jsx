import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig.js'

const LikeButtons = ({size, id}) => {
    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(false);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(false);

    // Function for like/dislike button
    async function like()
    {
        console.log('like');
        setIsClickedThumbsDown(false);
        setIsClickedThumbsUp(true);
        await axiosInstance.post("api/add-like", {
            MovieID: id,
            Liked: 1,
        })
    }

    useEffect(() => {
        getLike();
    }, [id])
    

    async function dislike()
    {
        console.log('dislike');
        setIsClickedThumbsDown(true);
        setIsClickedThumbsUp(false);
        await axiosInstance.post("api/add-like", {
            MovieID: id,
            Liked: 0,
        });
    }

    async function removeLike()
    {
        console.log('removelike');
        setIsClickedThumbsDown(false);
        setIsClickedThumbsUp(false);
        await axiosInstance.post("api/remove-like", {
            MovieID: id,
        });
    }

    async function getLike()
    {
        console.log("GETTING LIKES... ", id);
        if(!id)
        {
            console.log("ID NOT FOUND");
            return;
        }

        const response = await axiosInstance.post("api/get-like",
            {
                MovieID: id,
            }
        );

        if(response.data === 1)
        {
            setIsClickedThumbsDown(false);
            setIsClickedThumbsUp(true);
        }
        else if(response.data === 0)
        {
            setIsClickedThumbsDown(true);
            setIsClickedThumbsUp(false);
        }
        else
        {
            setIsClickedThumbsDown(false);
            setIsClickedThumbsUp(false);
        }
    }


    return (
        <div id='LikeButtons' className='d-flex mb-3' style={{columnGap:"10px"}}>
            {isClickedThumbsUp ? (
                <HandThumbsUpFill onClick={removeLike} width={size} height={size} style={{cursor:"pointer"}}/>
                ) : (
                <HandThumbsUp onClick={like} width={size} height={size} style={{cursor:"pointer"}}/>
                )}
            {isClickedThumbsDown ? (
                <HandThumbsDownFill onClick={removeLike} width={size} height={size} style={{cursor:"pointer"}}/>
                ) : (
                <HandThumbsDown onClick={dislike} width={size} height={size} style={{cursor:"pointer"}}/>
                )}
        </div>
    );
};

export default LikeButtons;