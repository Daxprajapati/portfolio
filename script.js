document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".sec-two-right");
    // Bars alag class ke naam se
    const bars = [
        { el: document.querySelector(".sec-two-right-skills-box-data-box-data"), target: 90, text: section.querySelectorAll(".sec-two-right-skills-box-data p:last-child")[0] },
        { el: document.querySelector(".sec-two-right-skills-box-data-box-data-one"), target: 87, text: section.querySelectorAll(".sec-two-right-skills-box-data p:last-child")[1] },
        { el: document.querySelector(".sec-two-right-skills-box-data-box-data-two"), target: 85, text: section.querySelectorAll(".sec-two-right-skills-box-data p:last-child")[2] },
        { el: document.querySelector(".sec-two-right-skills-box-data-box-data-three"), target: 80, text: section.querySelectorAll(".sec-two-right-skills-box-data p:last-child")[3] },
    ];

    function animateBars() {
        bars.forEach((barObj, index) => {
            let current = 0;

            setTimeout(() => {
                const interval = setInterval(() => {
                    if (current >= barObj.target) {
                        clearInterval(interval);
                    } else {
                        current++;
                        barObj.el.style.width = current + "%";
                        barObj.text.textContent = current + "%";
                    }
                }, 15);
            }, index * 500); // stagger effect
        });
    }

    // Intersection Observer
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});





function sendWhatsAppMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = `Hello, I would like to request a quote."\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  var whatsappURL = `https://wa.me/+917490830497?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL);
}

