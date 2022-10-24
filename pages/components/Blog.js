import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/api/blog')
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])

    return (
        <div className='my-40'>
            <div>
                {
                    blogs?.map((blog, index) => <Link
                        key={index}
                        href={`/components/single-blog/${blog?.fileName}`}
                    >
                        <div
                            className='text-center mb-20 cursor-pointer'
                        >
                            <h4 className='text-3xl font-bold pb-5'>{blog?.title}</h4>
                            <p className='text-left px-60'>{blog?.content.substr(0, 250)}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Blog;