import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ChevronDown,
  Flame,
  Star,
  UtensilsCrossed,
  Users,
  Heart,
  Calendar,
} from "lucide-react";

/* ───────────────────────── data ───────────────────────── */

const menuItems = [
  {
    name: "Cajun Style Cooked Crawfish",
    desc: "Award-winning crawfish boiled fresh in our signature cajun seasoning. The flavor that put us on the map. Bulk discounts available.",
    price: "$7.50/lb",
    icon: "🦞",
    hot: true,
  },
  {
    name: "Live Crawfish",
    desc: "Fresh, uncooked live crawfish straight from Louisiana — boil them your way at home. Perfect for backyard boils.",
    price: "$4/lb",
    icon: "🦞",
    hot: false,
  },
];

const testimonials = [
  {
    text: "Best crawfish I've ever had outside Louisiana. The seasoning is PERFECT. Award-winning for a reason.",
    name: "Marcus T.",
    stars: 5,
  },
  {
    text: "We drive 2 hours just for their crawfish. Worth every mile and every penny. Nobody else even comes close.",
    name: "Sarah & Jim K.",
    stars: 5,
  },
  {
    text: "These mudbugs remind me of home in Breaux Bridge. Real deal cajun crawfish — no filler, no shortcuts.",
    name: "Chef Darnell R.",
    stars: 5,
  },
];

const values = [
  {
    icon: Star,
    title: "Award-Winning",
    desc: "Our crawfish has won over thousands of fans. The seasoning speaks for itself.",
  },
  {
    icon: Flame,
    title: "Cooked or Live",
    desc: "Get 'em boiled hot in our cajun seasoning, or take 'em home live and do it your way.",
  },
  {
    icon: Heart,
    title: "Family-Owned",
    desc: "A family-run spot that treats every customer like one of our own.",
  },
  {
    icon: Users,
    title: "Pensacola Proud",
    desc: "Serving the Pensacola community from 3494 E Olive Rd. Come see us!",
  },
];

const seasonPhases = [
  {
    title: "Early Season",
    months: "Dec – Feb",
    label: "Season's Starting!",
    image: "/images/season-early.jpg",
    description:
      "The mudbugs are waking up! Early season crawfish are hitting the pots, but these little guys are still growing. Expect smaller crawfish, limited supply, and higher prices — but fresh crawfish is fresh crawfish.",
    size: "Small – Medium",
    price: "$$$ Highest",
    availability: "Limited",
    color: "bg-bayou-green",
  },
  {
    title: "Peak Season",
    months: "Mar – May",
    label: "It's ON!",
    image: "/images/season-peak.jpg",
    description:
      "This is what we live for! Big, fat, juicy crawfish rolling in by the sack. Prices drop, the pots stay full, and every weekend is a boil. Get 'em while they're hot — this is the best crawfish you'll eat all year.",
    size: "Large & Fat",
    price: "$ Lowest",
    availability: "Abundant",
    color: "bg-crawfish",
  },
  {
    title: "Late Season",
    months: "Jun – Jul",
    label: "Last Call!",
    image: "/images/season-late.jpg",
    description:
      "Last call for crawfish! The season's winding down and supply is getting spotty. We're boiling every mudbug we can get, but once they're gone, they're gone. Don't sleep on it.",
    size: "Variable",
    price: "$$ Rising",
    availability: "Declining",
    color: "bg-cajun-orange",
  },
  {
    title: "Off Season",
    months: "Aug – Nov",
    label: "See Y'all Next Year!",
    image: "/images/season-off.jpg",
    description:
      "The mudbugs are underground doing their thing. No live crawfish right now, but we're counting down the days 'til next season. Check back when it cools off!",
    size: "N/A",
    price: "N/A",
    availability: "None",
    color: "bg-bark-light",
  },
];

/* ───────────────────────── page ───────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <About />
        <Menu />
        <Testimonials />
        <Season />
        <CateringCTA />
        <Hours />
        <Footer />
      </main>
    </>
  );
}

/* ───────────────────────── navbar ──────────────────────── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bark/95 backdrop-blur-sm border-b border-bark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Crawfish Shack logo" className="w-9 h-9" />
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cream">
              The Crawfish Shack
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Menu", "Reviews", "Season", "Catering", "Hours"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cream/80 hover:text-mustard transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
            <a href="tel:+18505309611" className="btn-crawfish text-sm !py-2 !px-4">
              <Phone className="w-4 h-4 mr-2" />
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────── hero ────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bark">
      {/* hero background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Louisiana Atchafalaya Basin crawfish farm"
          className="w-full h-full object-cover"
        />
      </div>
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bark/80 via-crawfish-dark/70 to-bark/90" />

      {/* steam particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-steam rounded-full bg-cream/10"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${15 + i * 14}%`,
              bottom: "30%",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-mustard font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Award-Winning Crawfish
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl lg:text-8xl font-extrabold text-cream leading-[0.95] mb-6">
            Crawfish
            <br />
            <span className="text-crawfish-light">Shack</span>
          </h1>
          <p className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Award-winning crawfish — cooked or live — imported fresh from
            Louisiana daily. Family-owned, cajun-seasoned, and served with
            pride in Pensacola, FL.
          </p>
        </div>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="btn-crawfish text-lg">
            <UtensilsCrossed className="w-5 h-5 mr-2" />
            View Menu
          </a>
          <a href="#hours" className="btn-outline text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            Find Us
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-boil">
        <ChevronDown className="w-8 h-8 text-cream/40" />
      </div>
    </section>
  );
}

/* ───────────────────────── value strip ─────────────────── */

function ValueStrip() {
  return (
    <section className="bg-crawfish py-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-2 text-cream font-semibold text-sm uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <Star className="w-4 h-4 text-mustard fill-mustard" /> Award-Winning
          Crawfish
        </span>
        <span>|</span>
        <span>Fresh Daily from Louisiana</span>
        <span>|</span>
        <span>Family-Owned</span>
        <span>|</span>
        <span>Cooked or Live</span>
      </div>
    </section>
  );
}

/* ───────────────────────── about ───────────────────────── */

function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about.jpg"
              alt="Fresh crawfish and cajun seafood"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-crawfish font-semibold uppercase tracking-wider text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-bark mb-6 leading-tight">
              Just Crawfish.
              <br />
              <span className="text-crawfish">Done Right.</span>
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <p className="text-bark-light text-lg leading-relaxed mb-6">
              We do one thing and we do it better than anyone — award-winning
              crawfish. Fresh from Louisiana, boiled in our signature cajun
              seasoning, and served with pride right here in Pensacola. No
              fillers, no extras, just pure crawfish.
            </p>
            <p className="text-bark-light text-lg leading-relaxed mb-8">
              Want &apos;em cooked? We&apos;ll boil &apos;em hot and seasoned
              to perfection. Want &apos;em live? Take a sack home and do it
              your way. Either way, you&apos;re getting the best crawfish
              on the Gulf Coast — that&apos;s our promise.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-crawfish/10 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-crawfish" />
                  </div>
                  <div>
                    <p className="font-bold text-bark text-sm">{v.title}</p>
                    <p className="text-bark-light text-xs leading-snug mt-1">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── menu ────────────────────────── */

function Menu() {
  return (
    <section id="menu" className="py-24 bg-bark woodgrain">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-mustard font-semibold uppercase tracking-wider text-sm mb-3">
            What We&apos;re Servin&apos;
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-bold text-cream mb-4">
            The Menu
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            We keep it simple — just crawfish, cooked or live. Prices may vary
            by season. That&apos;s all you need.
          </p>
        </div>

        {/* hero food image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[21/9]">
          <img
            src="/images/food1.jpg"
            alt="Award-winning cajun crawfish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="bg-crawfish/90 text-cream text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full">
              <Star className="w-4 h-4 inline mr-1 -mt-0.5" />
              Award-Winning Flavor
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-bark-light/30 backdrop-blur-sm rounded-2xl border border-cream/10 p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream flex items-center gap-2">
                    {item.name}
                    {item.hot && (
                      <Flame className="w-5 h-5 text-cajun-orange" />
                    )}
                  </h3>
                </div>
              </div>
              <p className="text-cream/60 leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>
              <div className="flex items-center justify-between border-t border-cream/10 pt-4">
                <span className="text-mustard font-[family-name:var(--font-playfair)] text-3xl font-bold">
                  {item.price}
                </span>
                <a href="tel:+18505309611" className="btn-crawfish text-sm !py-2 !px-4">
                  <Phone className="w-4 h-4 mr-1" />
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── testimonials ────────────────── */

function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-crawfish font-semibold uppercase tracking-wider text-sm mb-3">
            Don&apos;t Take Our Word For It
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-bark mb-4">
            What Folks Are Sayin&apos;
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-bark/5 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-mustard fill-mustard"
                  />
                ))}
              </div>
              <p className="text-bark-light text-base leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-bark font-bold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── season guide ──────────────── */

function Season() {
  return (
    <section id="season" className="py-24 bg-bark woodgrain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-mustard font-semibold uppercase tracking-wider text-sm mb-3">
            Know Your Mudbugs
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-bold text-cream mb-4">
            Crawfish Season Guide
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Crawfish season runs roughly December through July, but not all
            months are created equal. Here&apos;s what to expect throughout the
            year.
          </p>
        </div>

        <div className="space-y-8">
          {seasonPhases.map((phase, i) => (
            <div
              key={phase.title}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-cream/10 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* image */}
              <div
                className={`relative h-64 md:h-auto ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`${phase.color} text-cream text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}
                  >
                    {phase.label}
                  </span>
                </div>
              </div>

              {/* content */}
              <div
                className={`bg-bark-light/30 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-mustard" />
                  <span className="text-mustard font-bold text-sm uppercase tracking-wider">
                    {phase.months}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-cream mb-4">
                  {phase.title}
                </h3>
                <p className="text-cream/70 leading-relaxed mb-6">
                  {phase.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-bark/40 rounded-lg p-3 text-center">
                    <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">
                      Size
                    </p>
                    <p className="text-cream font-bold text-sm">{phase.size}</p>
                  </div>
                  <div className="bg-bark/40 rounded-lg p-3 text-center">
                    <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">
                      Price
                    </p>
                    <p className="text-cream font-bold text-sm">
                      {phase.price}
                    </p>
                  </div>
                  <div className="bg-bark/40 rounded-lg p-3 text-center">
                    <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">
                      Supply
                    </p>
                    <p className="text-cream font-bold text-sm">
                      {phase.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-bark-light/30 backdrop-blur-sm rounded-2xl border border-cream/10 p-8 max-w-2xl mx-auto">
            <p className="text-mustard font-bold text-lg mb-2">
              🦞 Pro Tip
            </p>
            <p className="text-cream/70 leading-relaxed">
              <span className="text-cream font-semibold">March through May</span>{" "}
              is the sweet spot — biggest crawfish, lowest prices, and the most
              consistent supply. If you&apos;re planning a boil, that&apos;s your
              window!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── catering CTA ───────────────── */

function CateringCTA() {
  return (
    <section
      id="catering"
      className="relative py-20 overflow-hidden"
    >
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/images/catering.jpg"
          alt="Crawfish boil catering event"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-crawfish-dark/90 via-crawfish/85 to-cajun-orange/90" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="text-6xl mb-4 block">🎉</span>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-cream mb-6">
          Throw a Crawfish Boil
        </h2>
        <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Weddings, tailgates, corporate events, or just because it&apos;s
          Saturday. We bring the award-winning crawfish, the pots, and the
          seasoning. You bring the appetite.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+18505309611" className="btn-outline text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Call for Catering
          </a>
          <a
            href="mailto:catering@crawfishshack.com"
            className="btn-outline text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── hours / location ────────────── */

function Hours() {
  return (
    <section id="hours" className="py-24 bg-bark woodgrain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-mustard font-semibold uppercase tracking-wider text-sm mb-3">
            Come &amp; Get It
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-cream mb-4">
            Hours &amp; Location
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-bark-light/30 backdrop-blur-sm rounded-2xl border border-cream/10 p-10">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-mustard" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream">
                Hours
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { day: "Monday", hours: "11:30 AM – 7:00 PM" },
                { day: "Tuesday", hours: "11:30 AM – 7:00 PM" },
                { day: "Wednesday", hours: "11:30 AM – 7:00 PM" },
                { day: "Thursday", hours: "11:30 AM – 7:00 PM" },
                { day: "Friday", hours: "11:30 AM – 7:00 PM" },
                { day: "Saturday", hours: "11:30 AM – 7:00 PM" },
                { day: "Sunday", hours: "11:30 AM – 7:00 PM" },
              ].map((d) => (
                <div
                  key={d.day}
                  className="flex justify-between items-center border-b border-cream/10 pb-3 last:border-0"
                >
                  <span className="text-cream/70 font-medium">{d.day}</span>
                  <span
                    className={`font-bold ${d.hours === "Closed" ? "text-crawfish-light" : "text-cream"}`}
                  >
                    {d.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-bark-light/30 backdrop-blur-sm rounded-2xl border border-cream/10 p-10">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-mustard" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream">
                Location
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-cream text-lg font-bold mb-1">
                  Crawfish Shack
                </p>
                <p className="text-cream/60">
                  3494 E Olive Rd
                  <br />
                  Pensacola, FL 32514
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+18505309611"
                  className="flex items-center gap-3 text-cream/70 hover:text-mustard transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (850) 530-9611
                </a>
                <a
                  href="mailto:hello@crawfishshack.com"
                  className="flex items-center gap-3 text-cream/70 hover:text-mustard transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@crawfishshack.com
                </a>
              </div>
              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-cream/10">
                <iframe
                  src="https://maps.google.com/maps?q=3494+E+Olive+Rd,+Pensacola,+FL+32514&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crawfish Shack location on Google Maps"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3494+E+Olive+Rd,+Pensacola,+FL+32514"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crawfish w-full text-center text-sm !py-3"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── footer ──────────────────────── */

function Footer() {
  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Crawfish Shack logo" className="w-7 h-7" />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cream">
              The Crawfish Shack
            </span>
          </div>
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Crawfish Shack. All rights
            reserved. Made with love &amp; cayenne in Pensacola, FL.
          </p>
        </div>
      </div>
    </footer>
  );
}
