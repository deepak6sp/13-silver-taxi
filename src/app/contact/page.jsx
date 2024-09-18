import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Example() {

  return (
    <>
      <Navbar />
      <section className="bg-white py-24" id="booking-services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">If you have any query feel free to contact us at our given details provided.</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone : 0422 xxx xxx</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email : 13silvertaxi@gmail.com</p>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
