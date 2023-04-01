import Link from "next/link";
import { useEffect, useState } from "react";


const Category = ({ category_id, category_nm, category_url }) => {
  return (
    <Link href="{category_url}" className="flex gap-3 py-3 text-white">
      {category_nm}
    </Link>
  )
}

export default Category