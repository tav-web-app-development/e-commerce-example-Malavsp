export default function newarrivalsnavbar() {
  return (
    <nav>
      <div className="flex m-4">
        <a
          href="/newarrivals/clothing"
          className="bg-gray-200 p-2 mr-4 rounded	"
        >
          Clothes
        </a>
        <a href="/newarrivals/toys" className="bg-gray-200 p-2 mr-4 rounded">
          Toys
        </a>
      </div>
    </nav>
  );
}
