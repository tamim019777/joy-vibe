"use client";

import React, { useState, useRef, useEffect } from 'react';

// হিরো সেকশনের ব্যানার অ্যাডের জন্য কম্পোনেন্ট
const BannerAd = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // atOptions গ্লোবাল window অবজেক্টে সেট করতে হবে, নাহলে অ্যাড স্ক্রিপ্ট পাবে না
    window.atOptions = {
      'key' : 'f57116aa8506cb827f58b417f8b070df',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };

    if (bannerRef.current && !bannerRef.current.querySelector('script[src*="invoke.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://www.highperformanceformat.com/f57116aa8506cb827f58b417f8b070df/invoke.js";
      bannerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={bannerRef} 
      style={{ 
        display: 'inline-block',
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '10px', 
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(5px)',
        maxWidth: '100%', 
        overflow: 'hidden'
      }}
    ></div>
  );
};

// নেটিভ ব্যানার অ্যাডের জন্য কম্পোনেন্ট
const NativeBannerAd = () => {
  const nativeRef = useRef(null);

  useEffect(() => {
    if (nativeRef.current && !nativeRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = "https://pl28946490.profitablecpmratenetwork.com/7cebdac71a76e522c806492d1416e62e/invoke.js";
      nativeRef.current.appendChild(script);
    }
  }, []);

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%', 
        background: 'linear-gradient(to bottom, var(--bg-pink) 50%, var(--bg-teal) 50%)',
        paddingTop: '40px',
        paddingBottom: '40px',
        boxSizing: 'border-box'
    }}>
      <div ref={nativeRef} id="container-7cebdac71a76e522c806492d1416e62e" style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        minHeight: '100px', 
        backgroundColor: 'var(--bg-pink)',
        padding: '0 15px', 
        boxSizing: 'border-box'
      }}></div>
    </div>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  // সোশ্যাল বারের জন্য নতুন Ref 
  const socialBarRef = useRef(null);

  // ১. পপআন্ডার (Popunder) অ্যাড যুক্ত করার জন্য useEffect
  useEffect(() => {
    if (!document.querySelector('script[src*="d8056b0f6f974758e45a7d16da6a5660.js"]')) {
      const script = document.createElement('script');
      script.src = "https://pl28946433.profitablecpmratenetwork.com/d8/05/6b/d8056b0f6f974758e45a7d16da6a5660.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // ২. সোশ্যাল বার (Social Bar) অ্যাড যুক্ত করার জন্য useEffect
  useEffect(() => {
    // সোশ্যাল বার সরাসরি বডিতে লোড করতে হয়, কোনো div এর ভেতর রাখলে অনেক সময় শো করে না
    if (!document.querySelector('script[src*="26e149fe3b8ed33a49717ff535c19134.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://pl28946492.profitablecpmratenetwork.com/26/e1/49/26e149fe3b8ed33a49717ff535c19134.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // স্মার্টলিংকের URL
  const smartLinkUrl = "https://www.profitablecpmratenetwork.com/ed4cz34rm1?key=3a20961e8182c28f62dc194be1d91d09";

  const faqs = [
    {
      q: "Q1: How often should I vaccinate my pet?",
      a: <span>Most pets need core vaccines every 1–3 years depending on age, lifestyle, and vet recommendations. <strong>However</strong>, it is crucial to always consult your veterinarian for the best schedule. <strong>Therefore</strong>, regular check-ups are highly recommended.</span>
    },
    {
      q: "Q2: How can I stop my cat from scratching furniture?",
      a: <span>To stop your cat from scratching furniture, <strong>first</strong>, provide scratching posts. <strong>Secondly</strong>, use cat deterrent sprays, and <strong>finally</strong>, reward positive behavior. <strong>Indeed</strong>, training and redirection work much better than punishment.</span>
    },
    {
      q: "Q3: What are the best foods for a healthy dog diet?",
      a: <span>A balanced dog diet should <strong>primarily</strong> include high-quality protein, healthy fats, and essential vitamins. <strong>Conversely</strong>, avoid processed human food and <strong>instead</strong> consult your vet for the right nutrition plan.</span>
    },
    {
      q: "Q4: How do I train my puppy to follow basic commands?",
      a: <span>To train your puppy to follow basic commands, <strong>begin by</strong> starting with simple commands like sit, stay, and come. <strong>Furthermore</strong>, use positive reinforcement with treats and consistency to build good behavior.</span>
    },
    {
      q: "Q5: How much exercise does my pet need daily?",
      a: <ul><li>Dogs usually need 30–60 minutes of daily exercise depending on breed and age. <strong>In contrast</strong>, cats benefit from short play sessions and interactive toys. <strong>Ultimately</strong>, tailored exercise plans are crucial for their overall health.</li></ul>
    }
  ];

  return (
    <>
      <style>{`
        :root {
            --primary-btn: #f49b88;
            --btn-hover: #e08977;
            --bg-pink: #fde4e1;
            --bg-teal: #bfe5da;
            --text-dark: #333;
            --text-light: #666;
            --white: #ffffff;
            --orange-hover: #ff9800;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: var(--text-dark); overflow-x: hidden; }
        a { text-decoration: none; color: inherit; }
        ul { list-style: none; }
        img { max-width: 100%; display: block; border-radius: 12px; transition: transform 0.3s; }
        img:hover { transform: scale(1.02); }

        .container { max-width: 1400px; margin: 0 auto; padding: 0 40px; }

        nav { display: flex; justify-content: space-between; align-items: center; padding: 30px 80px; background: var(--white); }
        .logo { font-size: 38px; font-weight: 800; color: var(--primary-btn); }
        .nav-links { display: flex; gap: 40px; font-size: 24px; font-weight: 600; }
        .nav-links a { transition: color 0.3s ease; }
        .nav-links a:hover { color: #ffbbae; }
        
        .nav-join-btn { background: transparent; border: 2px solid var(--primary-btn); color: var(--primary-btn); padding: 15px 35px; border-radius: 60px; font-size: 20px; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .nav-join-btn:hover { background-color: #fff0ed; color: var(--primary-btn); border-color: #fff0ed; transform: translateY(-3px); }
        
        .hero { background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80') center/cover; height: 700px; display: flex; align-items: center; color: var(--white); }
        .hero-content-wrapper { display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 50px; }
        .hero-text-area { flex: 1; text-align: left; }
        .hero h1 { font-size: 70px; font-weight: 800; margin-bottom: 25px; line-height: 1.1; }
        .hero p { font-size: 24px; margin-bottom: 40px; line-height: 1.5; color: #f0f0f0; }
        .hero-ad-area { flex: 0.8; display: flex; justify-content: flex-end; padding-top: 80px; }

        .categories-sec { background-color: var(--bg-pink); padding: 120px 0; }
        .section-title { font-size: 52px; font-weight: 800; margin-bottom: 90px; text-align: center; background: #fff; display: table; margin-left: auto; margin-right: auto; padding: 20px 60px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .category-row { display: flex; align-items: center; justify-content: center; gap: 80px; margin-bottom: 60px; max-width: 1300px; margin-left: auto; margin-right: auto; }
        .category-row.reverse { flex-direction: row-reverse; }
        .category-text { flex: 1; padding: 60px; background: #fff; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .category-text h3 { font-size: 42px; font-weight: 700; margin-bottom: 20px; color: #222; }
        .category-text p { font-size: 22px; color: var(--text-light); margin-bottom: 35px; line-height: 1.6; }
        .category-image { flex: 1.2; cursor: pointer; }
        .category-image img { width: 100%; height: 500px; object-fit: cover; border-radius: 15px; }

        .articles-sec { background-color: var(--bg-teal); padding: 120px 0; }
        .articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 50px; }
        .article-card { background: var(--white); padding: 30px; border-radius: 20px; text-align: left; display: flex; flex-direction: column; }
        .article-card img { height: 320px; width: 100%; object-fit: cover; margin-bottom: 25px; border-radius: 15px; }
        .article-card h4 { font-size: 26px; font-weight: 700; margin-bottom: 20px; line-height: 1.3; }
        .article-card p { font-size: 18px; margin-bottom: 25px; color: #444; line-height: 1.6; flex-grow: 1; }
        .article-card .btn { width: auto; min-width: 160px; height: 50px; display: inline-flex; align-items: center; justify-content: center; margin-top: auto; align-self: flex-start; white-space: nowrap; padding: 0 30px; }

        .trust-faq-wrapper { background-color: var(--bg-pink); padding: 100px 0; text-align: center; }
        .white-banner { background-color: #ffffff; max-width: 1200px; margin: 0 auto 30px auto; padding: 35px 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border-radius: 5px; }
        .white-banner h2 { font-size: 55px; font-weight: 800; color: #1a202c; }
        .white-banner p { font-size: 24px; font-weight: 500; color: #222; line-height: 1.6; }
        .white-banner h3 { font-size: 45px; font-weight: 800; color: #1a202c; }
        .faq-list-container { max-width: 1200px; margin: 50px auto 0; display: flex; flex-direction: column; gap: 20px; text-align: left; }
        .faq-item-box { background-color: #ffffff; border: 2px solid #ff9800; border-radius: 8px; padding: 25px 30px; display: flex; flex-direction: column; align-items: flex-start; font-size: 22px; font-weight: 600; color: #000; cursor: pointer; transition: all 0.3s ease; overflow: hidden; }
        .faq-item-box:hover { box-shadow: 0 5px 15px rgba(255, 152, 0, 0.2); transform: translateY(-2px); }
        .faq-item-box:hover .faq-icon-arrow { border-color: #000; color: #000; }
        .faq-header { display: flex; justify-content: space-between; align-items: center; width: 100%; }
        .faq-icon-arrow { color: #4caf50; border: 3px solid #4caf50; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
        .faq-icon-arrow.open { color: #000; border-color: #000; transform: rotate(180deg); }
        .faq-answer-wrapper { max-height: 0; opacity: 0; transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out, margin-top 0.4s ease-in-out; visibility: hidden; }
        .faq-answer-wrapper.open { max-height: 500px; opacity: 1; margin-top: 20px; visibility: visible; }
        .faq-answer { font-size: 18px; font-weight: 400; color: #333; line-height: 1.6; }
        .faq-answer ul { list-style: disc; margin-left: 20px; }

        .community-container { background-color: var(--bg-pink); padding: 80px 0 120px; text-align: center; }
        @keyframes wiggle { 0% { transform: rotate(-30deg); } 25% { transform: rotate(-10deg); } 50% { transform: rotate(-40deg); } 75% { transform: rotate(-20deg); } 100% { transform: rotate(-30deg); } }
        .join-btn-huge { background: #ffffff; color: #000000; padding: 35px 100px; border-radius: 20px; font-size: 45px; font-weight: 900; display: inline-flex; align-items: center; gap: 25px; border: none; cursor: pointer; box-shadow: 0 15px 35px rgba(0,0,0,0.1); transition: all 0.3s ease; text-decoration: none;}
        
        .join-btn-huge:hover, .join-btn-huge:active { background-color: var(--orange-hover); color: #fff; transform: scale(1.05); box-shadow: 0 20px 40px rgba(255, 152, 0, 0.3); }
        .join-btn-huge:hover .mic-icon, .join-btn-huge:active .mic-icon { color: #fff; animation: wiggle 0.5s ease-in-out infinite; }
        
        .mic-icon { color: #ff4d4d; display: inline-block; transform: rotate(-30deg); transition: 0.3s; }

        .btn { background-color: var(--primary-btn); color: var(--white); padding: 18px 45px; border: none; border-radius: 60px; font-size: 20px; font-weight: 700; cursor: pointer; display: inline-block; transition: 0.3s; }
        .btn:hover { background-color: var(--btn-hover); transform: translateY(-3px); }

        footer { background-color: #cce8cc; padding: 100px 80px 80px 80px; position: relative; color: #222; display: flex; flex-direction: column; align-items: center; }
        .footer-main-links { display: flex; gap: 50px; flex-wrap: wrap; justify-content: center; margin-bottom: 60px; }
        .footer-main-links a, .footer-policy-links a { text-decoration: none; color: #333; transition: 0.2s; font-weight: 600; font-size: 24px; }
        .footer-main-links a:hover, .footer-policy-links a:hover { color: var(--primary-btn); }
        .footer-socials { display: flex; gap: 25px; position: absolute; right: 80px; top: 100px; }
        .footer-socials svg { width: 35px; height: 35px; fill: #000; cursor: pointer; transition: 0.2s; }
        .footer-socials svg:hover { fill: var(--primary-btn); }
        .footer-bottom-group { display: flex; flex-direction: column; align-items: center; gap: 25px; }
        .footer-policy-links { display: flex; gap: 50px; justify-content: center; }
        .footer-bottom-text { font-size: 22px; font-weight: 500; color: #333; margin-top: 15px; }
        .scroll-to-top { position: absolute; bottom: 60px; right: 80px; background-color: #000; color: #fff; width: 55px; height: 55px; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
        .scroll-to-top:hover { background-color: #444; }

        /* ==========================================================
           এখানে শুধুমাত্র মোবাইল ও ছোট ডিভাইসের জন্য রেসপন্সিভ কোড দেওয়া হলো
           ========================================================== */

        /* Social Bar Responsive Style - 🔥 এখানে অ্যাডটিকে একটু নিচে নামানো হয়েছে 🔥 */
        .social-bar-container {
          position: absolute;
          top: 130px; /* ডেস্কটপে একটু নিচে */
          right: 20px;
          z-index: 9999;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          nav { padding: 20px 40px; }
          .logo { font-size: 30px; }
          .nav-links { gap: 20px; font-size: 20px; }
          .hero h1 { font-size: 55px; }
          .section-title { font-size: 40px; padding: 15px 40px; width: 90%; }
          .category-row { gap: 40px; }
          .category-text { padding: 40px; }
          .category-text h3 { font-size: 34px; }
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
          .white-banner h2 { font-size: 45px; }
          .white-banner h3 { font-size: 35px; }
          footer { padding: 60px 40px; }
          .footer-socials { right: 40px; top: 60px; }
          .scroll-to-top { right: 40px; bottom: 40px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 20px; }
          nav { flex-direction: column; gap: 20px; padding: 20px; text-align: center; }
          .nav-links { flex-wrap: wrap; justify-content: center; font-size: 18px; }
          
          .hero { height: auto; padding: 80px 0; }
          .hero-content-wrapper { flex-direction: column; text-align: center; }
          .hero-text-area { text-align: center; }
          .hero h1 { font-size: 45px; }
          .hero p { font-size: 20px; }
          .hero-ad-area { padding-top: 30px; justify-content: center; width: 100%; }
          
          .categories-sec { padding: 80px 0; }
          .section-title { font-size: 32px; padding: 15px 20px; }
          .category-row, .category-row.reverse { flex-direction: column; gap: 30px; }
          .category-text { text-align: center; padding: 30px 20px; }
          .category-image img { height: auto; max-height: 400px; }
          
          .articles-sec { padding: 80px 0; }
          .articles-grid { grid-template-columns: 1fr; gap: 30px; }
          .article-card img { height: 250px; }
          
          .trust-faq-wrapper { padding: 80px 0; }
          .white-banner { padding: 25px 20px; width: 95%; }
          .white-banner h2 { font-size: 35px; }
          .white-banner p { font-size: 20px; }
          .white-banner h3 { font-size: 28px; }
          .faq-item-box { padding: 20px; font-size: 18px; }
          
          .community-container { padding: 60px 20px; }
          .join-btn-huge { padding: 20px 40px; font-size: 28px; width: 100%; justify-content: center; flex-direction: column; text-align: center;}
          
          footer { padding: 50px 20px; text-align: center; }
          .footer-socials { position: static; justify-content: center; margin-bottom: 30px; }
          .footer-main-links, .footer-policy-links { gap: 20px; font-size: 18px; flex-direction: column; align-items: center;}
          .scroll-to-top { position: static; margin-top: 40px; }

          /* 🔥 মোবাইলে অ্যাডটি আরও নিচে নামানো হয়েছে যাতে Nav এর ওপর না আসে 🔥 */
          .social-bar-container {
            top: 200px; 
            right: 10px;
          }
        }

        @media (max-width: 480px) {
          .logo { font-size: 24px; }
          .nav-links { gap: 10px; font-size: 16px; flex-direction: column;}
          .nav-join-btn { width: 100%; }
          
          .hero h1 { font-size: 35px; }
          .hero p { font-size: 18px; }
          
          .section-title { font-size: 26px; }
          .category-text h3 { font-size: 28px; }
          .category-text p { font-size: 18px; }
          
          .article-card { padding: 20px; }
          .article-card h4 { font-size: 22px; }
          .article-card p { font-size: 16px; }
          
          .white-banner h2 { font-size: 28px; }
          .white-banner p { font-size: 18px; }
          .white-banner h3 { font-size: 22px; }
          .faq-header { font-size: 16px; }
          .faq-answer { font-size: 16px; }
          
          .join-btn-huge { font-size: 22px; padding: 15px 20px; }

          /* 🔥 ছোট মোবাইলে অ্যাডটির পজিশন 🔥 */
          .social-bar-container {
            top: 240px; 
            right: 10px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="logo">🐾 JoyVibe Pet Service</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">About</a></li>
          <li><a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Training</a></li>
          <li><a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Resources Hub</a></li>
          <li><a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Let's Connect</a></li>
        </ul>
        <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer" className="nav-join-btn">Join our App</a>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        {/* 🔥 সোশ্যাল বার অ্যাড কন্টেইনার (CSS ক্লাস দিয়ে কন্ট্রোল করা হয়েছে) 🔥 */}
        <div ref={socialBarRef} className="social-bar-container"></div>

        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text-area">
              <h1>Pet Health and Behavior Guide</h1>
              <p>Pet health guide is focused on finding therapeutic resources for your pet's physical and mental well-being to lead a happy life.</p>
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
            </div>
            <div className="hero-ad-area">
              {/* ব্যানার অ্যাড */}
              <BannerAd />
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="categories-sec">
        <div className="container">
          <h2 className="section-title">Browse by Pet Health, Behavior & Training Categories</h2>
          
          <div className="category-row">
            <div className="category-text">
              <h3>Pet Health Tips</h3>
              <p>Learn what to watch out for to keep your dog or cat happy and healthy through preventative medicine.</p>
              <a href="/details/8" className="btn">Learn More</a>
            </div>
            <div className="category-image">
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80" alt="Vet checking dog" /></a>
            </div>
          </div>

          <div className="category-row reverse">
            <div className="category-text">
              <h3>Pet Behavior & Training</h3>
              <p>Find basic tips to keep your pet's behavior in check or to fix behavioral issues.</p>
              <a href="/details/9" className="btn">Learn More</a>
            </div>
            <div className="category-image">
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" alt="Training dog" /></a>
            </div>
          </div>

          <div className="category-row">
            <div className="category-text">
              <h3>DIY & Recipes</h3>
              <p>Easy, fun, and healthy snacks, treats, and light meals you can make at home.</p>
              <a href="/details/10" className="btn">Learn More</a>
            </div>
            <div className="category-image">
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=600&q=80" alt="Dog treats" /></a>
            </div>
          </div>

          <div className="category-row reverse" style={{ marginBottom: '0' }}>
            <div className="category-text">
              <h3>Pet Lifestyle & Activities</h3>
              <p>Fun, active events, exercises, and games you and your pet can enjoy.</p>
              <a href="/details/11" className="btn">Learn More</a>
            </div>
            <div className="category-image">
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80" alt="Dogs playing" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* নেটিভ ব্যানার অ্যাডটি এখানে কল করা হয়েছে */}
      <NativeBannerAd />

      {/* Articles Section */}
      <section className="articles-sec">
        <div className="container">
          <h2 className="section-title">Latest Pet Health, Training & Core Articles</h2>
          
          <div className="articles-grid">
            <div className="article-card">
              <a href="/details/1"><img src="https://cdn.images.express.co.uk/img/dynamic/130/940x/secondary/Cavalier-King-Charles-Spaniel-5464056.jpg?r=1722869239639" alt="Sleeping dog" /></a>
              <h4>🐶 Understanding Your Dog's Sleep Habits: How Much Sleep Do They Need?</h4>
              <div className="meta">Date: July 12, 2023 | By Sarah Johnson</div>
              <p>Dogs love to sleep, but how much is too much? Learn about the different stages of sleep and how to ensure your dog is getting the rest they need to stay healthy and active.</p>
              <a href="/details/1" className="btn">Read More</a>
            </div>
            
            <div className="article-card">
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80" alt="Cat eating" /></a>
              <h4>🐱 Choosing the Right Cat Food: Wet vs. Dry Options</h4>
              <div className="meta">Date: June 2, 2023 | By Emma Carter</div>
              <p>Confused by the pet food aisle? We break down the pros and cons of wet and dry food to help you choose the best nutritional options for your feline friend's specific needs.</p>
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
            </div>

            <div className="article-card">
              <a href="/details/3"><img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=400&q=80" alt="Cat near plants" /></a>
              <h4>🌿 Toxic Dangers: Keep Your Cat Safe from Household Plants</h4>
              <div className="meta">Date: November 17, 2023 | By Laura Parker</div>
              <p>Many common houseplants are toxic to cats. Discover which plants to avoid and safe alternatives to keep your home green and your pet safe from accidental poisoning.</p>
              <a href="/details/3" className="btn">Read More</a>
            </div>

            <div className="article-card">
              <a href="/details/4"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80" alt="Dog outdoors" /></a>
              <h4>🐕 How to Stop Your Dog from Jumping on Guests: Effective Training</h4>
              <div className="meta">Date: April 25, 2023 | By Mark Davis</div>
              <p>Does your dog get overly excited when guests arrive? Learn positive reinforcement techniques to teach your dog proper greeting behaviors and keep them calm.</p>
              <a href="/details/4" className="btn">Read More</a>
            </div>

            <div className="article-card">
              <a href="/details/5"><img src="https://img.pikbest.com/photo/20240905/cute-dog-37_10790169.jpg!w700wp" alt="Dog grooming" /></a>
              <h4>🛁 Dog Grooming Basics: Easy Routine Tips Every Owner Should Know</h4>
              <div className="meta">Date: Sept 14, 2023 | By Rachel Green</div>
              <p>Regular grooming is essential for your dog's health. From brushing to nail trimming, explore basic tips to keep your pet's coat shiny and skin healthy at home.</p>
              <a href="/details/5" className="btn">Read More</a>
            </div>

            <div className="article-card">
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&q=80" alt="Healthy cat" /></a>
              <h4>🩺 Signs Your Cat is Happy and Healthy: A Checklist for Owners</h4>
              <div className="meta">Date: August 5, 2023 | By Dr. Alan Smith</div>
              <p>Cats can be experts at hiding illness. Learn the subtle signs of a healthy, happy cat, from vocalizations to grooming habits, so you know exactly when to consult a vet.</p>
              <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and FAQ Section */}
      <section className="trust-faq-wrapper">
        <div className="container">
          <div className="white-banner">
            <h2>Why Pet Owners Trust Our Pet Health and Behavior Expertise</h2>
          </div>
          <div className="white-banner">
            <p>"We pride ourselves on offering reliable, expert-backed advice for pet owners everywhere. Our mission is to promote pet health and well-being, helping you and your furry friend live your best lives together."</p>
          </div>
          <div className="white-banner" style={{ marginTop: '50px' }}>
            <h3>Frequently Asked Questions - Pet Health and Behavior Guide</h3>
          </div>
          <div className="faq-list-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item-box" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="faq-header">
                  <span>{faq.q}</span>
                  <span className={`faq-icon-arrow ${openFaq === index ? "open" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </span>
                </div>
                <div className={`faq-answer-wrapper ${openFaq === index ? "open" : ""}`}>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-container">
        <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer" className="join-btn-huge">
          <span className="mic-icon">📢</span> Join Our Community
        </a>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-socials">
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
          </a>
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
          </a>
        </div>
        <div className="footer-main-links">
          <a href="/">Home</a>
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">About</a>
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Contact</a>
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Categories</a>
          <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Advertise with Us</a>
        </div>
        <div className="footer-bottom-group">
          <div className="footer-policy-links">
            <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href={smartLinkUrl} target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </div>
          <div className="footer-bottom-text">Copyright © 2025 Super Blank</div>
        </div>
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
      </footer>
    </>
  ); 
}