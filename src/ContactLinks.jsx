// ContactLinks.jsx
export default function ContactLinks() {
  const email = "qoldoshevjavohir01@gmail.com";
  const subject = "Salom";
  const body = "Assalomu alaykum!";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      <a href={mailto} className="rounded-2xl p-4 shadow hover:shadow-md transition"
         aria-label="Email yuborish">
        ✉️ Email
        <div className="text-sm text-gray-500">{email}</div>
      </a>

      <a href="tel:+998901234567" className="rounded-2xl p-4 shadow hover:shadow-md transition"
         aria-label="Qo'ng'iroq qilish">
        ☎️ Telefon
        <div className="text-sm text-gray-500">+998 90 123 45 67</div>
      </a>

      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
         className="rounded-2xl p-4 shadow hover:shadow-md transition" aria-label="GitHub profilim">
        🐙 GitHub
        <div className="text-sm text-gray-500">github.com/yourusername</div>
      </a>

      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
         className="rounded-2xl p-4 shadow hover:shadow-md transition">
        💼 LinkedIn
      </a>

      <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer"
         className="rounded-2xl p-4 shadow hover:shadow-md transition">
        ✈️ Telegram
      </a>

      <a href="https://wa.me/998901234567" target="_blank" rel="noopener noreferrer"
         className="rounded-2xl p-4 shadow hover:shadow-md transition">
        💬 WhatsApp
      </a>

      <a href="/cv/Javlon_Karimov_CV.pdf" download
         className="rounded-2xl p-4 shadow hover:shadow-md transition">
        📄 CV ni yuklab olish
      </a>

      {/* Emailni tez nusxalash knopkasi (ixtiyoriy) */}
      <button
        onClick={() => navigator.clipboard.writeText(email)}
        className="rounded-2xl p-4 shadow hover:shadow-md transition text-left"
        aria-label="Email manzilini nusxalash"
      >
        📋 Emailni nusxalash
        <div className="text-sm text-gray-500">{email}</div>
      </button>
    </div>
  );
}
