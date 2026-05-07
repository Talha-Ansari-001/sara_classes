import { motion, useAnimation } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "./Magnetic";
import { cn } from "../utils/cn";

const courses = [
  "10th Board (All Subjects)",
  "Junior College (11th-12th)",
  "NEET 2026",
  "IIT-JEE",
  "MHT CET",
  "Degree (B.com, BMS, BA, Bsc)",
  "Specialty (B.ed, D.ed, Bsc IT)",
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    course: courses[0],
  });

  const nameControls = useAnimation();
  const messageControls = useAnimation();

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!formData.name.trim()) {
      nameControls.start(shakeAnimation);
      isValid = false;
    }

    if (!formData.message.trim()) {
      messageControls.start(shakeAnimation);
      isValid = false;
    }

    if (!isValid) return;

    const phoneNumber = "918600272278";
    const text = `Hi Miss Sara, my name is ${formData.name}. I am interested in ${formData.course}. Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Beams Effect (Simplified) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-8"
            >
              Get in Touch with <span className="text-primary">Miss Sara</span>
            </motion.h2>
            <p className="text-foreground/60 mb-12 font-serif text-lg leading-relaxed">
              Have questions about our batches or enrollment? Reach out to us directly or visit our center in Bhiwandi.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-1">Call Us</h4>
                  <a href="tel:8600272278" className="text-2xl font-serif hover:text-primary transition-colors font-bold tracking-wider">
                    +91 86002 72278
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-1">Visit Us</h4>
                  <p className="text-foreground/80 font-serif leading-relaxed">
                    Shop No. 14, R.N. Arcade, H. No. 1146,<br />
                    Next to Arif Garden, Nashik Road,<br />
                    Bhiwandi, Maharashtra 421302
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-30" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div animate={nameControls}>
                  <label className="block text-xs font-mono text-foreground/40 uppercase mb-2">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-foreground/20" 
                  />
                </motion.div>
                
                <div>
                  <label className="block text-xs font-mono text-foreground/40 uppercase mb-2">Interested Course</label>
                  <select 
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                  >
                    {courses.map((course) => (
                      <option key={course} value={course} className="bg-[#1A1A1A]">
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.div animate={messageControls}>
                  <label className="block text-xs font-mono text-foreground/40 uppercase mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-foreground/20" 
                  />
                </motion.div>

                <Magnetic>
                  <button 
                    type="submit"
                    className={cn(
                      "w-full bg-primary text-background font-bold py-4 rounded-lg flex items-center justify-center gap-2",
                      "hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-300 group"
                    )}
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Send Message via WhatsApp
                  </button>
                </Magnetic>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
