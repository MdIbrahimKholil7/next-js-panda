import { useRouter } from 'next/router';
import React from 'react';

const SingleBlog = (props) => {
    console.log(props)
    const router = useRouter()
    const { blog } = router.query
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div>
            <div className='text-center mb-20 cursor-pointer mt-20'
                dangerouslySetInnerHTML={createMarkup(props?.result?.data?.content)}></div>
        </div>
    );
};

export async function getServerSideProps(context) {

    const fetchData = await fetch(`http://localhost:3000/api/singleBlog?title=${context.query.blog}`)
    const result = await fetchData.json()

    return {
        props: { result }, // will be passed to the page component as props
    }
}

export default SingleBlog;



