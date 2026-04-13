
// VARIABLES

const flavorData = {
    almond: {
        title: "Almond Fizz",
        subtitle: "Smooth & Creamy",
        desc: "This is the flavor that started it all. We extract the oils from perfectly roasted almonds to create a rich, marzipan-like sweetness perfectly balanced by crisp carbonation.",
        ingredients: "Carbonated Water, Cane Sugar, Roasted Almond Extract.",
        img: "images/almond.png"
    },
    hazelnut: {
        title: "Hazelnut Dark",
        subtitle: "Bold & Roasted",
        desc: "A rich, deep roasted taste for those who want a bolder soda experience. If you love the profile of hazelnut coffee, this dark sparkling beverage is your new obsession.",
        ingredients: "Carbonated Water, Cane Sugar, Dark Roasted Hazelnut Extract.",
        img: "images/hazelnut.png"
    },
    pistachio: {
        title: "Pistachio Light",
        subtitle: "Fresh & Savory",
        desc: "Fresh, light, and perfectly balanced. This unique green soda features a subtle savory kick followed by a sweet finish, making it incredibly refreshing.",
        ingredients: "Carbonated Water, Cane Sugar, Pistachio Extract, Natural Green Color.",
        img: "images/pistachio.png"
    }
};

const reviewData = [
    { text: "I stopped drinking regular cola months ago. The Hazelnut Dark gives me the perfect afternoon boost.", stars: "⭐⭐⭐⭐⭐", author: "- Sarah M., Verified Buyer" },
    { text: "Pistachio Light is the most unique soda I have ever tasted. Not too sweet, perfectly refreshing.", stars: "⭐⭐⭐⭐⭐", author: "- James T., Verified Buyer" },
    { text: "The Almond Fizz tastes exactly like a premium Italian soda. I stock my fridge with it weekly.", stars: "⭐⭐⭐⭐⭐", author: "- Elena R., Verified Buyer" }
];

const flavorButtons = document.querySelectorAll(".int-btn");
const displayCard = document.querySelector("#dynamic-card");
const displayImg = document.querySelector("#dynamic-img");
const displayTitle = document.querySelector("#dynamic-title");
const displaySubtitle = document.querySelector("#dynamic-subtitle");
const displayDesc = document.querySelector("#dynamic-desc");
const displayIngredients = document.querySelector("#dynamic-ingredients");

const cartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartCounter = document.querySelector("#cart-counter");
const toastNotification = document.querySelector("#toast-notification");

const reviewTextElement = document.querySelector("#review-text");
const reviewStarsElement = document.querySelector("#review-stars");
const reviewAuthorElement = document.querySelector("#review-author");
const reviewBoxElement = document.querySelector(".review-box");

let currentFlavorData = null;
let cartCount = 0;
let currentReviewIndex = 0;



// FUNCTIONS

function removeActiveState(button) {
    button.classList.remove("active");
}

function swapCardContent() {
    displayImg.src = currentFlavorData.img;
    displayTitle.textContent = currentFlavorData.title;
    displaySubtitle.textContent = currentFlavorData.subtitle;
    displayDesc.textContent = currentFlavorData.desc;
    displayIngredients.innerHTML = `<strong>Key Ingredients:</strong> ${currentFlavorData.ingredients}`;
    
    displayCard.classList.remove("fade-anim");
}

function handleFlavorClick(event) {
    flavorButtons.forEach(removeActiveState);
    event.currentTarget.classList.add("active");

    const selectedFlavor = event.currentTarget.getAttribute("data-flavor");
    currentFlavorData = flavorData[selectedFlavor];

    displayCard.classList.add("fade-anim");
    setTimeout(swapCardContent, 200);
}

function attachButtonListener(button) {
    button.addEventListener("click", handleFlavorClick);
}

function hideToast() {
    toastNotification.classList.remove("show-toast");
}

function showToast() {
    toastNotification.classList.add("show-toast");
    setTimeout(hideToast, 3000);
}

function handleAddToCartClick() {
    cartCount++;
    cartCounter.textContent = `Cart (${cartCount})`;
    showToast();
}

function attachCartListener(button) {
    button.addEventListener("click", handleAddToCartClick);
}

function fadeOutReview() {
    reviewBoxElement.classList.add("fade-anim");
    setTimeout(updateReviewContent, 300);
}

function updateReviewContent() {
    if (currentReviewIndex >= reviewData.length - 1) {
        currentReviewIndex = 0;
    } else {
        currentReviewIndex++;
    }

    const nextReview = reviewData[currentReviewIndex];
    reviewTextElement.textContent = `"${nextReview.text}"`;
    reviewStarsElement.textContent = nextReview.stars;
    reviewAuthorElement.textContent = nextReview.author;

    reviewBoxElement.classList.remove("fade-anim");
}

function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const heroElements = document.querySelectorAll(".hero-content h1, .hero-content p, .hero-btn-wrap");
    
    if (heroElements.length > 0) {
        gsap.fromTo(heroElements, 
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                delay: 0.2
            }
        );
    }

    gsap.utils.toArray('.flavor-card, .product-card, .service-box, .text-box, .video-showcase, .split-image, .split-text, .social-img-box, .promo-box').forEach(function applyAnimation(element) {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });
    });
}


// EVENT LISTENERS & INITIALIZATION


if (flavorButtons.length > 0) {
    flavorButtons.forEach(attachButtonListener);
}

if (cartButtons.length > 0) {
    cartButtons.forEach(attachCartListener);
}

if (reviewBoxElement) {
    setInterval(fadeOutReview, 4000);
}

initGSAPAnimations();