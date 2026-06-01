import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-12">Terms of Service</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on SuperSEOToolkit&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on SuperSEOToolkit&apos;s website are provided on an &apos;as is&apos; basis. SuperSEOToolkit makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall SuperSEOToolkit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SuperSEOToolkit&apos;s website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
                <p className="text-muted-foreground">
                  The materials appearing on SuperSEOToolkit&apos;s website could include technical, typographical, or photographic errors. SuperSEOToolkit does not warrant that any of the materials on its website are accurate, complete, or current. SuperSEOToolkit may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Links</h2>
                <p className="text-muted-foreground">
                  SuperSEOToolkit has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SuperSEOToolkit of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-muted-foreground">
                  SuperSEOToolkit may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
