import Link from "next/link";

const Category = ({ categoryId, categoryNm }) => {
  return (
    <Link
      href={`/blog/category/${categoryId}`}
      className="flex gap-3 py-3 text-white"
    >
      {categoryNm}
    </Link>
  );
};

export default Category;
