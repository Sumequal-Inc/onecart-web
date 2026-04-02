import { Input } from '@/components/ui/inputs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/inputs/textarea';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <section className="py-28 relative">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Contact Form */}
          <div className="contact-wrapper border p-10 relative z-30 bg-white border-gray-100 dark:bg-dark-primary dark:border-gray-800">
            <div className="text-center mb-10">
              <h3 className="text-gray-800 font-bold dark:text-white text-3xl mb-2">
                Need any Help? Get in touch 👋
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Open a ticket, we will get back to you ASAP
              </p>
            </div>

            <form>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input type="text" placeholder="First name" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input type="text" placeholder="Last name" />
                </div>
                <div className="col-span-full">
                  <Label>Email address</Label>
                  <Input type="text" placeholder="example@gmail.com" />
                </div>
                <div className="col-span-full">
                  <Label>Message</Label>
                  <Textarea rows={6} placeholder="Type your message" />
                </div>
                <div className="col-span-full">
                  <button className="bg-primary-500 hover:bg-primary-600 transition h-12 py-3 px-6 w-full font-medium text-white text-sm rounded-full">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-900 text-white p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+919716817447" className="hover:text-white">
                  +91 9716817447
                </a>
              </p>

              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@onecartfinance.com" className="hover:text-white">
                  info@onecartfinance.com
                </a>
              </p>

              <p>
                <strong>Address:</strong><br />
                <a
                  href="https://maps.google.com/?q=H 141, H-BLOCK, NOIDA 63, 201301"
                  target="_blank"
                  className="hover:text-white"
                >
                  H 141, H- Block, Sector 63 Road, Sector-63 Noida Uttar Pradesh India 201301
                </a>
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                src="https://maps.google.com/maps?q=H%20141%20H-Block%20Noida%2063&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}