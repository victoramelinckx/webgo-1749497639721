
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Más, Sin Anuncios Pagados" subheadline="Curso Express de 3 semanas para dueños de negocios que desean vender en redes sociales. Web de ventas en menos de 24 horas y soporte 24/7 incluido." cta1="Comienza Ahora" />
<How step1Title="Inscríbete al Curso" step1Desc="Inscribe tu negocio al Curso de Ventas Express." step2Title="Adquiere habilidades" step2Desc="Aprende a vender en redes sociales sin anuncios pagados." step3Title="Digitaliza tus ventas" step3Desc="Aumenta tus ventas online en menos de 24 horas." />
<Aboutus headline="WebGo: Digitaliza tus ventas fácilmente" subheadline="Ayudamos a los dueños de pequeños negocios a aumentar sus ventas en línea, ahorrándoles tiempo y esfuerzo." beneficiotitulo1="Aumento de ventas" beneficio1="Convierte recomendaciones en ventas online" beneficiotitulo2="Ahorra tiempo" beneficio2="Gestión de sitio web sin complicaciones" />
<Services heading="Digitaliza tus ventas, maximiza tus beneficios" description="Con el Curso de Ventas Express, aprende a vender en redes sociales de forma orgánica, sin necesidad de anuncios pagados. Adecuado para aquellos que carecen de tiempo o conocimientos en la gestión de sitios web." services={[{"name":"Estrategias de Venta","icon":"tactics","description":"Tácticas probadas para ventas exitosas."},{"name":"Manejo de Redes Sociales","icon":"network","description":"Crea y gestiona tu presencia online."},{"name":"Contenido Optimizado","icon":"optimized","description":"Contenido que atrae y convierte."},{"name":"Soporte 24/7","icon":"support","description":"Soporte constante para resolver tus dudas."},{"name":"Creación de Sitio Web","icon":"website","description":"Tu sitio de ventas en menos de 24 horas."},{"name":"Curso Express","icon":"clock","description":"Transforma tu negocio en solo 3 semanas."}]} />
<BeforeAndAfter subheadline="Muestra palpable de nuestro compromiso con la excelencia digital" />
<Faq faqs={[{"pregunta":"¿Qué es el Curso de Ventas Express de WebGo y cómo puede ayudar a mi negocio?","respuesta":"El Curso de Ventas Express de WebGo es un programa en línea de tres semanas diseñado específicamente para dueños de negocios como tú, que deseen vender en redes sociales sin la necesidad de anuncios pagados. Te enseñaremos técnicas efectivas de marketing digital que te permitirán digitalizar tus ventas y ampliar tu mercado."},{"pregunta":"¿Necesito tener conocimientos previos de ventas online para tomar este curso?","respuesta":"No, no necesitas tener experiencia previa en ventas online. Nuestro Curso de Ventas Express está diseñado para ser fácilmente entendible y aplicable, incluso si estás dando tus primeros pasos en la digitalización de tu negocio."},{"pregunta":"¿Qué beneficios puedo esperar al tomar el Curso de Ventas Express de WebGo?","respuesta":"Al tomar nuestro Curso de Ventas Express, aprenderás estrategias efectivas que te permitirán vender en redes sociales de forma orgánica. Esto te permitirá digitalizar tus ventas, llegar a un público más amplio y aumentar tus ingresos, todo sin la necesidad de publicidad pagada."},{"pregunta":"¿Cómo puedo inscribirme y cuánto cuesta el Curso de Ventas Express de WebGo?","respuesta":"Puedes inscribirte en nuestro Curso de Ventas Express directamente en nuestro sitio web. El costo es de $120.000 CLP o $150 USD. Ten en cuenta que esta inversión te proporcionará las herramientas necesarias para digitalizar tus ventas y expandir tu negocio."},{"pregunta":"Estoy muy ocupado con mi negocio, ¿requiere mucho tiempo el Curso de Ventas Express?","respuesta":"Entendemos que como dueño de negocio, tu tiempo es valioso. Por eso, nuestro Curso de Ventas Express se lleva a cabo en línea y puedes completarlo a tu propio ritmo. Además, las técnicas que aprenderás te ayudarán a optimizar tu tiempo al manejar las ventas de tu negocio de manera más eficiente."}]} />
<BookAppointment 
                      heading="Convierte tus Recomendaciones en Ventas Digitales" 
                      description="Aprende con nuestro Curso de Ventas Express cómo llevar tu negocio local al mundo digital, optimizando tu tiempo y recursos. ¡Nosotros te enseñamos!"
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="3KvykpM53IPpHsYHkK4AgE51dA33"
                    />
<Footer />
    </main>
  );
}
