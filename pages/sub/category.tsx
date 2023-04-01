/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { supabase } from "../../lib/supabase";
import Category from "../../components/common/Category";

export default function getCategory() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="px-4 py-2">
      <h2 className="text-white mb-3 text-xs">Category</h2>
      {categories.map((category) => (
        <Category
          category_id={category.category_id}
          category_nm={category.category_nm}
          category_url={category.category_url}
          key={category.category_id}
        ></Category>
      ))}
    </div>
  );
};