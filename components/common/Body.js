import Category from "./Category";

export default function Body({children}) {
    return (
        <div className="min-h-screen my-5">
        <div className="container mx-auto">
          <div className="px-6">
            <div className="pb-20 md:grid md:grid-cols-6 md:gap-10 flex-row-reverse">
              <div className="col-span-4 lg:col-span-5 mt-6 sm:mt-0 bg-white rounded-xl p-3">
              {children}
              </div>
              <div className="col-span-2 lg:col-span-1 mt-16 md:mt-0 md:sticky md:top-10 md:self-start space-y-10 md:space-y-6">
                <Category />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}