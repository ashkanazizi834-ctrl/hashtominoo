"use client";

import { useMemo, useState } from "react";

const lessons = [
  { chapter: "فصل ۱", title: "عددهای صحیح و گویا", detail: "مقایسه، جمع و تفریق و محاسبه با عددهای گویا", icon: "🔢" },
  { chapter: "فصل ۲", title: "عددهای اول", detail: "آشنایی با عددهای اول و روش‌های تشخیص آن‌ها", icon: "✨" },
  { chapter: "فصل ۳", title: "چندضلعی‌ها", detail: "زاویه‌ها، ویژگی‌ها و شکل‌های هندسی", icon: "📐" },
  { chapter: "فصل ۴", title: "جبر و معادله", detail: "عبارت‌های جبری و حل معادله", icon: "🧩" },
  { chapter: "فصل ۵", title: "بردار و مختصات", detail: "دستگاه مختصات و مفهوم بردار", icon: "🧭" },
  { chapter: "فصل ۶", title: "مثلث", detail: "ویژگی‌ها و رابطه‌های مهم مثلث", icon: "🔺" },
  { chapter: "فصل ۷", title: "توان و جذر", detail: "توان، جذر و محاسبات مربوط", icon: "⚡" },
  { chapter: "فصل ۸", title: "آمار و احتمال", detail: "داده‌ها، نمودارها و احتمال", icon: "📊" },
  { chapter: "فصل ۹", title: "دایره", detail: "اجزای دایره و محاسبه‌های مربوط", icon: "⭕" },
];

const questions = [
  { q: "حاصل ۳ + (−۵) کدام است؟", options: ["۲", "−۲", "۸"], answer: 1, explain: "با حرکت ۵ واحد به چپ از ۳، به −۲ می‌رسیم." },
  { q: "کدام عدد اول است؟", options: ["۹", "۱۱", "۱۵"], answer: 1, explain: "عدد ۱۱ فقط بر ۱ و خودش بخش‌پذیر است." },
  { q: "مجموع زاویه‌های داخلی یک مثلث چند درجه است؟", options: ["۹۰", "۱۸۰", "۳۶۰"], answer: 1, explain: "مجموع زاویه‌های داخلی هر مثلث ۱۸۰ درجه است." },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const filtered = useMemo(
    () => lessons.filter((lesson) => `${lesson.title} ${lesson.chapter}`.includes(search.trim())),
    [search]
  );
  const score = questions.reduce((sum, question, index) => sum + (answers[index] === question.answer ? 1 : 0), 0);

  return (
    <main className="site-shell" dir="rtl">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">ه</span><span>هشتمینو</span></a>
        <nav><a href="#lessons">درس‌ها</a><a href="#quiz">آزمونک</a></nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">یادگیری ریاضی، با حال‌وهوای تازه</span>
          <h1>ریاضی هشتم رو<br /><span>با هشتمینو</span> یاد بگیر!</h1>
          <p>درس‌ها رو مرور کن، تمرین حل کن و قدم‌به‌قدم پیشرفتت رو ببین.</p>
          <a className="primary-button" href="#lessons">شروع یادگیری <span>←</span></a>
        </div>
        <div className="hero-art" aria-label="تصویر نمادین ریاضی">
          <div className="orbit orbit-one">＋</div><div className="orbit orbit-two">÷</div>
          <div className="math-card"><span>√</span><strong>۱۲</strong><small>ریاضی هشتم</small></div>
          <div className="float-star">✦</div>
        </div>
      </section>

      <section className="stats" aria-label="ویژگی‌ها">
        <div><strong>۹</strong><span>فصل کتاب</span></div>
        <div><strong>۱۰۰٪</strong><span>کنجکاوی و تلاش</span></div>
        <div><strong>۱</strong><span>قدم تا شروع</span></div>
      </section>

      <section className="section" id="lessons">
        <div className="section-heading"><div><span className="eyebrow">نقشهٔ راه تو</span><h2>فصل‌های ریاضی هشتم</h2></div><span className="section-note">یک فصل رو انتخاب کن</span></div>
        <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="جست‌وجوی نام فصل..." aria-label="جست‌وجوی فصل‌ها" />
        <div className="lesson-grid">
          {filtered.map((lesson) => <article className="lesson-card" key={lesson.chapter}>
            <div className="lesson-icon">{lesson.icon}</div><span className="chapter">{lesson.chapter}</span>
            <h3>{lesson.title}</h3><p>{lesson.detail}</p>
            <span className="coming">محتوای درس در حال تکمیل</span>
          </article>)}
        </div>
        {filtered.length === 0 && <p className="empty">فصلی با این نام پیدا نشد.</p>}
      </section>

      <section className="quiz-section" id="quiz">
        <div className="section-heading"><div><span className="eyebrow">چالش کوتاه</span><h2>آزمونک سه‌سؤالی</h2></div><span className="quiz-pill">بدون نمرهٔ رسمی</span></div>
        {questions.map((question, index) => <div className="question" key={question.q}>
          <h3>{index + 1}. {question.q}</h3>
          <div className="options">{question.options.map((option, optionIndex) => <button type="button" key={option} className={answers[index] === optionIndex ? "option selected" : "option"} onClick={() => { setAnswers((old) => ({ ...old, [index]: optionIndex })); setChecked(false); }}>{option}</button>)}</div>
          {checked && <p className={answers[index] === question.answer ? "explain correct" : "explain"}>{answers[index] === question.answer ? "آفرین، درست بود! " : "پاسخ درست: " + question.options[question.answer] + "؛ "}{question.explain}</p>}
        </div>)}
        <button className="primary-button check-button" type="button" disabled={Object.keys(answers).length !== questions.length} onClick={() => setChecked(true)}>بررسی پاسخ‌ها</button>
        {checked && <p className="score">امتیازت: {score} از {questions.length}</p>}
      </section>

      <footer>یاد بگیر، تمرین کن، بدرخش! <span>تهیه‌کننده: اشکان عزیزی</span></footer>
    </main>
  );
}
