import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SectionHeader } from "@/components/common/section-header";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 lg:pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SuperSEOToolkit</h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re on a mission to democratize SEO, making professional-grade tools
              accessible to everyone.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-16 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We believe that powerful SEO tools shouldn&apos;t require expensive subscriptions
                  or technical expertise. SuperSEOToolkit was built to make professional SEO
                  accessible to everyone—from freelancers to Fortune 500 companies.
                </p>
                <p className="text-lg text-muted-foreground">
                  Since our founding, we&apos;ve helped over 50,000 digital marketers improve
                  their rankings and drive more organic traffic.
                </p>
              </div>
              <div className="text-6xl text-center">🎯</div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Values"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 lg:mt-14">
              <div className="card-base text-center">
                <div className="text-5xl mb-4">💯</div>
                <h3 className="font-bold mb-2">Accuracy</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise-grade analysis powered by the latest algorithms
                </p>
              </div>
              <div className="card-base text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Constantly improving and adding new features
                </p>
              </div>
              <div className="card-base text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="font-bold mb-2">Accessibility</h3>
                <p className="text-muted-foreground text-sm">
                  Free tools for everyone, no hidden costs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-16 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Meet the Team"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 lg:mt-14">
              {[
                { name: "Alex Johnson", role: "Founder & CEO", icon: "👨‍💼" },
                { name: "Sarah Chen", role: "CTO", icon: "👩‍💻" },
                { name: "Mike Davis", role: "Product Lead", icon: "🧠" },
              ].map((member) => (
                <div key={member.name} className="card-base text-center">
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="max-w-4xl mx-auto text-center card-base">
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals using SuperSEOToolkit
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Start Analyzing
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
