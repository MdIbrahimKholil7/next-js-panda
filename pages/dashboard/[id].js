import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className='text-center font-bold text-7xl'>
            <style jsx global>
                {
                    `
                    .para{
                        background:red;
                        padding:20px;
                        margin:50px;
                    }
                    `
                }
            </style>

            <button className='btn btn-primary'>Button</button>
            <p className='para text-2xl'> Blog: {id}</p>


        </div>
    );
};

export default Post;