"use client";

import React from 'react';
import { useParams } from 'next/navigation';

const allArticles = [
  {
    id: '1',
    title: "🐶 Understanding Your Dog's Sleep Habits: How Much Sleep Do They Need?",
    meta: "Category: Dog Care | By Sarah Johnson",
    image: "https://cdn.images.express.co.uk/img/dynamic/130/940x/secondary/Cavalier-King-Charles-Spaniel-5464056.jpg?r=1722869239639",
    details: "Dogs love to sleep, but how much is too much? Depending on their age, breed, and activity level, dogs generally need between 12 to 14 hours of sleep per day. Puppies and older dogs may even need up to 18 hours! Just like humans, dogs go through different stages of sleep, including REM (Rapid Eye Movement) sleep, where they often dream and twitch. Providing a comfortable, quiet sleeping environment and a supportive bed is crucial for their overall health. If you notice a sudden, drastic change in your dog's sleeping patterns—such as sleeping all day when they are usually active, or pacing restlessly at night—it might be time to consult your veterinarian to rule out any underlying health issues."
  },
  {
    id: '2',
    title: "🐱 Choosing the Right Cat Food: Wet vs. Dry Options",
    meta: "Category: Cat Nutrition | By Emma Carter",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    details: "Confused by the pet food aisle? Choosing between wet and dry cat food is one of the most common dilemmas for cat owners. Wet food is highly recommended because it provides excellent hydration, which is vital since many cats do not drink enough water naturally. This hydration helps prevent urinary tract diseases and kidney issues. On the other hand, dry food is very convenient, can be left out longer without spoiling, and helps scrape plaque off your cat's teeth, promoting better dental health. For many feline friends, a mixed diet combining both wet and dry food offers the perfect balance of hydration and dental care. Always consult your vet to tailor a diet specifically for your cat's age, weight, and health condition."
  },
  {
    id: '3',
    title: "🌿 Toxic Dangers: Keep Your Cat Safe from Household Plants",
    meta: "Category: Pet Safety | By Laura Parker",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80",
    details: "Many of us love decorating our homes with beautiful houseplants, but did you know that several common plants are highly toxic to cats? Cats are naturally curious creatures and love to nibble on leaves, which can lead to severe health emergencies. Plants like Lilies, Aloe Vera, Philodendron, and Pothos are incredibly dangerous and can cause vomiting, kidney failure, or even death if ingested. If you want a green home, opt for safe, cat-friendly alternatives such as Spider Plants, Boston Ferns, or African Violets. Always research a plant thoroughly before bringing it indoors. If you suspect your cat has chewed on a toxic plant, rush them to an emergency vet immediately with a sample or picture of the plant."
  },
  {
    id: '4',
    title: "🐕 How to Stop Your Dog from Jumping on Guests: Effective Training",
    meta: "Category: Dog Training | By Mark Davis",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    details: "It’s a familiar scene: the doorbell rings, and your dog instantly turns into a jumping bean, aggressively greeting your guests. While this behavior stems from excitement and a desire to say hello, it can be annoying or even dangerous for children and elderly visitors. The key to stopping this behavior is consistency and positive reinforcement. When your dog jumps, turn your back and ignore them completely—no talking, no touching, and no eye contact. As soon as all four paws are back on the ground, immediately reward them with calm praise and a treat. You can also train them to sit on a specific mat or bed when the doorbell rings, giving them an alternative, acceptable behavior to focus on during exciting moments."
  },
  {
    id: '5',
    title: "🛁 Dog Grooming Basics: Easy Routine Tips Every Owner Should Know",
    meta: "Category: Pet Hygiene | By Rachel Green",
    image: "https://img.pikbest.com/photo/20240905/cute-dog-37_10790169.jpg!w700wp",
    details: "Regular grooming is not just about keeping your dog looking pretty; it’s a fundamental part of their physical health and emotional well-being. A good grooming routine includes regular brushing to remove dead hair and distribute natural oils, which keeps their coat shiny and prevents painful matting. Bathing should only be done when necessary (usually once a month) using a dog-specific shampoo to avoid drying out their skin. Don't forget their paws—regular nail trimming prevents joint pain and difficulty walking. Cleaning their ears and brushing their teeth are also vital steps that are often overlooked. Start these routines while your dog is a puppy, using plenty of treats and praise, so they learn to view grooming as a positive bonding experience."
  },
  {
    id: '6',
    title: "🩺 Signs Your Cat is Happy and Healthy: A Checklist for Owners",
    meta: "Category: Cat Health | By Dr. Alan Smith",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
    details: "Cats are notorious for hiding pain and illness, a survival instinct inherited from their wild ancestors. Because of this, it is crucial for owners to recognize the subtle signs of a healthy and happy feline. A healthy cat will have bright, clear eyes, clean ears, and a shiny, well-groomed coat. Behavioral signs are equally important: a happy cat will engage in play, show a healthy appetite, and have regular litter box habits. Vocalizations like purring and physical actions like kneading ('making biscuits') or a relaxed, upright tail are excellent indicators of contentment. Conversely, if your cat suddenly stops grooming, hides excessively, or shows a change in eating habits, it is a red flag that requires immediate veterinary attention."
  },

  {
    id: '7',
    title: "📚 The Complete Pet Health and Behavior Guide",
    meta: "Category: General Guide | By JoyVibe Team",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
    details: "Welcome to our comprehensive guide focused on finding therapeutic resources for your pet's physical and mental well-being. Keeping a pet healthy is more than just providing food and shelter; it's about understanding their behavioral cues, ensuring they get the right amount of physical exercise, and keeping them mentally stimulated. In this guide, we dive deep into the essential pillars of pet care, providing expert-backed strategies to help you and your furry friend lead a happy, harmonious life together."
  },
  {
    id: '8',
    title: "🩺 Essential Pet Health Tips for Preventative Care",
    meta: "Category: Health | By Dr. Alan Smith",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    details: "Preventative medicine is the most effective way to ensure your dog or cat lives a long, healthy life. This involves regular check-ups, staying up-to-date on vaccinations, and consistent parasite control (flea, tick, and heartworm prevention). We'll show you exactly what subtle changes to look out for—such as shifts in appetite, weight, or energy levels—so you can catch potential health issues before they become serious problems."
  },
  {
    id: '9',
    title: "🧠 Mastering Pet Behavior & Training",
    meta: "Category: Training | By Mark Davis",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    details: "Training is not just about obedience; it's about communication between you and your pet. Whether you're dealing with a puppy learning basic commands or an older pet with stubborn behavioral issues like excessive barking or separation anxiety, positive reinforcement is key. We cover foundational training techniques and provide actionable tips to keep your pet's behavior in check, ensuring a peaceful home environment."
  },
  {
    id: '10',
    title: "🥣 DIY & Recipes: Healthy Homemade Treats",
    meta: "Category: Nutrition | By Emma Carter",
    image: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=800&q=80",
    details: "Who says pet food has to be boring? Treat your furry friend to easy, fun, and healthy snacks that you can make right in your own kitchen! We share pet-safe recipes that avoid harmful ingredients while packing in nutrition. From frozen yogurt pops for hot summer days to baked sweet potato chews, discover creative ways to reward your pet with light meals and snacks they will absolutely love."
  },
  {
    id: '11',
    title: "🎾 Pet Lifestyle & Activities: Keeping Them Active",
    meta: "Category: Lifestyle | By Sarah Johnson",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80",
    details: "A sedentary lifestyle can lead to obesity and behavioral problems in pets. Incorporating fun, active events, exercises, and interactive games into your daily routine is vital. Whether it's setting up an indoor obstacle course for your cat, going on a nature hike with your dog, or simply playing a vigorous game of fetch, we explore numerous ways you and your pet can stay active and enjoy life to the fullest."
  },
  {
    id: '12',
    title: "📢 Join the JoyVibe Pet Community Today!",
    meta: "Category: Community | By JoyVibe Team",
    image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=800&q=80",
    details: "Being a pet owner is a wonderful journey, but you don't have to do it alone! By joining our community, you get access to a network of experienced pet owners, certified trainers, and veterinary professionals. Share your stories, ask questions about pet health or behavior, and participate in exclusive local pet events. We believe that sharing knowledge and experiences makes us all better pet parents. Sign up today and become a part of our growing family!"
  }
];

export default function DynamicDetailsPage() {
  const params = useParams();
  const id = params?.id; 

  const article = allArticles.find(item => String(item.id) === String(id));

  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontSize: "24px" }}>
        <h2>Article Not Found!</h2>
        <a href="/" style={{ color: "#f49b88", textDecoration: "underline" }}>Go Back Home</a>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .details-container { max-width: 900px; margin: 40px auto 60px; padding: 0 40px; color: #333; font-family: 'Segoe UI', Roboto, sans-serif; }
        .details-title { font-size: 42px; font-weight: 800; line-height: 1.3; margin-bottom: 20px; }
        .details-meta { font-size: 16px; color: #666; margin-bottom: 30px; font-weight: 500; }
        .details-img { width: 100%; height: auto; max-height: 500px; object-fit: cover; border-radius: 15px; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .details-content { font-size: 20px; line-height: 1.8; color: #444; margin-bottom: 50px; text-align: justify; }
        .back-btn { background-color: transparent; color: #f49b88; border: 2px solid #f49b88; padding: 10px 25px; border-radius: 60px; text-decoration: none; font-size: 16px; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; transition: 0.3s; margin-bottom: 30px; }
        .back-btn:hover { background-color: #fde4e1; transform: translateX(-5px); }
      `}</style>

      {/* Navigation */}
      <nav style={{ padding: "30px 80px", background: "#fff", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee" }}>
        <a href="/" style={{ fontSize: "32px", fontWeight: "800", color: "#f49b88", textDecoration: "none" }}>🐾 JoyVibe</a>
      </nav>

      <div className="details-container">
        <a href="/" className="back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Articles
        </a>

        <h1 className="details-title">{article.title}</h1>
        <div className="details-meta">{article.meta}</div>
        <img src={article.image} alt={article.title} className="details-img" />
        <div className="details-content">
          <p>{article.details}</p>
        </div>
      </div>
    </>
  );
}