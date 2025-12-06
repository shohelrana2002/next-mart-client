import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-black py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">NextMart</h2>
            <p className="text-black">
              Your trusted online shop for daily essentials, electronics & more.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">
              Quick Links
            </h2>
            <ul className="space-y-2 text-black">
              <li>
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-black">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-black">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p className="text-black">Email: support@nextmart.com</p>
            <p className="text-black">Phone: +880 1234 567890</p>
            <p className="text-black">Location: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-black">
          <p>© {new Date().getFullYear()} NextMart. All rights reserved.</p>
          <p className="mt-1">
            Developed by{" "}
            <span className="text-blue-400 font-semibold">Md. Shohel Rana</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
