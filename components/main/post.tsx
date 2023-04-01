import Link from "next/link";
import Card from "../../components/main/Card";

const Post = ({ post_id, category_id, title, content, reg_dt }) => {
    return (
        <Card>
            <Link href={"/sub/detail"}>
                <div className="flex gap-2">
                    <div className="">
                        <div className="mt-1 mb-1">
                            <p className="w-14 py-1 rounded-full text-center text-xs font-semibold bg-blogColor text-white">
                                {category_id}
                            </p>
                        </div>
                        <div className="mt-2 mb-1">
                            <span className="text-gray-600 font-bold text-lg">
                                {title}
                            </span>
                        </div>
                        <div className="mt-1 mb-1">
                            <span className="text-gray-600 tracking-tight leading-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt...
                            </span>
                        </div>
                        <div className="mt-2 mb-1">
                            <p className="text-xs text-dateColor">
                                {reg_dt}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </Card>
    )
}

export default Post;