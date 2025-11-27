import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Welcome to Miss Tania Ibichuk's Sanctuary",
            "book_appointment": "Book Appointment",
            "admin_panel": "Admin Panel",
            "name": "Name",
            "phone": "Phone Number",
            "service": "Service",
            "time": "Preferred Time",
            "notes": "Notes",
            "submit": "Submit Request",
            "success_message": "Request submitted successfully!",
            "error_message": "Failed to submit request.",
            "book_now": "Book Now",
            "learn_more": "Learn More",
            "our_services": "Our Services",
            "ready to relax": "Ready to Relax?",
            "description": "Begin your journey to complete relaxation and wellness. Book your appointment today and experience the magic of healing touch.",
            "book_subtitle": "Book your relaxing massage experience",
            "name_placeholder": "Enter your full name",
            "phone_placeholder": "Enter your phone number",
            "notes_placeholder": "Any special requests or health considerations...",
            "submitting": "Booking...",
            "back_to_home": "Back to Home",
            "services": {
                "GeneralMassage": "General Massage",
                "therapeutic and preventive": "Therapeutic & Preventive",
                "sports": "Sports Massage",
                "lymphatic drainage": "Lymphatic Drainage",
                "honey": "Honey Massage",
                "anti-Cellulite": "Anti-Cellulite Massage",
                "swedish": "Swedish Massage",
                "deep_tissue": "Deep Tissue Massage",
                "aromatherapy": "Aromatherapy"
            },
            "admin": {
                "title": "Admin Dashboard",
                "no_requests": "No requests found.",
                "id": "ID",
                "client": "Client",
                "details": "Details",
                "status": "Status",
                "actions": "Actions"
            }
        }
    },
    uk: {
        translation: {
            "welcome": "Ласкаво просимо до Санктуарію Пані Тані Ібічук",
            "book_appointment": "Записатися на прийом",
            "admin_panel": "Адмін панель",
            "name": "Ім'я",
            "phone": "Номер телефону",
            "service": "Послуга",
            "time": "Бажаний час",
            "notes": "Примітки",
            "submit": "Надіслати запит",
            "success_message": "Запит успішно надіслано!",
            "error_message": "Не вдалося надіслати запит.",
            "book_now": "Забронювати",
            "learn_more": "Дізнатися більше",
            "our_services": "Наші Послуги",
            "ready to relax": "Готові розслабитися?",
            "description": "Почніть свою подорож до повного розслаблення та благополуччя. Забронюйте сеанс сьогодні та відчуйте магію цілющего дотику.",
            "book_subtitle": "Забронюйте свій розслабляючий масаж",
            "name_placeholder": "Введіть ваше повне ім'я",
            "phone_placeholder": "Введіть ваш номер телефону",
            "notes_placeholder": "Будь-які особливі побажання або проблеми зі здоров'ям...",
            "submitting": "Бронювання...",
            "back_to_home": "На головну",
            "services": {
                "GeneralMassage": "Загальний масаж",
                "therapeutic and preventive": "Терапевтичний та профілактичний",
                "sports": "Спортивний масаж",
                "lymphatic drainage": "Лімфодренажний масаж",
                "honey": "Медовий масаж",
                "anti-Cellulite": "Антицелюлітний масаж",
                "swedish": "Шведський масаж",
                "deep_tissue": "Глибокий масаж тканин",
                "aromatherapy": "Ароматерапія"
            },
            "admin": {
                "title": "Панель адміністратора",
                "no_requests": "Запитів не знайдено.",
                "id": "ID",
                "client": "Клієнт",
                "details": "Деталі",
                "status": "Статус",
                "actions": "Дії"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;