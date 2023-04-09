import Category from "../../pages/sub/category";

export default function Body({ children }) {
  return (
    <div className="min-h-screen my-5">
      <div className="container mx-auto">
        <div className="px-6">
          <div className="pb-20 md:grid md:grid-cols-6 md:gap-10 flex-row-reverse">
            <div className="col-span-4 lg:col-span-5 mt-6 sm:mt-0 bg-white rounded-xl p-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
