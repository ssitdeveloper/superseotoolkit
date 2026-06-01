import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  SuperSEOToolkit (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website and mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
                <p className="text-muted-foreground mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="text-xl font-semibold mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal Data (name, email address, phone number)</li>
                  <li>Usage Data (pages visited, time spent, links clicked)</li>
                  <li>Device Information (browser type, IP address, operating system)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Use of Data</h2>
                <p className="text-muted-foreground">
                  SuperSEOToolkit uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Security of Data</h2>
                <p className="text-muted-foreground">
                  The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;effective date&quot; at the top of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@superseotoolkit.com
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Last updated: June 2024
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
