import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiGooglescholar, SiLinkedin } from "react-icons/si";
import type { ProfessorProfile } from "../backend.d";
import { useGetAllProfiles } from "../hooks/useQueries";

const BIO_TEXT =
  "Dr. Evelyn R. Chen is a tenured Professor of Computer Science at MIT, where she has been a faculty member since 2008. Her research lies at the intersection of machine learning, algorithm design, and human-computer interaction, with particular emphasis on ethical AI systems and scalable data structures. She received her Ph.D. in Computer Science from Stanford University in 2005, followed by a postdoctoral fellowship at Carnegie Mellon University.\n\nDr. Chen has authored over 80 peer-reviewed publications, secured more than $12 million in competitive research funding from the NSF, DARPA, and private foundations, and her work has been cited more than 9,000 times in scholarly literature. She has been recognized with the NSF CAREER Award, the ACM Distinguished Member distinction, and the IEEE Technical Achievement Award. She serves on the editorial boards of the Journal of the ACM and IEEE Transactions on Neural Networks.";

const SEED: ProfessorProfile = {
  name: "Dr. Evelyn R. Chen",
  title: "Professor of Computer Science",
  department: "Department of Computer Science & Engineering",
  university: "MIT — Massachusetts Institute of Technology",
  email: "e.chen@mit.edu",
  bio: BIO_TEXT,
  education: [
    {
      year: 2005n,
      description:
        'Ph.D. in Computer Science, Stanford University — Thesis: "Adaptive Algorithms for High-Dimensional Data"',
    },
    {
      year: 2001n,
      description: "M.Sc. in Computer Science, Stanford University",
    },
    {
      year: 1999n,
      description:
        "B.Sc. (Hons) in Mathematics & Computing, University of Cambridge",
    },
  ],
  workExperience: [
    {
      year: 2015n,
      description:
        "Full Professor, Department of Computer Science & Engineering, MIT",
    },
    {
      year: 2010n,
      description:
        "Associate Professor, MIT CSAIL — Directed the Intelligent Systems Lab",
    },
    {
      year: 2008n,
      description:
        "Assistant Professor, MIT — Founded the Ethical AI Research Group",
    },
    {
      year: 2005n,
      description:
        "Postdoctoral Fellow, School of Computer Science, Carnegie Mellon University",
    },
  ],
  honors: [
    {
      year: 2023n,
      description:
        "IEEE Technical Achievement Award — for contributions to scalable machine learning",
    },
    { year: 2021n, description: "ACM Distinguished Member" },
    { year: 2019n, description: "MIT Excellence in Teaching Award" },
    {
      year: 2013n,
      description:
        'NSF CAREER Award — "Ethical Foundations of Algorithmic Decision-Making"',
    },
    { year: 2010n, description: "Sloan Research Fellowship" },
  ],
  achievements: [
    "Over 80 peer-reviewed publications in top-tier venues (NeurIPS, ICML, CVPR, JACM)",
    "9,000+ citations with h-index of 42 (Google Scholar)",
    "$12M+ in competitive research grants from NSF, DARPA, and Google Research",
    "Co-inventor on 4 US Patents in the area of adaptive ML systems",
    "Keynote speaker at NeurIPS 2022, ICML 2021, and AAAI 2020",
    "Mentor to 22 PhD graduates, many of whom hold faculty or research leadership positions",
    "Editorial board: Journal of the ACM, IEEE Transactions on Neural Networks",
    "Program co-chair: ICML 2022, NeurIPS Workshop on Algorithmic Fairness 2021–2023",
  ],
  courses: [
    "Basic Electronics",
    "Electronic Principles and Circuits",
    "Linear Integrated Circuits",
    "Digital Switching Systems",
    "Microcontroller",
    "CMOS VLSI Design",
    "Management and Entrepreneurship",
    "Artificial Intelligence and Machine Learning",
  ],
};

const PUBLICATIONS = [
  {
    year: "2024",
    title: "Fairness-Aware Learning in Adaptive Recommendation Systems",
    venue: "NeurIPS 2024",
    authors: "Chen E.R., Patel A., Nakamura T.",
  },
  {
    year: "2023",
    title: "Scalable Graph Neural Networks for Knowledge Discovery",
    venue: "ICML 2023",
    authors: "Chen E.R., Liu Y., Kowalski M.",
  },
  {
    year: "2022",
    title:
      "Algorithmic Accountability: Frameworks for Responsible AI Deployment",
    venue: "Journal of the ACM, Vol. 69",
    authors: "Chen E.R.",
  },
  {
    year: "2021",
    title:
      "Efficient Data Structures for High-Dimensional Nearest Neighbor Search",
    venue: "CVPR 2021",
    authors: "Chen E.R., Huang S., Rossi F.",
  },
  {
    year: "2020",
    title: "Robust Optimization Under Distributional Shift in Neural Networks",
    venue: "NeurIPS 2020",
    authors: "Chen E.R., Zhao W., Singh P.",
  },
];

const COURSE_DETAILS = [
  {
    code: "ECE 101",
    title: "Basic Electronics",
    level: "Undergraduate",
    credits: "",
  },
  {
    code: "ECE 201",
    title: "Electronic Principles and Circuits",
    level: "Undergraduate",
    credits: "",
  },
  {
    code: "ECE 301",
    title: "Linear Integrated Circuits",
    level: "Undergraduate",
    credits: "",
  },
  {
    code: "ECE 302",
    title: "Digital Switching Systems",
    level: "Undergraduate",
    credits: "",
  },
  {
    code: "ECE 401",
    title: "Microcontroller",
    level: "Undergraduate",
    credits: "",
  },
  {
    code: "ECE 501",
    title: "CMOS VLSI Design",
    level: "Postgraduate",
    credits: "",
  },
  {
    code: "MGT 101",
    title: "Management and Entrepreneurship",
    level: "Undergraduate",
    credits: "",
  },
  {
    code: "CSE 601",
    title: "Artificial Intelligence and Machine Learning",
    level: "Postgraduate",
    credits: "",
  },
];

const IDENTITY_TAGS = ["B.E", "M.Tech", "Research Scholar", "Mother", "Wife"];

const STATS = [
  { value: "80+", label: "Publications" },
  { value: "9,000+", label: "Citations" },
  { value: "$12M+", label: "Research Funding" },
  { value: "22", label: "PhD Graduates" },
];

const OFFICE_HOURS = [
  { day: "Monday", hours: "10:00 AM – 12:00 PM" },
  { day: "Wednesday", hours: "2:00 PM – 4:00 PM" },
  { day: "Friday", hours: "By appointment" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Biography", href: "#biography" },
  { label: "CV", href: "#cv" },
  { label: "Publications", href: "#publications" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

const ACCENT = "oklch(0.5 0.1 210)";
const TEXT_DARK = "oklch(0.145 0.025 255)";
const TEXT_BODY = "oklch(0.38 0.025 255)";
const TEXT_MUTED = "oklch(0.45 0.02 240)";
const BG_LIGHT = "oklch(0.965 0.005 220)";
const BG_BAND = "oklch(0.955 0.008 220)";
const BORDER = "oklch(0.91 0.01 220)";

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-sans text-2xl font-bold uppercase tracking-widest text-foreground">
        {label}
      </h2>
      <div
        className="mt-3 h-[3px] w-16 rounded-full"
        style={{ background: ACCENT }}
      />
    </div>
  );
}

function TimelineEntry({
  year,
  description,
  isLast,
}: {
  year: string;
  description: string;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-6">
      <div className="w-16 shrink-0 text-right">
        <span className="text-sm font-semibold" style={{ color: ACCENT }}>
          {year}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="mt-1 h-3 w-3 shrink-0 rounded-full border-2"
          style={{ borderColor: ACCENT, background: "oklch(1 0 0)" }}
        />
        {!isLast && (
          <div
            className="mt-1 w-[2px] min-h-[2rem] flex-1"
            style={{ background: BORDER }}
          />
        )}
      </div>
      <div className="pb-6">
        <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      data-ocid={`nav.${label.toLowerCase()}.link`}
      className="rounded px-3 py-1.5 text-sm font-medium transition-colors"
      style={{ color: hovered ? ACCENT : TEXT_BODY }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}

export default function ProfessorPage() {
  const { data: profiles } = useGetAllProfiles();
  const prof = profiles && profiles.length > 0 ? profiles[0] : SEED;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const initials = prof.name
    .split(" ")
    .filter((w) => /[A-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="min-h-screen" style={{ background: BG_LIGHT }}>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 transition-shadow duration-300"
        style={{
          background: "oklch(1 0 0)",
          boxShadow: scrolled
            ? "0 1px 8px rgba(15,23,42,0.12)"
            : "0 1px 3px rgba(15,23,42,0.06)",
        }}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded text-sm font-bold text-white"
              style={{ background: TEXT_DARK }}
            >
              {initials}
            </div>
            <span
              className="hidden text-sm font-semibold tracking-wide sm:block"
              style={{ color: TEXT_DARK }}
            >
              Academic Profile
            </span>
          </div>
          <nav
            className="hidden items-center gap-1 md:flex"
            data-ocid="nav.section"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
          <button
            type="button"
            className="flex items-center rounded p-2 md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t md:hidden"
            style={{ borderColor: BORDER }}
          >
            <nav className="flex flex-col gap-1 px-6 py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium"
                  style={{ color: TEXT_BODY }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[520px] items-end overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-campus.dim_1400x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,10,30,0.82) 0%, rgba(5,10,30,0.45) 60%, rgba(5,10,30,0.2) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6 pb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.8 0.07 210)" }}
            >
              {prof.university}
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {prof.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/90">
              {prof.title}
            </p>
            <p className="mt-1 text-base text-white/75">{prof.department}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                data-ocid="hero.primary_button"
                className="gap-2 rounded-md font-semibold shadow-md"
                style={{ background: "oklch(1 0 0)", color: TEXT_DARK }}
              >
                <Download className="h-4 w-4" />
                Download Full CV (PDF)
              </Button>
              <Button
                variant="outline"
                data-ocid="hero.secondary_button"
                className="gap-2 rounded-md border-white/40 font-semibold text-white hover:bg-white/10 hover:text-white"
                style={{ background: "transparent" }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <main>
        {/* BIOGRAPHY */}
        <section
          id="biography"
          className="py-20"
          style={{ background: "oklch(1 0 0)" }}
        >
          <div className="mx-auto max-w-[1140px] px-6">
            <SectionHeading label="Biography" />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[320px_1fr]">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-4"
              >
                <img
                  src="/assets/uploads/whatsapp_image_2026-03-24_at_9.35.00_pm-019d209f-b24a-74f4-a5a4-86d1e3165f4d-2.jpeg"
                  alt={`Portrait of ${prof.name}`}
                  className="w-full max-w-[300px] rounded-xl object-cover shadow-card"
                  style={{ aspectRatio: "4/5" }}
                />
                {/* Identity tags */}
                <div className="flex flex-wrap gap-2">
                  {IDENTITY_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "oklch(0.93 0.02 210)",
                        color: "oklch(0.3 0.08 220)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="flex flex-col gap-2 text-sm"
                  style={{ color: TEXT_BODY }}
                >
                  <div className="flex items-center gap-2">
                    <Mail
                      className="h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <a href={`mailto:${prof.email}`} style={{ color: ACCENT }}>
                      {prof.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin
                      className="h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span>77 Mass Ave, Cambridge MA 02139</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-4">
                  {prof.bio.split("\n\n").map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-base leading-[1.8]"
                      style={{ color: TEXT_BODY }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg px-4 py-3 text-center"
                      style={{ background: BG_LIGHT }}
                    >
                      <div
                        className="text-2xl font-bold"
                        style={{ color: ACCENT }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="mt-0.5 text-xs font-medium"
                        style={{ color: TEXT_MUTED }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CV */}
        <section id="cv" className="py-20" style={{ background: BG_BAND }}>
          <div className="mx-auto max-w-[1140px] px-6">
            <SectionHeading label="Curriculum Vitae" />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <GraduationCap
                    className="h-5 w-5"
                    style={{ color: ACCENT }}
                  />
                  <h3
                    className="text-base font-bold uppercase tracking-widest"
                    style={{ color: TEXT_DARK }}
                  >
                    Education
                  </h3>
                </div>
                {prof.education.map((e, idx) => (
                  <TimelineEntry
                    key={e.description.slice(0, 30)}
                    year={e.year.toString()}
                    description={e.description}
                    isLast={idx === prof.education.length - 1}
                  />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" style={{ color: ACCENT }} />
                  <h3
                    className="text-base font-bold uppercase tracking-widest"
                    style={{ color: TEXT_DARK }}
                  >
                    Experience
                  </h3>
                </div>
                {prof.workExperience.map((e, idx) => (
                  <TimelineEntry
                    key={e.description.slice(0, 30)}
                    year={e.year.toString()}
                    description={e.description}
                    isLast={idx === prof.workExperience.length - 1}
                  />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <Award className="h-5 w-5" style={{ color: ACCENT }} />
                  <h3
                    className="text-base font-bold uppercase tracking-widest"
                    style={{ color: TEXT_DARK }}
                  >
                    Honors & Awards
                  </h3>
                </div>
                {prof.honors.map((e, idx) => (
                  <TimelineEntry
                    key={e.description.slice(0, 30)}
                    year={e.year.toString()}
                    description={e.description}
                    isLast={idx === prof.honors.length - 1}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section
          id="publications"
          className="py-20"
          style={{ background: "oklch(1 0 0)" }}
        >
          <div className="mx-auto max-w-[1140px] px-6">
            <SectionHeading label="Publications & Achievements" />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h3
                  className="mb-6 text-sm font-bold uppercase tracking-widest"
                  style={{ color: TEXT_MUTED }}
                >
                  Recent Publications
                </h3>
                <div className="space-y-4" data-ocid="publications.list">
                  {PUBLICATIONS.map((pub, idx) => (
                    <motion.div
                      key={pub.title}
                      data-ocid={`publications.item.${idx + 1}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="group rounded-lg border p-4 transition-shadow hover:shadow-card"
                      style={{
                        borderColor: BORDER,
                        background: "oklch(0.985 0.003 220)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p
                            className="text-sm font-semibold leading-snug"
                            style={{ color: TEXT_DARK }}
                          >
                            {pub.title}
                          </p>
                          <p
                            className="mt-1 text-xs"
                            style={{ color: TEXT_MUTED }}
                          >
                            {pub.authors}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="text-xs"
                              style={{
                                background: "oklch(0.93 0.02 210)",
                                color: "oklch(0.4 0.1 210)",
                              }}
                            >
                              {pub.venue}
                            </Badge>
                            <span
                              className="text-xs"
                              style={{ color: "oklch(0.55 0.02 240)" }}
                            >
                              {pub.year}
                            </span>
                          </div>
                        </div>
                        <span
                          className="shrink-0 text-xs font-semibold"
                          style={{ color: ACCENT }}
                        >
                          Read More
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="mb-6 text-sm font-bold uppercase tracking-widest"
                  style={{ color: TEXT_MUTED }}
                >
                  Key Achievements
                </h3>
                <ul className="space-y-3" data-ocid="achievements.list">
                  {prof.achievements.map((ach, idx) => (
                    <motion.li
                      key={ach.slice(0, 40)}
                      data-ocid={`achievements.item.${idx + 1}`}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: TEXT_BODY }}
                      >
                        {ach}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TEACHING */}
        <section
          id="teaching"
          className="py-20"
          style={{ background: BG_BAND }}
        >
          <div className="mx-auto max-w-[1140px] px-6">
            <SectionHeading label="Teaching & Courses" />
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              data-ocid="courses.list"
            >
              {COURSE_DETAILS.map((course, idx) => (
                <motion.div
                  key={course.code}
                  data-ocid={`courses.item.${idx + 1}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="group flex cursor-pointer items-center justify-between rounded-xl border bg-card p-5 shadow-xs transition-all hover:shadow-card"
                  style={{ borderColor: BORDER }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "oklch(0.93 0.02 210)" }}
                    >
                      <BookOpen
                        className="h-5 w-5"
                        style={{ color: "oklch(0.4 0.1 210)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold tracking-wider"
                        style={{ color: ACCENT }}
                      >
                        {course.code}
                      </p>
                      <p
                        className="mt-0.5 text-sm font-semibold leading-snug"
                        style={{ color: TEXT_DARK }}
                      >
                        {course.title}
                      </p>
                      <div className="mt-1 flex gap-2">
                        <Badge
                          variant="secondary"
                          className="px-1.5 py-0 text-[10px]"
                          style={{
                            background: "oklch(0.88 0.015 220)",
                            color: "oklch(0.4 0.02 240)",
                          }}
                        >
                          {course.level}
                        </Badge>
                        {course.credits && (
                          <span
                            className="text-[10px]"
                            style={{ color: "oklch(0.55 0.02 240)" }}
                          >
                            {course.credits}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: ACCENT }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20"
          style={{ background: TEXT_DARK }}
        >
          <div className="mx-auto max-w-[1140px] px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2
                  className="mb-6 font-sans text-2xl font-bold uppercase tracking-widest"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  Contact
                </h2>
                <div className="space-y-4" data-ocid="contact.section">
                  <div className="flex items-center gap-3">
                    <Mail
                      className="h-5 w-5"
                      style={{ color: "oklch(0.7 0.07 210)" }}
                    />
                    <a
                      href={`mailto:${prof.email}`}
                      className="text-sm"
                      style={{ color: "oklch(0.85 0.03 220)" }}
                    >
                      {prof.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone
                      className="h-5 w-5"
                      style={{ color: "oklch(0.7 0.07 210)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.85 0.03 220)" }}
                    >
                      +1 (617) 253-0000
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: "oklch(0.7 0.07 210)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.85 0.03 220)" }}
                    >
                      Stata Center, Room 32-G948
                      <br />
                      77 Massachusetts Avenue
                      <br />
                      Cambridge, MA 02139
                    </span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.link"
                      className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                      style={{
                        background: "oklch(0.22 0.03 255)",
                        color: "oklch(0.85 0.03 220)",
                      }}
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://scholar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.scholar.link"
                      className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                      style={{
                        background: "oklch(0.22 0.03 255)",
                        color: "oklch(0.85 0.03 220)",
                      }}
                      aria-label="Google Scholar"
                    >
                      <SiGooglescholar className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="mb-6 text-sm font-bold uppercase tracking-widest"
                  style={{ color: "oklch(0.6 0.05 220)" }}
                >
                  Office Hours & Availability
                </h3>
                <div className="space-y-2">
                  {OFFICE_HOURS.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex justify-between rounded-lg px-4 py-3"
                      style={{ background: "oklch(0.19 0.025 255)" }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: "oklch(0.85 0.03 220)" }}
                      >
                        {slot.day}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "oklch(0.65 0.04 220)" }}
                      >
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-4 text-xs leading-relaxed"
                  style={{ color: "oklch(0.55 0.03 230)" }}
                >
                  For research collaboration inquiries, speaking invitations, or
                  media requests, please email the department coordinator at
                  csadmin@mit.edu
                </p>
              </div>
            </div>

            <div
              className="mt-16 flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs sm:flex-row"
              style={{
                borderColor: "oklch(0.22 0.03 255)",
                color: "oklch(0.5 0.03 230)",
              }}
            >
              <span>
                © {new Date().getFullYear()} {prof.name}. All rights reserved.
              </span>
              <span>
                Built with ♥ using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "oklch(0.6 0.07 210)" }}
                >
                  caffeine.ai
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
