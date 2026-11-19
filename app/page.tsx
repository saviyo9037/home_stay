"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronRight, Leaf, Menu, MoveUpRight, ShieldCheck, Sparkles, Users, Waves, X } from "lucide-react";

const stays = [
  { name: "The Heritage House", type: "A timeless Kerala home", price: "₹4,500", guests: "2–4 guests", image: "https://images.scottdunn.com/t_thumbnail_img/india/accommodation/philip-kutty%27s-farm/778306-interior-philip-kutty%27s-farm.jpeg", tag: "MOST LOVED", number: "01" },
  { name: "The Backwater Cottage", type: "Wake up beside the water", price: "₹3,200", guests: "2 guests", image: "https://www.moonisland.in/assets/homestay.webp", tag: "WATERFRONT", number: "02" },
  { name: "The Garden Suite", type: "A private little sanctuary", price: "₹5,800", guests: "2–3 guests", image: "https://kumarakom.com/uploads/hotel_featured_photos/79835ca325f7f5b7a145ff149c822bf8.webp", tag: "SLOW LIVING", number: "03" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guests, setGuests] = useState("2 guests");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [sent, setSent] = useState(false);
  const whatsapp = "https://wa.me/?text=" + encodeURIComponent(`Hello Malaram! I'd like to enquire about a stay from ${arrival || "my preferred date"} to ${departure || "my preferred date"} for ${guests}. Please share availability.`);

  return <main id="top">
    <div className="topline"><span>AN INTIMATE KERALA HOMESTAY</span><span className="topline-center"><Leaf size={12}/> ROOTED IN NATURE, MADE FOR YOU</span><a href="#booking">ENQUIRE NOW <ArrowUpRight size={12}/></a></div>
    <nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark"><Leaf size={21}/></span><span className="brand-word">malaram<small>THE KERALA HOMESTAY</small></span></a>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#stay" onClick={()=>setMenuOpen(false)}>The rooms</a><a href="#story" onClick={()=>setMenuOpen(false)}>Our story</a><a href="#experience" onClick={()=>setMenuOpen(false)}>Experiences</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Find us</a>
        <a className="mobile-nav-cta" href="#booking" onClick={()=>setMenuOpen(false)}>Plan your stay <ArrowUpRight size={15}/></a>
      </div>
      <a className="nav-cta" href="#booking">Plan your stay <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </nav>

    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line"/> A HIDEAWAY IN GOD'S OWN COUNTRY</p>
        <h1>Find your<br/>own kind of <em>quiet.</em></h1>
        <p className="hero-description">A soulful stay shaped by Kerala's old-world charm. Come for the calm, stay for the feeling of being somewhere you belong.</p>
        <div className="hero-actions"><a className="button-dark" href="#stay">Explore the stay <ArrowUpRight size={16}/></a><a className="under-link" href="#story">A little about us <ArrowDownRight size={15}/></a></div>
        <div className="hero-foot"><span><Waves size={15}/> THE BACKWATERS, KERALA</span><span>10° 05' N &nbsp; 76° 20' E</span></div>
      </div>
      <div className="hero-visual"><div className="hero-photo"/><div className="photo-stamp"><span>THE ART OF</span><b>SLOW<br/>LIVING</b><i>EST. IN KERALA</i></div><div className="hero-image-caption"><span>01 / 04</span><span>A PLACE TO PAUSE</span></div></div>
      <div className="hero-vertical">A HOME AWAY FROM THE EVERYDAY</div>
    </section>

    <section className="intro section-wrap" id="story">
      <div className="intro-kicker"><span>01</span><span className="kicker-line"/><span>THE MALARAM STORY</span></div>
      <div className="intro-layout"><h2>More than a stay.<br/><em>A feeling.</em></h2><div className="intro-text"><p className="intro-lead">There is a certain magic to a Kerala home. The soft afternoon light, the sound of rain on old tiles, the welcome that feels like family.</p><p>Malaram is inspired by that feeling. A thoughtful retreat where traditional architecture, lush green surroundings and warm local hospitality come together — so you can slow down and simply be.</p><a className="under-link" href="#experience">Discover the Malaram way <ArrowUpRight size={15}/></a></div></div>
      <div className="intro-image-strip"><div className="strip-image strip-one"/><div className="strip-note"><Leaf size={19}/><span>Made of little moments.<br/><i>And memories that last.</i></span></div><div className="strip-image strip-two"/></div>
    </section>

    <section className="stay-section" id="stay"><div className="section-wrap">
      <div className="section-topline"><div className="intro-kicker"><span>02</span><span className="kicker-line"/><span>STAY A LITTLE LONGER</span></div><span className="section-aside">THOUGHTFULLY MADE SPACES</span></div>
      <div className="section-heading"><h2>A room for<br/><em>your kind of rest.</em></h2><p>Each space has its own character, with the comforts you need and the quiet you came looking for.</p></div>
      <div className="stay-grid">{stays.map((stay,i)=><article className="stay-card" key={stay.name}><div className="stay-photo" style={{backgroundImage:`url(${stay.image})`}}><span className="stay-tag">{stay.tag}</span><span className="stay-number">{stay.number}</span><button className="round-arrow" aria-label={`Enquire about ${stay.name}`} onClick={()=>document.getElementById("booking")?.scrollIntoView({behavior:"smooth"})}><ArrowUpRight size={19}/></button></div><div className="stay-info"><div><span className="stay-type">{stay.type}</span><h3>{stay.name}</h3><div className="stay-meta"><Users size={13}/>{stay.guests}<span className="meta-dot"/>Breakfast available</div></div><div className="stay-price"><b>{stay.price}</b><small>PER NIGHT</small></div></div></article>)}</div>
      <p className="disclaimer">Room names, photographs and indicative rates are sample content for this design preview.</p>
    </div></section>

    <section className="manifesto"><div className="manifesto-photo"/><div className="manifesto-panel"><p className="eyebrow eyebrow-light">A DIFFERENT KIND OF GETAWAY</p><span className="manifesto-quote">“</span><h2>Leave the rush.<br/>Take home <em>the calm.</em></h2><p>Unhurried mornings. Food made with love. A little more time for the things that matter.</p><a href="#booking" className="manifesto-link">Make it your escape <ArrowUpRight size={16}/></a><span className="manifesto-sign">The Malaram feeling</span></div></section>

    <section className="experience section-wrap" id="experience"><div className="section-topline"><div className="intro-kicker"><span>03</span><span className="kicker-line"/><span>THE LOCAL WAY OF LIFE</span></div><span className="section-aside">TAKE IT ALL IN</span></div><div className="section-heading"><h2>Small things.<br/><em>Beautiful days.</em></h2><p>Find joy in the everyday rituals and simple experiences that make Kerala feel like nowhere else.</p></div>
      <div className="experience-grid"><article className="experience-item exp-large"><div className="exp-image exp-one"/><span>01 &nbsp; / &nbsp; OUT IN THE GREEN</span><h3>Follow the slower path.</h3><p>Wander through coconut groves, village lanes and little corners of green.</p></article><article className="experience-item"><div className="exp-image exp-two"/><span>02 &nbsp; / &nbsp; FROM OUR KITCHEN</span><h3>A taste of home.</h3><p>Enjoy appam, puttu and comforting Kerala flavours made fresh.</p></article><article className="experience-item"><div className="exp-image exp-three"/><span>03 &nbsp; / &nbsp; ON THE WATER</span><h3>Drift into the day.</h3><p>Take a gentle canoe ride and see the backwaters at their best.</p></article></div>
    </section>

    <section className="booking-section" id="booking"><div className="booking-image"/><div className="booking-overlay"/><div className="booking-content"><div className="booking-heading"><p className="eyebrow eyebrow-light">04 &nbsp; / &nbsp; YOUR TIME IN KERALA</p><h2>Ready when<br/><em>you are.</em></h2><p>Share your dates and we'll help you plan a stay worth slowing down for.</p></div><form className="booking-form" onSubmit={e=>{e.preventDefault();setSent(true);window.open(whatsapp,"_blank");}}><div className="form-field"><label htmlFor="arrival">CHECK IN</label><div><CalendarDays size={15}/><input id="arrival" type="date" required value={arrival} onChange={e=>setArrival(e.target.value)}/></div></div><div className="form-field"><label htmlFor="departure">CHECK OUT</label><div><CalendarDays size={15}/><input id="departure" type="date" required min={arrival} value={departure} onChange={e=>setDeparture(e.target.value)}/></div></div><div className="form-field"><label htmlFor="guests">GUESTS</label><div><Users size={15}/><select id="guests" value={guests} onChange={e=>setGuests(e.target.value)}><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></div></div><button className="book-button" type="submit">Check availability <ArrowUpRight size={17}/></button></form>{sent&&<span className="form-note"><Check size={14}/> Your enquiry is ready in WhatsApp.</span>}<div className="booking-trust"><span><ShieldCheck size={14}/> NO ADVANCE PAYMENT</span><span><Sparkles size={14}/> PERSONAL RESPONSE</span></div></div></section>

    <footer id="contact"><div className="footer-main"><div><a className="brand brand-footer" href="#top"><span className="brand-mark"><Leaf size={20}/></span><span className="brand-word">malaram<small>THE KERALA HOMESTAY</small></span></a><p className="footer-tagline">A slower stay.<br/>A warmer welcome.</p></div><div className="footer-nav"><span>EXPLORE</span><a href="#stay">The rooms</a><a href="#story">Our story</a><a href="#experience">Experiences</a></div><div className="footer-nav"><span>GET IN TOUCH</span><a href="#booking">Plan your stay</a><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp us <MoveUpRight size={13}/></a><a href="#top">Back to top ↑</a></div><div className="footer-note">A little piece of Kerala<br/>to call your own. <Leaf size={22}/></div></div><div className="footer-bottom"><span>© 2026 MALARAM HOMESTAY · DESIGN PREVIEW</span><span>MADE WITH CARE, IN KERALA</span></div></footer>
  </main>;
}
