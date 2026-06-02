import { motion, useAnimation } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "./Magnetic";

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
    const text = `Hi Apex Academy, my name is ${formData.name}. I am interested in ${formData.course}. Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary font-mono text-[10px] tracking-[0.2em] uppercase">
              Get in Touch
            </div>
            <h2 className="text-6xl font-serif font-black mb-8 tracking-tighter leading-tight">
              Start Your Journey <br />
              <span className="text-primary">With Us Today.</span>
            </h2>
            <p className="text-foreground/40 text-lg font-serif italic mb-12 max-w-md leading-relaxed">
              Have questions about admissions or specific courses? Reach out to Miss Sara directly for personalized guidance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-xl shadow-primary/5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase mb-1">Direct Call</div>
                  <a href="tel:8600272278" className="text-2xl font-serif font-bold hover:text-primary transition-colors">+91 86002 72278</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-xl shadow-primary/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase mb-1">Our Center</div>
                  <p className="text-xl font-serif font-bold leading-tight">
                    Shop No. 14, R.N. Arcade, <br />
                    Next to Arif Garden, Bhiwandi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-xl shadow-primary/5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase mb-1">Office Hours</div>
                  <p className="text-xl font-serif font-bold">Mon - Sat: 10AM - 8PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-50" />
            <form 
              onSubmit={handleSubmit}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[2.5rem] shadow-2xl"
            >
              <h3 className="text-3xl font-serif font-black mb-10 tracking-tight">Quick Inquiry</h3>
              
              <div className="space-y-8">
                <motion.div animate={nameControls} className="relative group">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 font-serif text-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                    id="name"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-4 font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-serif peer-placeholder-shown:text-foreground/40 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-mono"
                  >
                    Your Name
                  </label>
                </motion.div>

                <div className="relative group">
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 font-serif text-lg focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer peer"
                  >
                    {courses.map((course) => (
                      <option key={course} value={course} className="bg-[#1A1A1A]">
                        {course}
                      </option>
                    ))}
                  </select>
                  <label className="absolute left-0 -top-4 font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase">
                    Interested Program
                  </label>
                </div>

                <motion.div animate={messageControls} className="relative group">
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 font-serif text-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                    id="message"
                  />
                  <label 
                    htmlFor="message"
                    className="absolute left-0 -top-4 font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-serif peer-placeholder-shown:text-foreground/40 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-mono"
                  >
                    How can we help?
                  </label>
                </motion.div>
              </div>

              <div className="mt-12">
                <Magnetic>
                  <button 
                    type="submit"
                    className="w-full group relative overflow-hidden bg-primary text-white py-5 rounded-2xl font-mono text-[10px] font-bold tracking-[0.3em] uppercase transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send to WhatsApp
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  </button>
                </Magnetic>
              </div>

              <p className="text-center mt-6 text-[10px] font-mono text-foreground/30 tracking-widest uppercase">
                Expect a response within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};
