export default function Header() {
    return (
      <header className="text-gray-700 border-t border-b body-font bg-white">
        <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
          <a
            href="#"
            className="flex items-center w-40 mb-4 text-2xl font-semibold text-blogColor title-font md:mb-0"
          >
            DOODIN
          </a>
          <div className="flex ml-auto">
            <a
              href="#"
              className="mr-5 text-sm font-semibold text-gray-600 lg:ml-24 hover:text-gray-800"
            >
              Resume
            </a>
            <a
              href="#"
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>
    );
}