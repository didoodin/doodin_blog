import Link from "next/link";

const Category = ({ category_nm, category_url }) => {
  return (
    <Link href="/blog/{category_url}" className="flex gap-3 py-3 text-white">
      {category_nm}
    </Link>
  )
}

export default Category