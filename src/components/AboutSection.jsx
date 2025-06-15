import { Briefcase, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer | Building Scalable Systems & Cloud Platforms
            </h3>

            <p className="text-muted-foreground">
              I engineer scalable, reliable, and high-performance systems by
              combining strong software design principles with deep
              infrastructure and operational expertise. From building robust
              backend services to automating cloud deployments and optimizing
              system reliability, I deliver end-to-end solutions that are
              production-ready, maintainable, and resilient under scale.
            </p>

            <p className="text-muted-foreground">
              Driven by a strong ownership mindset, I continuously refine system
              architecture, streamline release pipelines, and ensure high
              availability through proactive monitoring, incident response, and
              performance tuning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/Atharva_Deshpande-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Delivering end-to-end solutions combining modern frontend
                    frameworks with efficient backend and database design.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud Infrastructure & Automation
                  </h4>
                  <p className="text-muted-foreground">
                    Designing and automating cloud-native infrastructure,
                    implementing CI/CD pipelines, and ensuring high availability
                    through observability and incident management.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software & Backend Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable backend systems, RESTful APIs, and
                    microservices with strong focus on performance, reliability,
                    and maintainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
