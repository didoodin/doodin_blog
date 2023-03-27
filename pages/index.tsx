import Link from 'next/link';
import Card from '../components/main/Card';
import Category from "../components/common/Category";
import { posts } from '../lib/notion'
import { useRouter } from "next/router";
import { useEffect } from 'react';

// 서버 측에서 노션 게시물을 가져옴
export async function getServerSideProps() {
  let { results } = await posts();

  return {
    props : {
      posts : results
    }
  }
}

// 소품에 대한 인터페이스 정의 -> 게시물의 구조를 만들고 posts 게시물 배열을 보유
interface Props {
    posts: [any]
}

const Home = ( props: any ) => {
  const router = useRouter();
  console.log(props.posts[0].properties.title.rich_text[0].plain_text);

  const notionPosts = ({ id } : { id : number }) => {
    router.push(`/posts/${id}`)
  };

  useEffect(() => {
    if (props) {
      console.log(props)
    }
  }, [props])

  return (
    <div className="min-h-screen my-5">
      <div className="container mx-auto">
        <div className="px-6">
          <div className="pb-20 md:grid md:grid-cols-6 md:gap-10 flex-row-reverse">
            <div className="col-span-4 lg:col-span-5 mt-6 sm:mt-0 bg-white rounded-xl p-3">
              
              {props.posts.map((res, i) => {
                <Card>
                  <Link href={"/sub/detail"} key={i}>
                    <div className="flex gap-2">
                      <div className="">
                        <div className="mt-1 mb-1">
                          <p className="w-14 py-1 rounded-full text-center text-xs font-semibold bg-blogColor text-white">
                            DEV
                          </p>
                        </div>
                        <div className="mt-2 mb-1">
                          <span className="text-gray-600 font-bold text-lg">
                          {res.posts[i].properties.title.rich_text[i].plain_text}
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
                            2023년 03월 25일
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>;
              })}

            </div>
            <div className="col-span-2 lg:col-span-1 mt-16 md:mt-0 md:sticky md:top-10 md:self-start space-y-10 md:space-y-6">
              <Category />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;