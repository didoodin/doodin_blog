import Link from 'next/link';
import Card from './Card';

const Post = ({ categoryId, title, subTitle, content, regDt }) => {
  let filterContent = content.substr(0, 165) + "...";
  let date = formatDate(regDt);

  return (
    <Card>
      <Link href={`/blog/${subTitle}`}>
        <div className="flex gap-2">
          <div className="w-full">
            <div className="mt-1 mb-1">
              <p className="w-14 py-1 rounded-full text-center text-xs font-semibold bg-blogColor text-white">
                {categoryId}
              </p>
            </div>
            <div className="mt-3 mb-2">
              <span className="text-gray-600 font-bold text-lg">{title}</span>
            </div>
            <div className="mt-1 mb-1">
              <span className="text-gray-600 tracking-tight leading-3">
                {filterContent}
              </span>
            </div>
            <div className="mt-2 mb-1">
              <p className="text-xs text-dateColor">{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export const formatDate = (date) => {
    let moment = require('moment');
    const formatDate = moment(date).format('YYYY년 MM월 DD일')
    return formatDate;
}

export default Post;
