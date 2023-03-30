import Link from "next/link";
import { useEffect, useState } from "react";

export default function Category({res}) {
    const category = useState([res]);

    console.log("components :: category " + category);

  return (
    <Link href="" className="flex gap-3 py-3 text-white" key={res}>
        {res}
    </Link>
  );
}
