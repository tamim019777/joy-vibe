"use client";

import React from 'react';

export default function DetailsPage() {
  // ইমেজের ১২টি কার্ডের ডেটা
  const articles = [
    {
      id: 1,
      category: "Pet Lifestyle & Activities",
      title: "Understanding Your Dog's Sleep Habits: How Much Sleep Do They Need?",
      meta: "Leave a Comment / Pet Lifestyle & Activities / pethelp24",
      excerpt: "Every dog owner has likely wondered: how much sleep do dogs need? Unlike humans, dogs spend a significant portion of their lives [...]",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      category: "Pet Lifestyle & Activities",
      title: "Pet Insurance Explained: Is It Worth It for Your Dog?",
      meta: "Leave a Comment / Pet Lifestyle & Activities / pethelp24",
      excerpt: "As a devoted dog owner, you want the very best for your furry companion. This, without a doubt, includes ensuring [...]",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cbcb8122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "How to Choose the Right Collar, Harness, and Leash for Your Dog",
      meta: "1 Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Every dog owner wants their furry friend to be safe, comfortable, and stylish during walks and adventures. However, with the [...]",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Traveling with Your Dog: A Comprehensive Guide for Road Trips & Flights",
      meta: "Leave a Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Embarking on an adventure with your furry best friend can, without a doubt, be one of life's greatest joys. Whether [...]",
      image: "https://images.unsplash.com/photo-1537151608804-ea6f112e690f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Caring for Blind or Deaf Dogs: Adapting Their Environment",
      meta: "Leave a Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Bringing a dog into your home is, without a doubt, a journey filled with joy, companionship, and sometimes, unique challenges. [...]",
      image: "https://images.unsplash.com/photo-1587300003388-59208cb962cb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Long-Term Health Benefits of Walking Your Dog Daily",
      meta: "1 Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Walking your dog isn't just a chore; it's a vital part of pet ownership that offers a wealth of advantages [...]",
      image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Fun Outdoor Activities to Do With Your Dog",
      meta: "Leave a Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Dogs love adventure, and spending time outside helps them stay both physically fit and mentally happy. Whether you live in [...]",
      image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Best Interactive Dog Toys for Mental Stimulation",
      meta: "1 Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Keeping your dog mentally active is just as important as physical exercise. Interactive dog toys can prevent boredom, reduce anxiety [...]",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "How to Introduce a New Pet to Your Dog Peacefully",
      meta: "Leave a Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Bringing a new pet home is exciting — but it can also be stressful for your dog. Dogs are territorial [...]",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Best Dog Bed for Comfort and Support: How to Choose the Right One",
      meta: "1 Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Finding the best dog bed for comfort and support is one of the most important decisions for your pet's health. [...]",
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Creating a Dog-Friendly Home: Safety & Comfort Tips",
      meta: "1 Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Bringing a dog into your home means more than just love and companionship — it also means creating a space [...]",
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12,
      category: "Dog Care Tips, Pet Lifestyle & Activities",
      title: "Things to Do When Caring for Small Breed Dogs",
      meta: "Leave a Comment / Dog Care Tips, Pet Lifestyle & Activities / pethelp24",
      excerpt: "Small breed dog care tips are essential for keeping your little pup happy, healthy, and full of energy. While small dogs [...]",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <style>{`
        :root {
          --theme-green: #8cc63f;
          --footer-bg: #cdeeb2;
          --text-main: #333333;
          --text-muted: #666666;
          --text-tiny: #888888;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body { color: var(--text-main); background-color: #ffffff; }
        a { text-decoration: none; color: inherit; }
        ul { list-style: none; }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Navbar */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          border-bottom: 1px solid #eee;
        }
        .logo-area { display: flex; align-items: center; font-weight: 700; font-size: 24px; color: #ff9800; gap: 10px; }
        .logo-area img { width: 40px; }
        .nav-links { display: flex; gap: 30px; font-size: 15px; font-weight: 500; }
        .nav-links a:hover { color: var(--theme-green); }
        .subscribe-btn {
          border: 2px solid var(--theme-green);
          color: var(--theme-green);
          padding: 10px 25px;
          border-radius: 30px;
          font-weight: 600;
          transition: 0.3s;
        }
        .subscribe-btn:hover { background: var(--theme-green); color: #fff; }

        /* Page Header Title */
        .page-header {
          padding: 60px 0 40px;
        }
        .page-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .page-header p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 1100px;
        }

        /* Grid Layout */
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 30px;
          padding-bottom: 80px;
        }

        /* Card Design */
        .card {
          display: flex;
          flex-direction: column;
        }
        .card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 4px;
          margin-bottom: 15px;
        }
        .card-category {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-tiny);
          margin-bottom: 8px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 10px;
          color: #000;
          cursor: pointer;
        }
        .card-title:hover { color: var(--theme-green); }
        .card-meta {
          font-size: 11px;
          color: var(--text-tiny);
          margin-bottom: 12px;
        }
        .card-excerpt {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Footer */
        footer {
          background-color: var(--footer-bg);
          padding: 50px 40px 30px;
          position: relative;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-links { display: flex; gap: 25px; flex-wrap: wrap; font-size: 14px; font-weight: 500; }
        .footer-links a:hover { color: var(--theme-green); }
        .footer-socials { display: flex; gap: 15px; }
        .footer-socials svg { width: 20px; height: 20px; fill: #000; cursor: pointer; }
        
        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          font-size: 13px;
          color: #333;
        }

        .scroll-top {
          position: absolute;
          bottom: 30px;
          right: 40px;
          background: #000;
          color: #fff;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
        }
        
        /* Responsive for smaller screens */
        @media (max-width: 992px) {
          .grid-container { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .grid-container { grid-template-columns: 1fr; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* Navbar */}
      <nav>
        <div className="logo-area">
          <span style={{ fontSize: '28px' }}>🐾</span> Pet Help 24
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Dog Care Tips</a>
          <a href="#">Cat Care Tips</a>
        </div>
        <a href="#" className="subscribe-btn">Subscribe Now</a>
      </nav>

      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Pet Lifestyle & Activities</h1>
          <p>
            Pet lifestyle and activities are essential to keep your dog entertained and active. They also provide mental stimulation. Regular exercise, outdoor adventures, and fun daily routines help maintain a healthy, happy pet. These activities strengthen the bond between you and your furry companion.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid-container">
          {articles.map((article) => (
            <div className="card" key={article.id}>
              <img src={article.image} alt={article.title} className="card-img" />
              <div className="card-category">{article.category}</div>
              <h3 className="card-title">{article.title}</h3>
              <div className="card-meta">{article.meta}</div>
              <div className="card-excerpt">{article.excerpt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-top">
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Categories</a>
            <a href="#">Advertise with Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-socials">
            {/* Facebook Icon */}
            <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
            {/* Instagram Icon */}
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            {/* Pinterest Icon */}
            <svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright © 2025 Super Blank
        </div>
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </footer>
    </>
  );
}