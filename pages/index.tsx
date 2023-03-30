import Link from "next/link";
import Card from "../components/main/Card";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    supabase
      .from('category')
      .select()
      .then((result) => {
        console.log(result);

        if (result.error) console.log(result.error);

        setCategories(result.data);
      });
  }, []);

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
    <div className="min-h-screen my-5">
      <div className="container mx-auto">
        <div className="px-6">
          <div className="pb-20 md:grid md:grid-cols-6 md:gap-10 flex-row-reverse">
            <div className="col-span-4 lg:col-span-5 mt-6 sm:mt-0 bg-white rounded-xl p-3">
              {posts &&
                posts.map((post) => (
                  <Card key={post.post_id}>
                    <Link href={"/sub/detail"}>
                      <div className="flex gap-2">
                        <div className="">
                          <div className="mt-1 mb-1">
                            <p className="w-14 py-1 rounded-full text-center text-xs font-semibold bg-blogColor text-white">
                              {post.category_id}
                            </p>
                          </div>
                          <div className="mt-2 mb-1">
                            <span className="text-gray-600 font-bold text-lg">
                              {post.title}
                            </span>
                          </div>
                          <div className="mt-1 mb-1">
                            <span className="text-gray-600 tracking-tight leading-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt...
                            </span>
                          </div>
                          <div className="mt-2 mb-1">
                            <p className="text-xs text-dateColor">
                              {post.reg_dt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
            </div>
            <div className="col-span-2 lg:col-span-1 mt-16 md:mt-0 md:sticky md:top-10 md:self-start space-y-10 md:space-y-6">
              {/* category   */}
              <div className="px-4 py-2">
                <h2 className="text-white mb-3 text-xs">Category</h2>
                {categories &&
                  categories.map((category, i) => (
                    <Link
                      href=""
                      className="flex gap-3 py-3 text-white"
                      key={i}
                    >
                      {category.category_nm}
                    </Link>
                  ))}
              </div>
              {/* category   */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   let { data } = await supabase.from("category").select();

//   return {
//     props: {
//       categories: data,
//     },
//   };
// }
