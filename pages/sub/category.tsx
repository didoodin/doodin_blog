import { useEffect, useState } from 'react';
import { supabase } from "../../lib/supabase";

const Category = (props: any) => {

  // rendering check 1
  useEffect(() => {
    console.log('handler success')
  }, [])
  
  // rendering check 2
  if (props) 

  return (
    <div className="px-4 py-2">
      <h2 className="text-white mb-3 text-xs">Category</h2>
      {props.categories && props.categories.map((res, i) => {
        return (
          <a href="" className="flex gap-3 py-3 text-white" key={i}>
            {res.category_nm}
          </a>
        );
      })}
    </div>
  );
};

export default Category;
