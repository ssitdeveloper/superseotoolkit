"use client";

import { useState } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 lg:pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We&apos;d love to hear from you. Send us a message.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-10">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@superseotoolkit.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Tech Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-10 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-base">
              <h2 className="text-3xl font-bold mb-7">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Quick FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 className="font-bold mb-2">What&apos;s the response time?</h3>
                <p className="text-muted-foreground text-sm">
                  We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>
              <div className="card-base">
                <h3 className="font-bold mb-2">Do you offer support?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide 24/7 support via email and live chat.
                </p>
              </div>
              <div className="card-base">
                <h3 className="font-bold mb-2">Can I schedule a demo?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! Contact our sales team for a personalized demo.
                </p>
              </div>
              <div className="card-base">
                <h3 className="font-bold mb-2">Do you have an API?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, API access is available for enterprise customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
