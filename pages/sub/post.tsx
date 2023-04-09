/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Post from "../../components/main/Post";

export default function getPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    supabase
      .from("post")
      .select()
      .then((result) => {
        console.log(result);

        if (result.error) console.log(result.error);

        setPosts(result.data);
      });
  }, []);

  return (
    <div className="min-h-screen my-5">
      <div className="container mx-auto">
        <div className="px-6">
          <div className="pb-20 md:grid md:grid-cols-6 md:gap-10 flex-row-reverse">
            <div className="col-span-4 lg:col-span-5 mt-6 sm:mt-0 bg-white rounded-xl p-3">
              {posts.slice(0, 10).map((post) => (
                <Post
                  categoryId={post.category_id}
                  title={post.title}
                  subTitle={post.sub_title}
                  content={post.content}
                  regDt={post.reg_dt}
                  key={post.post_id}
                ></Post>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
