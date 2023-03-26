export default function Card({children}) {
  return (
    <div className="bg-white shadow-md shadow-gray-300 rounded-md gap-6 p-4 my-5 mx-2">
      {children}
    </div>
  );
}