import { useRouter } from 'next/router';
import React from 'react';

const SingleBlog = (props) => {
    console.log(props)
    const router = useRouter()
    const { blog } = router.query
    // console.log(blog)
    return (
        <div>
            <div
                className='text-center mb-20 cursor-pointer mt-20'
            >
                <h4 className='text-3xl font-bold pb-5'>{props?.result?.data?.title}</h4>
                <p className='text-left px-60'>{props?.result?.data?.content?.substr(0, 250)}</p>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {

    // console.log('from blog',context.query.blog)
    const fetchData = await fetch(`http://localhost:3000/api/singleBlog?title=${context.query.blog}`)
    const result = await fetchData.json()
    console.log(result)
    return {
        props: { result }, // will be passed to the page component as props
    }
}

export default SingleBlog;



