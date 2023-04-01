/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { supabase } from "../../lib/supabase";
import Post from "../../components/main/post";

export default function getPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        supabase
            .from('post')
            .select()
            .then((result) => {
                console.log(result);

                if (result.error) console.log(result.error);

                setPosts(result.data);
            });
    }, []);

    return (
        <div className="col-span-4 lg:col-span-5 mt-6 sm:mt-0 bg-white rounded-xl p-3">
            {posts &&
                posts.map((post) => (
                    <Post
                        post_id={post.post_id}
                        category_id={post.category_id}
                        title={post.title}
                        content={post.content}
                        reg_dt={post.reg_dt}
                        key={post.post_id}
                    ></Post>
                ))}
        </div>
    );
};