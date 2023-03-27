import Link from 'next/link';

export default function Header() {
    return (
      <div className="w-full">
      <header className="text-gray-700 body-font">
        <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
          <Link href={"/"}>
            <div className="flex items-center w-40 mb-4 text-2xl font-semibold text-white title-font md:mb-0">
              D O O D I N
            </div>
          </Link>
          <div className="flex ml-auto">
            <Link href={"/sub/resume"}>
              <div className="mr-5 text-sm text-white lg:ml-24 hover:text-gray-800">
                Resume
              </div>
            </Link>
            <Link href={"https://github.com/didoodin"}>
              <div className="mr-5 text-sm text-white hover:text-gray-800">
                GitHub
              </div>
            </Link>
          </div>
        </div>
      </header>
      </div>
    );
}