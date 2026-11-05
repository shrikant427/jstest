(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d={"ac-synchronous":{title:"AC Synchronous Motors",desc:"High-torque AC synchronous motors perfect for industrial automation and precise control.",items:["10 KG","14 KG","2 KG","20 KG","28 KG","3 KG","40 KG","60 KG","7 KG","80 KG"]},pmdc:{title:"PMDC Motors",desc:"Permanent Magnet DC Motors featuring high efficiency and compact footprints.",items:["Standard PMDC Models","Custom Embedded PMDC"]},geared:{title:"AC Synchronous Geared Motors",desc:"Integrated gearboxes with synchronous motors for high torque at low speeds.",items:["Standard Box Ratio","Heavy Duty Geared"]},stepping:{title:"DC Stepping Motors",desc:"Precision control for robotics and exact positioning requirements.",items:["Nema 17","Nema 23","Nema 34 Options"]},"solid-yoke":{title:"Solid Yoke DC Motors",desc:"Robust solid yoke construction for heavy industrial applications.",items:["Industrial Yoke DC 1","Industrial Yoke DC 2"]}},s={home:()=>`
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Driving Industrial Automation Forward</h1>
        <p class="hero-subtitle">Premium manufacturer of AC Synchronous, PMDC, Geared, and Stepping Motors for global industrial needs.</p>
        <div class="hero-actions">
          <a href="#/products/ac-synchronous" class="btn btn-primary">Explore Products</a>
          <a href="#/contact" class="btn btn-outline">Contact Sales</a>
        </div>
      </div>
    </section>
    
    <section class="container" style="padding: var(--space-6) 0;">
      <div class="section-header">
        <h2>Why Choose Racekon?</h2>
        <p>Decades of engineering excellence meeting modern automation requirements.</p>
      </div>
      <div class="grid-3">
        <div class="card">
          <h3>Unmatched Quality</h3>
          <p>State-of-the-art manufacturing unit equipped with precision testing systems ensuring zero defects.</p>
        </div>
        <div class="card">
          <h3>Wide Range</h3>
          <p>From 2 KG to 80 KG synchronous motors, PMDC variants, and precision stepping setups.</p>
        </div>
        <div class="card">
          <h3>Global Reach</h3>
          <p>Trusted by clientele across Pan India and exported to various international markets.</p>
        </div>
      </div>
    </section>
  `,about:()=>`
    <section class="container">
      <div class="section-header">
        <h1>About Us</h1>
        <p>Reliable and committed partner in your growth</p>
      </div>
      <div class="card" style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
        <p>RACEKON INDUSTRIES PVT LTD is one of the leading manufacturers and suppliers of AC Synchronous Motors, PMDC Motors, Induction Motors, and Geared motors. Our range of products carries a stamp of quality. We can deliver large volumes of motors within a committed time frame. Satisfied customers have helped us grow our business over the period.</p>
        <p>We pride ourselves on being a reliable and committed partner in our customer's growth. Our valuable products are always within reach to customers across Pan India and abroad too.</p>
        <p>The company has a completely functional state-of-the-art manufacturing unit equipped with modern machinery. Furthermore, there is a Quality Control unit manned by a team of skilled testers and quality controllers. We conduct stringent tests at various quality parameters right from the obtainment of raw material to the delivery of the final consignment.</p>
      </div>
    </section>
  `,qualityPolicy:()=>`
    <section class="container">
      <div class="section-header">
        <h1>Quality Policy</h1>
        <p>Our commitment to excellence</p>
      </div>
      <div class="card" style="max-width: 800px; margin: 0 auto;">
        <p>At Racekon, quality is not an act; it is a habit. We employ rigorous testing standards and follow global compliance certificates to ensure each motor outlasts expected operating life cycles.</p>
        <ul>
          <li style="margin-top: 1rem;">100% End-of-line testing for all synchronous units.</li>
          <li style="margin-top: 1rem;">ISO Standard compliance across all manufacturing processes.</li>
          <li style="margin-top: 1rem;">Continuous R&D to improve electrical and mechanical efficiency.</li>
        </ul>
      </div>
    </section>
  `,networkSupport:()=>`
    <section class="container">
      <div class="section-header">
        <h1>Network Support</h1>
        <p>Pan-India and Global Dealer Network</p>
      </div>
      <div class="card" style="max-width: 800px; margin: 0 auto; text-align: center;">
        <p>Find an authorized Racekon dealer near you, or access technical schematics and CAD drawings through our priority support channels.</p>
        <div style="margin-top: 2rem;">
          <a href="#/contact" class="btn btn-primary">Find a Dealer</a>
        </div>
      </div>
    </section>
  `,contact:()=>`
    <section class="container">
      <div class="section-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our sales and technical teams.</p>
      </div>
      <div class="grid-3" style="max-width: 900px; margin: 0 auto;">
        <div class="card" style="grid-column: span 1;">
          <h3>Office Details</h3>
          <p><strong>Racekon Industries Pvt. Ltd.</strong></p>
          <p>Delhi, India</p>
          <br>
          <p><strong>Phone:</strong><br>+91-9999458880</p>
          <br>
          <p><strong>Email:</strong><br>info@racekon.com</p>
        </div>
        <div class="card" style="grid-column: span 2;">
          <form onsubmit="event.preventDefault(); alert('Message sent successfully!');">
            <div class="form-group">
              <label class="form-label" for="name">Full Name</label>
              <input type="text" id="name" class="form-control" required placeholder="John Doe">
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email Address</label>
              <input type="email" id="email" class="form-control" required placeholder="john@example.com">
            </div>
            <div class="form-group">
              <label class="form-label" for="message">Message</label>
              <textarea id="message" class="form-control" rows="4" required placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,warranty:()=>`
    <section class="container">
      <div class="section-header">
        <h1>Warranty Verification</h1>
        <p>Check the warranty status of your Racekon product instantly.</p>
      </div>
      <div class="card" style="max-width: 600px; margin: 0 auto; text-align: center;">
        <p style="margin-bottom: var(--space-4);">Please enter your product's Serial Number exactly as it appears on the chassis label.</p>
        <form onsubmit="event.preventDefault(); window.checkWarranty();">
          <div class="form-group">
            <input type="text" id="warranty-sn" class="form-control" style="font-size: 1.25rem; text-align: center;" required placeholder="e.g. RK-2024-SN-00123">
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Verify Warranty</button>
        </form>
        <div id="warranty-result" style="margin-top: var(--space-4); display: none; padding-top: var(--space-4); border-top: 1px solid var(--border);">
           <!-- Dynamically injected -->
        </div>
      </div>
    </section>
  `,product:o=>{const e=d[o];if(!e)return`
      <section class="container" style="text-align: center;">
        <h1>Product Category Not Found</h1>
        <a href="#/" class="btn btn-primary" style="margin-top: var(--space-4);">Return Home</a>
      </section>
    `;const n=e.items.map(i=>`
      <div class="card" style="text-align:center;">
        <h3 style="margin-bottom:0;">${i} Motor</h3>
        <p style="font-size:0.85rem; margin-top:0.5rem;">Standard configuration</p>
        <a href="#/contact" class="btn btn-outline" style="margin-top:1rem; width:100%;">Request Quote</a>
      </div>
    `).join("");return`
      <section class="container">
        <div class="section-header">
          <h1>${e.title}</h1>
          <p>${e.desc}</p>
        </div>
        <div class="grid-3">
          ${n}
        </div>
      </section>
    `}},a=document.getElementById("router-view");function l(){const e=(window.location.hash||"#/").replace("#","");if(window.scrollTo({top:0,behavior:"smooth"}),document.querySelector(".nav-links").classList.remove("show"),document.querySelector(".menu-toggle").setAttribute("aria-expanded","false"),e===""||e==="/")a.innerHTML=s.home();else if(e==="/about-us")a.innerHTML=s.about();else if(e==="/contact")a.innerHTML=s.contact();else if(e==="/quality-policy")a.innerHTML=s.qualityPolicy();else if(e==="/network-support")a.innerHTML=s.networkSupport();else if(e==="/warranty")a.innerHTML=s.warranty();else if(e.startsWith("/products/")){const n=e.split("/products/")[1];a.innerHTML=s.product(n)}else a.innerHTML='<section class="container"><h1>404 Not Found</h1></section>'}window.checkWarranty=function(){const o=document.getElementById("warranty-sn").value.trim(),e=document.getElementById("warranty-result");e.style.display="block",e.innerHTML='<div class="spinner" style="margin: 0 auto;"></div>',setTimeout(()=>{o.length>5?e.innerHTML=`
        <div style="background: rgba(44, 151, 75, 0.1); color: #2ea043; padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(44, 151, 75, 0.2);">
          <h3 style="color: inherit; margin-bottom: 0.5rem;">Valid Warranty ✓</h3>
          <p style="margin-bottom:0; color: inherit;">Serial Number <strong>${o}</strong> is registered under RACEKON INDUSTRIES.</p>
        </div>
      `:e.innerHTML=`
        <div style="background: rgba(207, 34, 46, 0.1); color: #cf222e; padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(207, 34, 46, 0.2);">
          <h3 style="color: inherit; margin-bottom: 0.5rem;">Not Found ✕</h3>
          <p style="margin-bottom:0; color: inherit;">No active warranty found for that serial number.</p>
        </div>
      `},800)};window.addEventListener("hashchange",l);document.addEventListener("DOMContentLoaded",()=>{l();const o=document.querySelector(".menu-toggle"),e=document.querySelector(".nav-links");o.addEventListener("click",()=>{const n=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",!n),e.classList.toggle("show")})});
