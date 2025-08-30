"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { motion } from "motion/react"
import { buttonHover, cardHover, fadeInLeft, fadeInRight, fadeInUp, floatingAnimation, stagger } from "./utils/animation-variants";

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 sm:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
            variants={floatingAnimation}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-400/8 rounded-full blur-3xl"
            variants={floatingAnimation}
            animate="animate"
            style={{ animationDelay: "3s" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"
            variants={floatingAnimation}
            animate="animate"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-8 sm:space-y-12"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-center"
              >
                <Badge
                  variant="outline"
                  className="bg-emerald-900/30 border-emerald-700/30 px-6 py-3 text-emerald-400 text-sm font-medium backdrop-blur-sm"
                >
                  ✨ Healthcare made simple
                </Badge>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  Connect with doctors
                  <br className="hidden sm:block" />
                  <span className="gradient-title bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                    Anytime, Anywhere
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform. Your health, simplified.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
                variants={fadeInUp}
              >
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-600/25 w-full sm:w-auto min-w-[200px]"
                  >
                    <Link href="/onboarding">
                      Get Started <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-emerald-700/40 hover:bg-emerald-900/20 text-emerald-300 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm w-full sm:w-auto min-w-[200px]"
                  >
                    <Link href="/doctors">Find Doctors</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="pt-12 sm:pt-16"
                variants={fadeInUp}
              >
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-muted-foreground"
                  variants={stagger}
                >
                  <motion.div
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm font-medium">10,000+ Happy Patients</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm font-medium">500+ Verified Doctors</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm font-medium">24/7 Available</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              Our platform makes healthcare accessible with just a few clicks
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
              >
                <Card
                  className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 h-full"
                >
                  <motion.div variants={cardHover}>
                    <CardHeader className="pb-2">
                      <motion.div
                        className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <CardTitle className="text-lg sm:text-xl font-semibold text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 animate-bounce text-emerald-400 text-sm font-medium mb-4"
              >
                Affordable Healthcare
              </Badge>
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Consultation Packages
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              Choose the perfect consultation package that fits your healthcare
              needs
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Pricing component would go here */}
            <Pricing />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="mt-8 sm:mt-12 bg-muted/20 border-emerald-900/30">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-white flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                    </motion.div>
                    How Our Credit System Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-3"
                    variants={stagger}
                  >
                    {creditBenefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        variants={fadeInLeft}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full"
                          whileHover={{ scale: 1.2 }}
                        >
                          <svg
                            className="h-4 w-4 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </motion.div>
                        <p
                          className="text-muted-foreground text-sm sm:text-base"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        />
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 animate-bounce px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
              >
                Success Stories
              </Badge>
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              Hear from patients and doctors who use our platform
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
              >
                <Card
                  className="border-emerald-900/20 cursor-pointer hover:border-emerald-800/40 transition-all h-full"
                >
                  <motion.div variants={cardHover}>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-emerald-400 font-bold">
                            {testimonial.initials}
                          </span>
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
              <CardContent className="p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div className="max-w-2xl relative z-10">
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
                    variants={fadeInUp}
                  >
                    Ready to take control of your healthcare?
                  </motion.h2>
                  <motion.p
                    className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8"
                    variants={fadeInUp}
                  >
                    Join thousands of users who have simplified their healthcare
                    journey with our platform. Get started today and experience
                    healthcare the way it should be.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    variants={stagger}
                  >
                    <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                      <Button
                        asChild
                        size="lg"
                        className="bg-emerald-600 text-white hover:bg-emerald-700 w-full sm:w-auto"
                      >
                        <Link href="/sign-up">Sign Up Now</Link>
                      </Button>
                    </motion.div>
                    <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-emerald-700/30 hover:bg-muted/80 w-full sm:w-auto"
                      >
                        <Link href="#pricing">View Pricing</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Animated decorative elements */}
                <motion.div
                  className="absolute right-0 top-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-10 sm:-mr-20 -mt-10 sm:-mt-20"
                  variants={floatingAnimation}
                  animate="animate"
                />
                <motion.div
                  className="absolute left-0 bottom-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-5 sm:-ml-10 -mb-5 sm:-mb-10"
                  variants={floatingAnimation}
                  animate="animate"
                  style={{ animationDelay: "3s" }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}