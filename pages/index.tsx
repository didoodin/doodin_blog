import Category from "./sub/category";
import Post from "./sub/post";

export default function Home() {

  return (
    <div className="min-h-screen my-5">
      <div className="container mx-auto">
        <div className="px-6">
          <div className="pb-20 md:grid md:grid-cols-6 md:gap-10 flex-row-reverse">
            <Post></Post>
            <div className="col-span-2 lg:col-span-1 mt-16 md:mt-0 md:sticky md:top-10 md:self-start space-y-10 md:space-y-6">
              <Category></Category>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
