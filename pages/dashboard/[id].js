import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            Blog: {id}
        </div>
    );
};

export default Post;