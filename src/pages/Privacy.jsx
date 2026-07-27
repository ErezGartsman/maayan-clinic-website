import ContactBanner from "../components/sections/ContactBanner.jsx";

function Privacy() {
  return (
    <div className="bg-cream-200">
      <header className="pb-16 pt-32 text-center sm:pt-40">
        <h1 className="text-taupe-600">מדיניות פרטיות</h1>
      </header>

      <div className="px-6 pb-24 sm:px-10">
        <article className="prose prose-taupe mx-auto max-w-4xl">
          <p>האתר מכבד את פרטיותך ופועל בהתאם לחוק.</p>

          <h2>1. איסוף מידע</h2>
          <p>
            אנו אוספים מידע אישי שנמסר ביוזמתך בטפסי יצירת הקשר (שם, טלפון, וסוג טיפול מבוקש).
          </p>

          <h2>2. וואטסאפ</h2>
          <p>
            לחיצה על כפתור הוואטסאפ מעבירה אותך לאפליקציה החיצונית. ההתכתבות כפופה למדיניות של
            WhatsApp.
          </p>

          <h2>3. שימוש במידע</h2>
          <p>
            המידע משמש אך ורק לצורך חזרה אלייך לתיאום טיפול ומתן שירות רפואי/הוליסטי. המידע אינו
            מועבר לשום צד שלישי שיווקי.
          </p>

          <h2>4. זכויותייך</h2>
          <p>
            זכותך לבקש עיון, תיקון או מחיקה של פרטייך על ידי יצירת קשר ישיר עם הקליניקה.
          </p>
        </article>
      </div>

      <ContactBanner />
    </div>
  );
}

export default Privacy;
