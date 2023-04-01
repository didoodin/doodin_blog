import Link from "next/link";
import Card from "./Card";

const Post = ({ category_id, title, subTitle, content, reg_dt }) => {
  let filter = content.substr(0, 165) + "...";

  return (
    <Card>
      <Link href={`/blog/${subTitle}`}>
        <div className="flex gap-2">
          <div className="w-full">
            <div className="mt-1 mb-1">
              <p className="w-14 py-1 rounded-full text-center text-xs font-semibold bg-blogColor text-white">
                {category_id}
              </p>
            </div>
            <div className="mt-2 mb-1">
              <span className="text-gray-600 font-bold text-lg">{title}</span>
            </div>
            <div className="mt-1 mb-1">
              <span className="text-gray-600 tracking-tight leading-3">
                {filter}
              </span>
            </div>
            <div className="mt-2 mb-1">
              <p className="text-xs text-dateColor">{reg_dt}</p>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default Post;
