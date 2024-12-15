import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About KitchenWhiz</h3>
          <p>
            Your ultimate kitchen companion. Discover recipes, plan meals, and
            make cooking effortless. Join us in creating culinary magic!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:underline hover:text-gray-200 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/recipes"
                className="hover:underline hover:text-gray-200 transition"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="/meal-planner"
                className="hover:underline hover:text-gray-200 transition"
              >
                Meal Planner
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline hover:text-gray-200 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-gray-200 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="mb-4">
            Get the latest recipes, meal tips, and exclusive offers delivered to
            your inbox.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-red-500 pt-4 text-center">
        <p>&copy; 2024 KitchenWhiz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
