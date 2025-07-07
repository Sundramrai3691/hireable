import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 font-sans text-white">
      {/* Hero Section */}
      <section className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 text-center max-w-xl mx-auto transition-all duration-300 hover:scale-[1.02]">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Find Your <span className="text-blue-400">Dream Job</span> on{" "}
          <span className="text-accent">Hireable</span>
        </h1>
        <p className="text-sm text-gray-300 mt-2">
          Explore curated jobs and apply in seconds.
        </p>
        <span className="flex items-center gap-2 sm:gap-6 justify-center mt-4">
          <img
            src="/logo.png"
            className="h-14 sm:h-24 lg:h-32 drop-shadow-lg"
            alt="Hireable Logo"
          />
        </span>
      </section>

      {/* Buttons */}
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button
            variant="blue"
            size="xl"
            className="hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button
            variant="destructive"
            size="xl"
            className="hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Company Logos Carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner Image */}
      <img
  src="/banner.png"
  alt="Job Banner"
  className="w-full max-h-[600px] object-cover rounded-xl shadow-lg"
/>




      {/* Cards for Seeker and Employer */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-2xl p-6 font-sans transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="font-bold text-xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-2xl p-6 font-sans transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="font-bold text-xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* FAQ Accordion */}
      <Accordion type="multiple" className="w-full text-white">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
