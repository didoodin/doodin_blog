import Card from "./Card";
import Link from 'next/link';
import { posts } from '../../lib/notion';

export default function List() {
    return (
      <Card>
        <Link href={'/sub/detail'}>
        <div className="flex gap-2">
          <div className="">
            <div className="mt-1 mb-1">
              <p className="w-14 py-1 rounded-full text-center text-xs font-semibold bg-blogColor text-white">
                DEV
              </p>
            </div>
            <div className="mt-2 mb-1">
              <span className="text-gray-600 font-bold text-lg">Lorem</span>
            </div>
            <div className="mt-1 mb-1">
              <span className="text-gray-600 tracking-tight leading-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </span>
            </div>
            <div className="mt-2 mb-1">
              <p className="text-xs text-dateColor">2023년 03월 25일</p>
            </div>
          </div>
        </div>
        </Link>
      </Card>
    );
}