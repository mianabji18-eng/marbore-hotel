import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "hotel": "The Hotel",
        "rooms": "Rooms",
        "services": "Services",
        "gallery": "Gallery",
        "dashboard": "Dashboard",
        "book": "Book Now"
      },
      "hero": {
        "welcome": "Welcome to your refuge",
        "title": "MARBORÉ",
        "subtitle": "Boutique Hotel"
      },
      "booking": {
        "checkInOut": "Check-In - Check-Out",
        "search": "Search"
      },
      "about": {
        "title": "An experience of comfort and elegance",
        "description": "Discover the perfect balance between modern design and cozy warmth. At Marboré Boutique Hotel, every detail has been carefully selected to offer you an unforgettable stay. Enjoy our first-class facilities, from our relaxing indoor pool to our sun terrace, all designed for your maximum well-being."
      },
      "featured": {
        "premium": "Premium Accommodation",
        "suite": "Superior Suite",
        "suiteDesc": "Spacious and bright spaces with exclusive views. Equipped with a King size bed, air conditioning, flat-screen TV and a private bathroom with free toiletries. The perfect refuge after a day of exploration.",
        "viewDetails": "View details",
        "comfort": "Total Comfort",
        "standard": "Standard Triple Room",
        "standardDesc": "Intimate and cozy design. Enjoy high-quality bedding, free Wi-Fi connection and a smoke-free environment to guarantee your absolute rest.",
        "viewAll": "View all rooms"
      },
      "servicesTitle": "Services and Facilities",
      "servicesSubtitle": "Everything you need for a perfect stay.",
      "services": {
        "connectivity": "Connectivity",
        "connectivityDesc": "Free high-speed Wi-Fi throughout the property.",
        "wellness": "Wellness",
        "wellnessDesc": "Indoor pool open all year round and hot tub/jacuzzi.",
        "gastronomy": "Gastronomy",
        "gastronomyDesc": "Restaurant, bar, breakfast in the room and menus for special diets.",
        "comfortTitle": "Comfort",
        "comfortDesc": "Air conditioning, non-smoking rooms and daily maid service.",
        "security": "Security",
        "securityDesc": "24-hour reception, security cameras and key card access.",
        "extras": "Extras",
        "extrasDesc": "Sun terrace, concierge service and tourist information."
      },
      "gallery": {
        "title": "Our Spaces"
      },
      "footer": {
        "description": "Your trusted boutique hotel. An oasis of tranquility and good taste designed to make your trip a memorable experience.",
        "languages": "Languages: Spanish, English",
        "contact": "Contact",
        "address_1": "St 21 #3 - 96, District 2",
        "address_2": "Santa Marta, Magdalena",
        "phone": "Phone: +57 300 560 6643",
        "email": "Email: reservas@marborehotel.com",
        "policies": "Policies",
        "terms": "Terms and Conditions",
        "privacy": "Privacy Policy",
        "noSmoking": "No smoking in all accommodation",
        "noParking": "No parking available",
        "rights": "© 2026 Marboré Boutique Hotel. All rights reserved."
      },
      "guest": {
        "title": "Guests",
        "adults_one": "{{count}} Adult",
        "adults_other": "{{count}} Adults",
        "children_zero": "0 Children",
        "children_one": "{{count}} Child",
        "children_other": "{{count}} Children",
        "room": "room",
        "adults": "adults",
        "adultsDesc": "18 years or older",
        "childrenLabel": "children",
        "childrenDesc": "0-17 years"
      },
      "roomsPage": {
        "backHome": "Back to Home",
        "title": "Rooms",
        "heroTitle": "Our Spaces",
        "heroSubtitle": "Find your ideal refuge",
        "book": "Book",
        "imagePrev": "Previous image",
        "imageNext": "Next image",
        "goToImage": "Go to image",
        "roomsList": {
          "room1": {
            "name": "Superior Suite",
            "type": "Premium Accommodation",
            "description": "Spacious and bright spaces with exclusive views. Equipped with a King size bed, air conditioning, flat-screen TV and a private bathroom, private terrace with jacuzzi. The perfect refuge after a day of exploration.",
            "price": "$135 / night",
            "capacityText": "For 2 people"
          },
          "room2": {
            "name": "Standard Triple Room",
            "type": "Total Comfort",
            "description": "Intimate and cozy design. Enjoy high-quality beds, shared space for 3 people (children), free Wi-Fi connection and a smoke-free environment to guarantee your absolute rest.",
            "price": "$101 / night",
            "capacityText": "Up to 3 people"
          },
          "room3": {
            "name": "Superior Double Room",
            "type": "Absolute Luxury",
            "description": "The crown jewel of our hotel. It features a separate living room, 24/7 butler service and panoramic city views.",
            "price": "$68 / night",
            "capacityText": "For 2 people"
          },
          "room4": {
            "name": "Standard Double Room",
            "type": "Subtle Elegance",
            "description": "Perfect for romantic getaways. It features a Queen size bed, renovated vintage decoration, minibar and french-style balcony.",
            "price": "$65 / night",
            "capacityText": "For 2 people"
          }
        }
      },
      "bookingModal": {
        "title": "Book Your Stay",
        "checkIn": "Check-In Date",
        "checkOut": "Check-Out Date",
        "continue": "Continue to Booking",
        "cancel": "Cancel",
        "errorDates": "Please select valid check-in and check-out dates."
      },
      "checkout": {
        "title": "Complete Your Reservation",
        "guestDetails": "Guest Details",
        "name": "First Name",
        "surname": "Last Name",
        "email": "Email Address",
        "phone": "Phone Number",
        "terms": "Terms and Conditions",
        "termsDesc": "By completing this booking, you agree to our policies. Cancellations are free up to 48 hours before check-in. Local and foreign tourists are subject to applicable taxes.",
        "payment": "Payment Method",
        "cardNumber": "Card Number",
        "expiry": "MM/YY",
        "cvc": "CVC",
        "confirm": "Confirm Booking",
        "summary": "Booking Summary",
        "nights": "{{count}} night",
        "nights_plural": "{{count}} nights",
        "extras": "Extras & Services",
        "airportPickup": "Airport Pickup",
        "transport": "Private Transport",
        "total": "Total Amount",
        "success": "Booking successful! We have sent a confirmation email."
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "hotel": "El Hotel",
        "rooms": "Habitaciones",
        "services": "Servicios",
        "gallery": "Galería",
        "dashboard": "Dashboard",
        "book": "Reservar"
      },
      "hero": {
        "welcome": "Bienvenido a tu refugio",
        "title": "MARBORÉ",
        "subtitle": "Hotel Boutique"
      },
      "booking": {
        "checkInOut": "Llegada - Salida",
        "search": "Buscar"
      },
      "about": {
        "title": "Una experiencia de confort y elegancia",
        "description": "Descubra el equilibrio perfecto entre diseño moderno y calidez hogareña. En Marboré Hotel Boutique, cada detalle ha sido cuidadosamente seleccionado para ofrecerle una estancia inolvidable. Disfrute de nuestras instalaciones de primera clase, desde nuestra relajante piscina interior hasta nuestra terraza solárium, todo diseñado para su máximo bienestar."
      },
      "featured": {
        "premium": "Alojamiento Premium",
        "suite": "Suite Superior",
        "suiteDesc": "Espacios amplios y luminosos con vistas exclusivas. Equipada con cama King size, aire acondicionado, TV de pantalla plana y un baño privado con artículos de aseo gratuitos. El refugio perfecto tras un día de exploración.",
        "viewDetails": "Ver detalles",
        "comfort": "Confort Total",
        "standard": "Habitación Triple Estándar",
        "standardDesc": "Diseño íntimo y acogedor. Disfrute de ropa de cama de alta calidad, conexión Wi-Fi gratuita y un ambiente libre de humo para garantizar su descanso absoluto.",
        "viewAll": "Ver habitaciones"
      },
      "servicesTitle": "Servicios e Instalaciones",
      "servicesSubtitle": "Todo lo que necesita para una estancia perfecta.",
      "services": {
        "connectivity": "Conectividad",
        "connectivityDesc": "Wi-Fi gratuito de alta velocidad en todo el establecimiento.",
        "wellness": "Bienestar",
        "wellnessDesc": "Piscina interior abierta todo el año y bañera de hidromasaje/jacuzzi.",
        "gastronomy": "Gastronomía",
        "gastronomyDesc": "Restaurante, bar, desayuno en la habitación y menús para dietas especiales.",
        "comfortTitle": "Confort",
        "comfortDesc": "Aire acondicionado, habitaciones sin humo y servicio de limpieza diario.",
        "security": "Seguridad",
        "securityDesc": "Recepción 24 horas, cámaras de seguridad y acceso con tarjeta.",
        "extras": "Extras",
        "extrasDesc": "Terraza solárium, servicio de conserjería e información turística."
      },
      "gallery": {
        "title": "Nuestros Espacios"
      },
      "footer": {
        "description": "Su hotel boutique de confianza. Un oasis de tranquilidad y buen gusto diseñado para hacer de su viaje una experiencia memorable.",
        "languages": "Idiomas: Español, Inglés",
        "contact": "Contacto",
        "address_1": "Cl. 21 #3 - 96, Comuna 2",
        "address_2": "Santa Marta, Magdalena",
        "phone": "Teléfono: +57 300 560 6643",
        "email": "Email: reservas@marborehotel.com",
        "policies": "Políticas",
        "terms": "Términos y Condiciones",
        "privacy": "Política de Privacidad",
        "noSmoking": "Prohibido fumar en todo el alojamiento",
        "noParking": "No hay parking disponible",
        "rights": "© 2026 Marboré Hotel Boutique. Todos los derechos reservados."
      },
      "guest": {
        "title": "Huéspedes",
        "adults_one": "{{count}} Adulto",
        "adults_other": "{{count}} Adultos",
        "children_zero": "0 Niños",
        "children_one": "{{count}} Niño",
        "children_other": "{{count}} Niños",
        "room": "habitación",
        "adults": "adultos",
        "adultsDesc": "18 años o más",
        "childrenLabel": "niños",
        "childrenDesc": "0-17 años"
      },
      "roomsPage": {
        "backHome": "Volver al Inicio",
        "title": "Habitaciones",
        "heroTitle": "Nuestros Espacios",
        "heroSubtitle": "Encuentre su refugio ideal",
        "book": "Reservar",
        "imagePrev": "Imagen anterior",
        "imageNext": "Siguiente imagen",
        "goToImage": "Ir a la imagen",
        "roomsList": {
          "room1": {
            "name": "Suite Superior",
            "type": "Alojamiento Premium",
            "description": "Espacios amplios y luminosos con vistas exclusivas. Equipada con cama King size, aire acondicionado, TV de pantalla plana y un baño privado, terraza privada con jacuzzi. El refugio perfecto tras un día de exploración.",
            "price": "$135 / noche",
            "capacityText": "Para 2 personas"
          },
          "room2": {
            "name": "Habitación Triple Estándar",
            "type": "Confort Total",
            "description": "Diseño íntimo y acogedor. Disfrute de camas de alta calidad, espacio compartido para 3 personas (niños), conexión Wi-Fi gratuita y un ambiente libre de humo para garantizar su descanso absoluto.",
            "price": "$101 / noche",
            "capacityText": "Hasta 3 personas"
          },
          "room3": {
            "name": "Habitación Superior Doble",
            "type": "Lujo Absoluto",
            "description": "La joya de la corona de nuestro hotel. Cuenta con sala de estar separada, servicio de mayordomo 24/7 y vistas panorámicas de la ciudad.",
            "price": "$68 / noche",
            "capacityText": "Para 2 personas"
          },
          "room4": {
            "name": "Habitación Doble Estándar",
            "type": "Elegancia Sutil",
            "description": "Perfecta para escapadas románticas. Cuenta con cama Queen size, decoración de época renovada, minibar y balcón estilo francés.",
            "price": "$65 / noche",
            "capacityText": "Para 2 personas"
          }
        }
      },
      "bookingModal": {
        "title": "Reserva tu Estancia",
        "checkIn": "Fecha de Entrada",
        "checkOut": "Fecha de Salida",
        "continue": "Continuar a Reserva",
        "cancel": "Cancelar",
        "errorDates": "Por favor, seleccione fechas válidas de entrada y salida."
      },
      "checkout": {
        "title": "Complete su Reserva",
        "guestDetails": "Datos del Huésped",
        "name": "Nombre",
        "surname": "Apellidos",
        "email": "Correo Electrónico",
        "phone": "Teléfono",
        "terms": "Términos y Condiciones",
        "termsDesc": "Al completar esta reserva, acepta nuestras políticas. Las cancelaciones son gratuitas hasta 48 horas antes del check-in. Turistas locales y extranjeros están sujetos a los impuestos aplicables.",
        "payment": "Método de Pago",
        "cardNumber": "Número de Tarjeta",
        "expiry": "MM/AA",
        "cvc": "CVC",
        "confirm": "Confirmar Reserva",
        "summary": "Resumen de Reserva",
        "nights": "{{count}} noche",
        "nights_plural": "{{count}} noches",
        "extras": "Extras y Servicios",
        "airportPickup": "Recogida en Aeropuerto",
        "transport": "Transporte Privado",
        "total": "Total a Pagar",
        "success": "¡Reserva exitosa! Hemos enviado un correo de confirmación."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // default language
    fallbackLng: "es",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
