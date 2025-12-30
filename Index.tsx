import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessStep } from "@/components/ProcessStep";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { CTASection } from "@/components/CTASection";

const features = [
  {
    title: "Lectura sistémica",
    description: "Observo el cuerpo como una red, no por partes. Cada síntoma es una señal del sistema completo.",
  },
  {
    title: "Evaluación funcional",
    description: "Analizo cómo se regula el sistema, identificando patrones de desequilibrio funcional.",
  },
  {
    title: "Acompañamiento",
    description: "Trabajo procesos, no soluciones rápidas. El bienestar se construye con método y tiempo.",
  },
];

const processSteps = [
  { number: "01", title: "Valoración clínica" },
  { number: "02", title: "Lectura funcional" },
  { number: "03", title: "Intervención precisa" },
  { number: "04", title: "Acompañamiento" },
];

const specialties = [
  {
    title: "Dolor y contracturas",
    description: "Cervicalgias, lumbalgias, tensión muscular crónica y dolor articular.",
  },
  {
    title: "Fertilidad",
    description: "Apoyo al proceso reproductivo desde la regulación hormonal y energética.",
  },
  {
    title: "Estrés y ansiedad",
    description: "Regulación del sistema nervioso para recuperar el equilibrio.",
  },
  {
    title: "Digestión",
    description: "Trastornos digestivos funcionales y regulación metabólica.",
  },
  {
    title: "Insomnio",
    description: "Restauración de los patrones naturales de sueño y descanso.",
  },
  {
    title: "Migrañas",
    description: "Abordaje sistémico de cefaleas tensionales y migrañas recurrentes.",
  },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 md:py-0">
        <div className="container-clinical">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6 animate-fade-in">
              El cuerpo no es una máquina.
              <br />
              <span className="text-primary">Es un sistema complejo vivo.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delayed leading-relaxed">
              Leo el cuerpo como un sistema. Acompaño a las personas que eligen su bienestar 
              y recuperación con acupuntura y Medicina Tradicional China.
            </p>
            <div className="flex flex-col items-center gap-4 animate-fade-in-delayed-2">
              <Button variant="clinical" size="xl" asChild>
                <a
                  href="https://wa.me/+5215552520615?text=Hola,%20quiero%20agendar%20mi%20valoración%20integrativa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda tu valoración integrativa
                </a>
              </Button>
              <p className="text-xs text-muted-foreground max-w-xs text-center">
                WhatsApp se utiliza únicamente para agendar citas.
                No ofrecemos consultas informativas por mensaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="section-padding bg-card">
        <div className="container-clinical">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
              El proceso comienza con una valoración clínica integrativa.
            </p>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              Trabajo con protocolos personalizados y seguimiento clínico para resultados sostenibles.
            </p>
          </div>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="section-padding">
        <div className="container-clinical">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-muted">
        <div className="container-clinical">
          <h2 className="font-display text-2xl md:text-3xl text-foreground text-center mb-16">
            El proceso clínico
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-padding">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Especialidades de aplicación
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              El método se aplica a diversas condiciones donde el sistema necesita regulación.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </MainLayout>
  );
};

export default Index;
