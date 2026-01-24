import { Target, Eye, Heart, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-global.jpg";
import chairmanPhoto from "@/assets/chairman-photo.jpg";
const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="section-container">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            Building bridges between businesses and markets across continents
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-4">
              AHMED Karrar Trading is a dynamic international trading company specializing in import, export, and general trading services. We connect businesses across borders, focusing on high-quality products, reliable supply chains, and strong partnerships.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              With extensive experience in the African, Middle Eastern, and Asian markets, we have built a reputation for excellence, reliability, and integrity in all our business dealings.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to quality and customer satisfaction has made us a trusted partner for businesses looking to expand their global reach.
            </p>
          </div>
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Global trading network" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elegant text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To facilitate seamless international trade by connecting quality suppliers with reliable buyers, ensuring mutual growth and sustainable business relationships.
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading trading partner in Africa, the Middle East, and Asia, recognized for our integrity, efficiency, and commitment to excellence.
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, transparency, customer focus, quality excellence, and building long-term partnerships based on mutual trust and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving our success
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center max-w-sm">
            <div className="mb-6">
              <img 
                src={chairmanPhoto} 
                alt="Ahmed Hassan - Chairman of the Board" 
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-primary/20"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ahmed Hassan</h3>
            <p className="text-primary font-semibold mb-3">Chairman of the Board</p>
            <p className="text-muted-foreground">
              Leading AHMED Karrar Trading with a vision for excellence and a commitment to building lasting business relationships across continents.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We bring experience, reliability, and a commitment to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Extensive Market Knowledge",
              description: "Deep understanding of African, Middle Eastern, and Asian markets with local expertise."
            },
            {
              title: "Quality Assurance",
              description: "Rigorous quality control processes to ensure product standards meet international requirements."
            },
            {
              title: "Competitive Pricing",
              description: "Strong supplier relationships enable us to offer competitive rates without compromising quality."
            },
            {
              title: "Reliable Logistics",
              description: "Efficient supply chain management ensuring timely delivery and transparent tracking."
            },
            {
              title: "Personalized Service",
              description: "Dedicated account managers who understand your business needs and provide tailored solutions."
            },
            {
              title: "Global Network",
              description: "Established connections with trusted suppliers and logistics partners worldwide."
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <Award className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
