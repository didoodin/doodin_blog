import Body from "../common/Body";
import DetailHeader from "./DetailHeader";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Datail() {
  useEffect(() => {
      fetch(process.env.LOCAL_API_URL)
  })

  const router = useRouter();
  
    return (
      <Body>
        <div className="px-6">
          <main className="pb-10">
            <article className="relative">
              <DetailHeader />
              <div className="prose prose-base prose-cyan w-full max-w-full prose-a:!text-cyan-500 prose-a:underline-offset-[3px] md:prose-lg nuxt-content">
              <p className="text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="bg-gray-700 bg-opacity-40 w-full h-px my-4 mt-20 mb-10"></div>
              <div className="mb-14">
                <p className="text-lg font-semibold">최근 글</p>{" "}
                <div className="mt-10">
                  <div className="text-sm font-semibold text-gray-400 mb-2">
                    <time>2023년 03월 26일</time>
                  </div>
                  <h3>
                    <a
                      href="/how-to-pick-web-font-and-size"
                      className="block text-lg font-semibold hover:underline"
                    >
                      Lorem ipsum
                    </a>
                  </h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
              <div className="giscus mt-10"></div>
            </article>
          </main>
        </div>
      </Body>
    );
}