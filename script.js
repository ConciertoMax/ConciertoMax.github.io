// Función para hacer scroll suave a las secciones
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const header = document.querySelector(".header")

  if (element && header) {
    const headerHeight = header.offsetHeight
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

// Función del countdown
function updateCountdown() {
  const targetDate = new Date("2025-08-22T18:00:00").getTime()
  const now = new Date().getTime()
  const difference = targetDate - now

  const countdownElement = document.getElementById("countdown")

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    countdownElement.innerHTML = `
            <div class="countdown-item">
                <div class="countdown-box">
                    <span class="countdown-number">${String(days).padStart(2, "0")}</span>
                    <span class="countdown-label">Días</span>
                </div>
            </div>
            <div class="countdown-item">
                <div class="countdown-box">
                    <span class="countdown-number">${String(hours).padStart(2, "0")}</span>
                    <span class="countdown-label">Horas</span>
                </div>
            </div>
            <div class="countdown-item">
                <div class="countdown-box">
                    <span class="countdown-number">${String(minutes).padStart(2, "0")}</span>
                    <span class="countdown-label">Min</span>
                </div>
            </div>
            <div class="countdown-item">
                <div class="countdown-box">
                    <span class="countdown-number">${String(seconds).padStart(2, "0")}</span>
                    <span class="countdown-label">Seg</span>
                </div>
            </div>
        `
  } else {
    countdownElement.innerHTML = '<p class="countdown-finished">¡El concierto ha comenzado!</p>'
  }
}

// Función para toggle FAQ
function toggleFAQ(button) {
  const answer = button.nextElementSibling
  const icon = button.querySelector(".faq-icon")
  const isActive = answer.classList.contains("active")

  // Cerrar todas las FAQ abiertas
  document.querySelectorAll(".faq-answer").forEach((item) => {
    item.classList.remove("active")
  })

  document.querySelectorAll(".faq-icon").forEach((item) => {
    item.textContent = "+"
    item.style.transform = "rotate(0deg)"
  })

  // Si no estaba activa, abrirla
  if (!isActive) {
    answer.classList.add("active")
    icon.textContent = "−"
    icon.style.transform = "rotate(180deg)"
  }
}

// Funciones para abrir enlaces externos
function openWhatsApp() {
  window.open(
    "https://wa.me/51907862505?text=Hola,%20quiero%20información%20sobre%20el%20concierto%20de%20Max%20Castro",
    "_blank",
  )
}

function openWhatsAppVIP() {
  window.open(
    "https://wa.me/51907862505?text=Hola,%20quiero%20solicitar%20invitaciones%20VIP%20para%20el%20concierto",
    "_blank",
  )
}

function openGoogleMaps() {
  window.open(
    "https://www.google.com/maps/place/Complejo+Deportivo+de+Paucarbamba/@-9.9414658,-76.2426262,18.25z/data=!4m6!3m5!1s0x91a7c3002e3aa0bd:0x4164d14661b12a1d!8m2!3d-9.9413235!4d-76.2426643!16s%2Fg%2F11w3_d6hdt?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
    "_blank",
  )
}

function openFacebook() {
  window.open("https://www.facebook.com/ComunidadVidaCristianaoficial", "_blank")
}

function openInstagram() {
  window.open("https://www.instagram.com/comunidad_vida_cristiana/", "_blank")
}

function openTikTok() {
  window.open("https://www.tiktok.com/@esperanza_peru.huanuco", "_blank")
}

// Inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  // Iniciar el countdown
  updateCountdown()

  // Actualizar el countdown cada segundo
  setInterval(updateCountdown, 1000)

  // Agregar animaciones de entrada cuando los elementos son visibles
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos para animaciones
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
})
