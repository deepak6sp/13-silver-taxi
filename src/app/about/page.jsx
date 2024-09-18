import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Example() {

  return (
    <>
      <Navbar />
      <section className="bg-white py-24" id="booking-services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-slate-500">About us</h2>
          <p className="mb-3 text-slate-500 dark:text-gray-400">13 Silver Taxi is a well known Melbourne taxi service provider offering reliable and comfortable taxi services across Victoria. We specialize in Melbourne Airport Taxi, Corporate Tours, Local Taxi Service, Event Transfers, Tours with family/friends. We make sure that all our customers enjoy the first-class service without overpaying. Our team consists of reliable & well-trained drivers who are more than happy to assist you in your journey. Book your Airport Transfers with the most preferred & trusted Cabs in Melbourne as we assist you with hassle-free door to door pick-up & drop-off service.</p>
        <p className="mb-3 text-slate-500 dark:text-gray-400">13 silver Taxi provides you the most luxurious, comfortable, and prestigious rides for your Business or VIP travels. Either go to attend your urgent business meetings or to reach the airport to travel for a business meeting, our taxi service is in the wait for your call or message</p>
        <p className="text-slate-500 dark:text-gray-400">Order your Cabs for <strong>Melbourne Airport</strong> online or just Call Us on <strong>04xx xxx xxx</strong>, we are always eager to serve you.</p>
        </div>
      </section>
      <Footer />

    </>
  )
}
