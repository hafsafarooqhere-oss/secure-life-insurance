// ========================
// WEBSITE.JS - CLEAN VERSION
// ========================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------
    // 1. RESPONSIVE NAVBAR TOGGLE
    // ------------------------
    const toggleBtn = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(toggleBtn && navLinks){
        toggleBtn.addEventListener('click', () => navLinks.classList.toggle('d-none'));
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.add('d-none'));
        });
    }

    // ------------------------
    // 2. LAYOUT & TYPOGRAPHY ADJUSTMENTS
    // ------------------------
    function adjustLayout() {
        const width = window.innerWidth;

        // Header nav links for mobile
        if(navLinks && toggleBtn){
            if(width < 768){
                navLinks.classList.add('d-none');
                toggleBtn.classList.remove('d-none');
            } else {
                navLinks.classList.remove('d-none');
                toggleBtn.classList.add('d-none');
            }
        }

        // Detail page image & text stacking
        const detailCols = document.querySelectorAll('.section .row > div');
        if(detailCols.length === 2){
            if(width < 768){
                detailCols[0].classList.replace('col-md-6', 'col-12');
                detailCols[0].classList.add('mb-3');
                detailCols[1].classList.replace('col-md-6', 'col-12');
            } else {
                detailCols[0].classList.replace('col-12', 'col-md-6');
                detailCols[0].classList.remove('mb-3');
                detailCols[1].classList.replace('col-12', 'col-md-6');
            }
        }
    }

    function adjustTypography() {
        const width = window.innerWidth;
        const heroTitle = document.querySelector('.hero h1');
        const heroText = document.querySelector('.hero p');

        if(heroTitle && heroText){
            if(width < 576){ // Mobile
                heroTitle.style.fontSize = "1.8rem";
                heroText.style.fontSize = "0.9rem";
            } else if(width < 768){ // Tablet
                heroTitle.style.fontSize = "2.5rem";
                heroText.style.fontSize = "1.1rem";
            } else { // Desktop
                heroTitle.style.fontSize = "3rem";
                heroText.style.fontSize = "1.3rem";
            }
        }
    }

    function adjustFeatures() {
        const features = document.getElementById('planFeatures');
        if(!features) return;

        if(window.innerWidth < 576){
            features.style.columns = "1"; // single column
        } else if(window.innerWidth < 992){
            features.style.columns = "2"; // two columns
        } else {
            features.style.columns = "3"; // three columns
        }
    }

    // Run on page load
    adjustLayout();
    adjustTypography();
    adjustFeatures();

    // Run on window resize
    window.addEventListener('resize', () => {
        adjustLayout();
        adjustTypography();
        adjustFeatures();
    });

    // ------------------------
    // 3. REVIEW FORM HANDLER
    // ------------------------
    const reviewForm = document.getElementById('reviewForm');
    const displayArea = document.getElementById('displayArea');

    if(reviewForm && displayArea){
        reviewForm.addEventListener('submit', function(e){
            e.preventDefault();

            const userName = document.getElementById('name').value;
            const ratingEl = reviewForm.querySelector('.rating');
            const userRating = ratingEl ? ratingEl.value : "★★★★★";
            const userMsg = document.getElementById('message').value;
            const initials = userName.substring(0,2).toUpperCase();

            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="stars">${userRating}</div>
                <p class="review-text">"${userMsg}"</p>
                <div class="user-tag">
                    <div class="circle">${initials}</div>
                    <span class="user-name">${userName}</span>
                </div>
            `;

            displayArea.prepend(card);
            reviewForm.reset();
        });
    }

    // ------------------------
    // 4. DETAILS PAGE POPULATION
    // ------------------------
    const plans = {
        health: {
            title: "Health Insurance",
            description: "Comprehensive coverage for you and your family. Cashless treatment, hospitalization, surgeries, and emergency care.",
            price: "₹6,000 / year",
            features: ["Cashless Treatment", "Hospital Coverage", "Family Plan", "Tax Benefits"],
            image: "home imges/health.jpg"
        },
        car: {
            title: "Car Insurance",
            description: "Protect your vehicle against accidents, theft, fire, and third-party liabilities.",
            price: "₹5,000 / year",
            features: ["Accident Coverage", "Theft Protection", "Third Party Cover", "Roadside Assistance"],
            image: "home imges/cars.jpg"
        },
        home: {
            title: "Home Insurance",
            description: "Secure your home and property from fire, theft, and natural disasters.",
            price: "₹4,500 / year",
            features: ["Property Damage", "Fire Coverage", "Theft Protection", "Natural Disaster Cover"],
            image: "home imges/property.jpg"
        },
        life: {
            title: "Life Insurance",
            description: "Financial security for your loved ones in case of unforeseen events.",
            price: "₹8,000 / year",
            features: ["Life Cover", "Maturity Benefits", "Tax Savings", "Family Security"],
            image: "home imges/life.jpg"
        },
        travel: {
            title: "Travel Insurance",
            description: "Worldwide coverage for medical emergencies, trip cancellations, lost luggage, and travel delays.",
            price: "₹3,500 / trip",
            features: ["Medical Emergency", "Trip Cancellation", "Lost Baggage", "24x7 Support"],
            image: "home imges/travel.jpg"
        },
        business: {
            title: "Business Insurance",
            description: "Protect your business against financial losses, legal liabilities, and property damage.",
            price: "₹10,000 / year",
            features: ["Business Assets", "Legal Protection", "Employee Cover", "Risk Management"],
            image: "home imges/business.jpg"
        },
        policy: {
            title: "Policy Comparison",
            description: "Compare multiple insurance policies to find the best coverage at competitive prices.",
            price: "Free Service",
            features: ["Multiple Providers", "Easy Comparison", "Best Pricing", "Expert Advice"],
            image: "home imges/policy.jpg"
        },
        claim: {
            title: "Claim Assistance",
            description: "Fast and hassle-free claim support with expert guidance.",
            price: "Included with Policy",
            features: ["Quick Processing", "Expert Support", "Documentation Help", "24x7 Assistance"],
            image: "home imges/claim.jpg"
        },
        support: {
            title: "24×7 Customer Support",
            description: "Dedicated support anytime, anywhere for all your insurance needs.",
            price: "Free Support",
            features: ["24x7 Availability", "Phone & Email Support", "Expert Guidance", "Fast Response"],
            image: "home imges/support.jpg"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const planKey = urlParams.get('plan');

    if(planKey && plans[planKey]){
        const plan = plans[planKey];
        document.getElementById('planTitle').textContent = plan.title;
        document.getElementById('planDescription').textContent = plan.description;
        document.getElementById('planPrice').textContent = "Price: " + plan.price;
        const imgEl = document.getElementById('planImage');
        if(imgEl) {
            imgEl.src = plan.image;
            imgEl.alt = plan.title;
        }
        const featuresEl = document.getElementById('planFeatures');
        if(featuresEl){
            featuresEl.innerHTML = "";
            plan.features.forEach(f => {
                const li = document.createElement('li');
                li.textContent = f;
                featuresEl.appendChild(li);
            });
        }
    } else if(document.querySelector('.section.container')){
        document.querySelector('.section.container').innerHTML = "<h2>Plan Not Found</h2>";
    }

});