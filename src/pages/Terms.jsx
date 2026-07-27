import ContactBanner from "../components/sections/ContactBanner.jsx";

function Terms() {
  return (
    <div className="bg-cream-200">
      <header className="pb-16 pt-32 text-center sm:pt-40">
        <h1 className="text-taupe-600">תנאי שימוש</h1>
      </header>

      <div className="px-6 pb-24 sm:px-10">
        <article className="prose prose-taupe mx-auto max-w-4xl">
          <p>
            ברוכות הבאות לאתר של מעיין ווקסלמן – רפואה סינית נשית. השימוש באתר כפוף לתנאים להלן.
          </p>

          <h2>1. השירותים באתר</h2>
          <p>
            האתר מאפשר עיון בתכנים מקצועיים ויצירת קשר לתיאום טיפולים (דרך טפסים או וואטסאפ).
            השירותים באתר והמידע בו אינם מהווים תחליף לייעוץ רפואי קונבנציונלי.
          </p>

          <h2>2. התנהלות</h2>
          <p>המשתמשת מתחייבת למסור פרטים מדויקים בטפסי יצירת הקשר.</p>

          <h2>3. קניין רוחני</h2>
          <p>כל זכויות הקניין הרוחני באתר שייכות למעיין ווקסלמן.</p>

          <h2>4. אבטחה</h2>
          <p>האתר אוסף פרטי התקשרות בסיסיים בלבד לצורך חזרה למטופלת. האתר אינו סולק אשראי.</p>

          <h2>5. סמכות שיפוט</h2>
          <p>על השימוש באתר יחולו דיני מדינת ישראל.</p>
        </article>
      </div>

      <ContactBanner />
    </div>
  );
}

export default Terms;
