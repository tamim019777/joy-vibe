"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

export default function DynamicDetailsPage() {
  const params = useParams();
  const id = params?.id;

  // Modal and Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categoryTitles = {
    "1": "Understanding Your Dog's Sleep Habits",
    "2": "Choosing the Right Cat Food",
    "3": "Toxic Dangers: Household Plants",
    "4": "Pet Behavior & Training",
    "5": "Dog Grooming Basics",
    "6": "Signs Your Cat is Happy and Healthy",
    "7": "Pet Health and Behavior Guide",
    "8": "Pet Health Tips",
    "9": "Behavior & Training Mastery",
    "10": "DIY & Recipes: Healthy Treats",
    "11": "Pet Lifestyle & Activities",
    "12": "Join Our Pet Community"
  };

  const categoryData = {
    "1": [
    { 
      id: "1-1", 
      title: "🐶 Understanding Puppy Sleep Needs & Brain Development", 
      meta: "Dog Care | By Sarah Johnson", 
      image: "https://cdn.prod.website-files.com/604bd0b0571e783e6dedca7f/68ae16486eaa0a9a7fbcba40_05-Hero.webp", 
      desc: "Puppies are basically growing machines! They need up to 18-20 hours of sleep a day to support their rapid physical development and complex brain growth. During deep sleep, their bodies produce essential growth hormones and their minds process everything they learned during their waking hours. Lack of quality sleep in puppies can lead to irritability, a weakened immune system, and even long-term behavioral issues like anxiety or lack of focus during training sessions." 
    },
    { 
      id: "1-2", 
      title: "🛏️ Choosing the Perfect Orthopedic Dog Bed", 
      meta: "Dog Care | By Mark Davis", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywUeWJv-BOQq-gl9c5mALH_rKXox5lx5c4A&s", 
      desc: "An orthopedic bed can do wonders for your dog's joints, especially for large breeds or senior dogs suffering from arthritis. Unlike standard plush beds, orthopedic options use high-density memory foam that contours to your pet's body, providing essential spinal alignment and pressure point relief. Investing in a high-quality bed is not just about comfort; it's a preventative health measure that can reduce chronic pain and significantly improve your dog's mobility and quality of life as they age." 
    },
    { 
      id: "1-3", 
      title: "💤 Decoding Dog Sleep Positions & Emotional States", 
      meta: "Behavior | By Emma Carter", 
      image: "https://www.jadpo.co.uk/cdn-cgi/image/fit=cover,format=auto,width=600,height=300/https://images.ctfassets.net/4cuokmrwdiqv/2xBYfxt8XMn8hTZpNSQZnV/3e82467e1de296bfa8c0d0cd9f6a55bb/understanding-dog-sleeping-positions_image-06_2000x1000_29-07-24.jpg", 
      desc: "From the 'donut' to the 'belly-up', your dog's sleeping position tells a fascinating story about their comfort level and emotional state. When a dog sleeps on their back with paws in the air, it indicates total trust and a desire to cool down, as their belly has thinner fur. Conversely, the 'curled-up' position is a survival instinct to protect vital organs and preserve body heat. Understanding these subtle cues helps you ensure your pet feels safe and secure in their home environment." 
    },
    { 
      id: "1-4", 
      title: "🧠 Do Dogs Have Dreams? The Science of REM Sleep", 
      meta: "Dog Health | By Dr. Alan Smith", 
      image: "https://mywoof.com/cdn/shop/files/dream-science-what-are-dogs-really-chasing-in-their-sleep_20251221010204_20251221.jpg", 
      desc: "Notice your dog twitching, paddling their paws, or making tiny muffled barks while asleep? They are in the REM (Rapid Eye Movement) stage of sleep! Scientific studies show that dogs have brain wave patterns similar to humans, suggesting they dream about common activities like chasing squirrels or playing fetch. REM sleep is crucial for memory consolidation and emotional regulation. It is highly recommended never to startle a dreaming dog awake, as they may react out of confusion or fear." 
    },
    { 
      id: "1-5", 
      title: "⏳ Lethargy vs. Sleep: When to Consult a Vet", 
      meta: "Health Alerts | By Laura Parker", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtyh8gOUL-TlU0Dy-gR6P7TJwBFENA0hFkA&s", 
      desc: "While dogs naturally love to snooze, sudden lethargy or sleeping significantly more than usual can be an early red flag for underlying health issues. Conditions like hypothyroidism, heart disease, diabetes, or even clinical depression can manifest as excessive sleepiness. If your dog is difficult to rouse, lacks interest in their favorite toys, or stops greeting you at the door, it’s crucial to track their sleeping hours and consult your veterinarian for a thorough diagnostic check-up." 
    },
    { 
      id: "1-6", 
      title: "🌙 Establishing a Calming Nighttime Routine", 
      meta: "Dog Training | By JoyVibe Team", 
      image: "https://mywoof.com/cdn/shop/files/is-8pm-too-early-for-a-dog-to-go-to-bed_20251129010002_20251129.jpg", 
      desc: "Dogs thrive on consistency and a well-structured daily routine. Establishing a 'wind-down' period before bed can help even the most energetic dogs settle into a deep sleep. This routine should include a final, low-intensity potty break, dimming the household lights, and perhaps a small, healthy bedtime snack. Avoiding vigorous play or heavy exercise an hour before bed prevents their adrenaline from spiking, ensuring they associate the night with calm, restorative rest rather than excitement." 
    },
    { 
      id: "1-7", 
      title: "👵 Senior Pet Care: Navigating Age-Related Sleep Changes", 
      meta: "Senior Pet Care | By Sarah Johnson", 
      image: "https://vetskitchen.co.uk/wp-content/uploads/2022/09/shutterstock_2592447951.jpg", 
      desc: "As dogs enter their golden years, their sleep-wake cycles often shift dramatically. Senior dogs may sleep much more during the day but become restless or confused at night—a condition often linked to Canine Cognitive Dysfunction (CCD). Providing a warm, draft-free place to rest and using nightlights can help reduce their nighttime anxiety. It’s essential to manage their comfort with orthopedic support to ensure their aging joints don't keep them awake in pain." 
    },
    { 
      id: "1-8", 
      title: "🏃 The Vital Link Between Physical Exercise and Deep Sleep", 
      meta: "Lifestyle | By Mark Davis", 
      image: "https://cdn.shopify.com/s/files/1/0268/7349/5624/articles/do_dogs_sleep_at_dog_daycare_c192b253-b1fc-4357-9be4-4ab8544f8b06.jpg?v=1740491703", 
      desc: "A tired dog is a happy (and sleepy) dog! Physical exercise is the most effective natural sedative for canines. Without adequate daily activity, dogs often develop 'zoomies' at night or engage in destructive behaviors due to pent-up energy. Tailoring your dog's exercise to their breed and age ensures they reach a state of physical fatigue that promotes deep, restorative REM sleep. Engaging their minds with scent work or puzzle toys during the day also contributes to better sleep quality." 
    },
    { 
      id: "1-9", 
      title: "🏠 Crate Training: Creating a Sanctuary for Restful Sleep", 
      meta: "Dog Training | By Emma Carter", 
      image: "https://dogacademy.org/blog/wp-content/uploads/2022/03/brown-dog-sleeps-inside-a-wire-crate-1280x720.jpg", 
      desc: "When done correctly, a crate becomes a dog's private sanctuary—a safe 'den' where they can retreat from the chaos of the household. Crate training is an invaluable tool for housebreaking and ensuring your dog gets undisturbed sleep. The crate should be lined with comfortable bedding and placed in a quiet corner. It should never be used as a place of punishment, but rather as a positive space that signifies security and relaxation, allowing your pet to switch off and rest deeply." 
    },
    { 
      id: "1-10", 
      title: "🌡️ Environmental Factors: Temperature and Sleep Quality", 
      meta: "Dog Care | By Dr. Alan Smith", 
      image: "https://supertails.com/cdn/shop/articles/img-1756274205268_1200x.jpg?v=1761814128", 
      desc: "Did you know that dogs run naturally hotter than humans? An overly warm bedroom can lead to restless nights, frequent repositioning, and heavy panting. Optimal sleep temperature for most dogs is slightly cooler than what humans prefer. If you notice your dog constantly moving from their bed to the cold kitchen tiles, they are likely trying to regulate their body temperature. Ensuring proper ventilation and using cooling mats in the summer can significantly enhance their sleep efficiency and overall health." 
    },
    { 
      id: "1-11", 
      title: "🍖 Nutritional Impact: How Diet Affects Your Dog's Rest", 
      meta: "Nutrition | By Rachel Green", 
      image: "https://cdn.prod.website-files.com/62987f2fc1fdda0add0d01a6/6846fd11c158684ec10847de_rude-dog-food.jpg", 
      desc: "What and when you feed your dog has a direct impact on how they sleep. Feeding a large meal right before bedtime can lead to indigestion, acid reflux, and middle-of-the-night potty emergencies. We recommend feeding the final meal at least 2 to 3 hours before sleep. Additionally, certain high-quality proteins contain amino acids like tryptophan, which naturally promote relaxation. A balanced diet free from artificial fillers prevents energy crashes and keeps your dog's internal clock running smoothly." 
    },
    { 
      id: "1-12", 
      title: "🎶 Auditory Therapy: Using Music to Calm Anxious Dogs", 
      meta: "Pet Behavior | By JoyVibe Team", 
      image: "https://www.preventivevet.com/hs-fs/hubfs/golden%20retriever%20relaxing%20with%20headphones%20on%20600%20shutterstock.jpg?width=600&name=golden%20retriever%20relaxing%20with%20headphones%20on%20600%20shutterstock.jpg", 
      desc: "Classical music, soft jazz, and white noise have been scientifically proven to reduce stress in canines. Auditory therapy is especially useful for dogs that suffer from noise phobias—such as fear of thunderstorms or fireworks—which can ruin their sleep. Playing low-frequency, calming sounds helps mask startling outdoor noises and creates a peaceful environment. This simple addition to your dog's sleeping area can lower their heart rate and help them drift into a deep sleep much faster than in a silent or chaotic room." 
    }
  ],
 "2": [
    { 
      id: "2-1", 
      title: "🐱 Essential Hydration: Why Wet Food is Critical for Cats", 
      meta: "Cat Nutrition | By Emma Carter", 
      image: "https://meow4.odoo.com/web/image/1146-2737f2b6/Struggling%20to%20Keep%20Your%20Cat%20Hydrated%20-%20Why%20Wet%20Cat%20Food%20Could%20Be%20the%20Solution.jpg?access_token=80c8d55d-39c2-4e99-a2bd-9ea9a816d564", 
      desc: "Unlike many animals, cats have a naturally low thirst drive because their ancestors obtained most of their moisture from prey. Incorporating high-quality wet food into their daily diet is the most effective way to ensure they stay hydrated. Proper hydration is vital for preventing life-threatening conditions like Feline Lower Urinary Tract Disease (FLUTD), painful crystals, and chronic kidney disease. A moisture-rich diet keeps the urinary system flushed and ensures your cat's internal organs function at their peak efficiency." 
    },
    { 
      id: "2-2", 
      title: "🦷 The Truth About Dry Kibble and Dental Health Myths", 
      meta: "Cat Health | By Dr. Alan Smith", 
      image: "https://www.houndsy.com/cdn/shop/articles/does_dry_dog_food_help_clean_teeth_debunking_the_myths_of_kibble_and_canine_dental_health.webp?v=1754234450", 
      desc: "There is a common belief that dry kibble cleans a cat's teeth, but the reality is more complex. While the crunchy texture of specific dental-formula kibble can help scrape some plaque off the tooth surface, most standard kibbles shatter instantly upon contact. To truly maintain oral hygiene, you should look for kibble approved by the Veterinary Oral Health Council (VOHC) and combine it with regular teeth brushing. Good dental health prevents bacteria from entering the bloodstream, protecting your cat's heart and kidneys." 
    },
    { 
      id: "2-3", 
      title: "⚖️ Designing the Perfect Mixed Diet Routine for Felines", 
      meta: "Cat Care | By Laura Parker", 
      image: "https://tequestaveterinaryclinic.com/wp-content/uploads/2026/02/10-senior-cat-foods-vet-guide.jpg", 
      desc: "Finding the balance between wet and dry food can provide your cat with the hydration they need and the dental benefits they require. A mixed diet routine often involves feeding wet food during scheduled morning and evening meals while providing a small, measured amount of dry kibble for nighttime grazing. This variety not only keeps mealtime exciting for picky eaters but also ensures a broad spectrum of nutrients. Always monitor your cat's weight and caloric intake when mixing food types to prevent accidental overfeeding." 
    },
    { 
      id: "2-4", 
      title: "🚫 Hidden Dangers: Ingredients to Strictly Avoid in Cat Food", 
      meta: "Cat Nutrition | By Sarah Johnson", 
      image: "https://www.petplace.com/article/cats/pet-health/media_14c939c0908c142f9b5b2b65c0bb4cc79296b038e.jpg?width=750&format=jpg&optimize=medium", 
      desc: "As a responsible pet owner, learning to read cat food labels is a lifesaving skill. Many commercial brands use unhealthy fillers like corn, soy, and excessive carbohydrates that cats cannot digest properly. You must strictly avoid ingredients like artificial colors (Red 40), chemical preservatives (BHA/BHT), and 'meat by-products' of unknown origin. Furthermore, certain human foods like onions, garlic, grapes, and chocolate are highly toxic to cats and can cause severe oxidative damage to their red blood cells or even sudden organ failure." 
    },
    { 
      id: "2-5", 
      title: "🥩 Understanding Why Cats are Obligate Carnivores", 
      meta: "Biology & Diet | By Dr. Alan Smith", 
      image: "https://www.truecarnivores.com/cdn/shop/articles/raw-cat-food-pet-food-shutterstock_90924467_0_2b79591a-4e5d-4c7b-9c75-055d72ad2a65.jpg?v=1767817974&width=1600", 
      desc: "Cats are biologically classified as 'obligate carnivores,' meaning their bodies are evolutionarily designed to process only animal proteins. Unlike humans or dogs, cats cannot synthesize certain essential amino acids like Taurine from plant-based sources. Taurine deficiency is extremely dangerous and can lead to dilated cardiomyopathy (heart failure) and irreversible blindness. A cat's diet must be rich in real animal meat to provide the necessary fatty acids and vitamins that keep their heart strong, their vision sharp, and their immune system robust." 
    },
    { 
      id: "2-6", 
      title: "🍼 Early Nutrition: Specialized Feeding for Growing Kittens", 
      meta: "Kitten Care | By JoyVibe Team", 
      image: "https://onlyfresh.com/cdn/shop/articles/shutterstock_747258430.jpg?v=1647279082", 
      desc: "Kittens undergo an incredible amount of growth in their first year, requiring twice the energy per pound compared to adult cats. Kitten-specific formulas are fortified with high levels of protein, fats, and Docosahexaenoic Acid (DHA)—an essential fatty acid found in mother's milk that supports healthy brain and vision development. Feeding adult food to a kitten can lead to stunted growth and bone deformities. Ensure they receive multiple small, nutrient-dense meals throughout the day to keep up with their high metabolic demands." 
    },
    { 
      id: "2-7", 
      title: "🐟 The Fish Dilemma: Why Too Much Tuna Can Be Harmful", 
      meta: "Cat Nutrition | By Emma Carter", 
      image: "https://cdn.shopify.com/s/files/1/0840/6049/files/Can-Dogs-Eat-Tuna.jpg?v=1656466696", 
      desc: "While many cats are obsessed with the smell and taste of fish, it should never be the primary source of their diet. Predatory fish like tuna can contain high levels of mercury, which can lead to heavy metal poisoning over time. Furthermore, a diet consisting purely of raw fish contains an enzyme called thiaminase, which destroys Vitamin B1 (Thiamine). Thiamine deficiency causes severe neurological issues, including seizures and loss of balance. Use fish as an occasional treat rather than a staple meal to keep your cat safe and balanced." 
    },
    { 
      id: "2-8", 
      title: "🥗 Grain-Free vs. Grain-Inclusive: Navigating Diet Trends", 
      meta: "Diet Trends | By Mark Davis", 
      image: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=600&q=80", 
      desc: "The 'grain-free' trend has taken the pet food world by storm, but is it always the best choice? While some cats have genuine grain allergies, they are actually quite rare. The danger of grain-free diets often lies in what they use as replacements—high amounts of peas, lentils, or potatoes, which have been linked to heart issues in some studies. Instead of following trends, focus on the overall quality of the protein and ensure the food is 'complete and balanced.' Consult your vet to see if your cat actually needs a specialized grain-free diet." 
    },
    { 
      id: "2-9", 
      title: "🕒 Free-Feeding vs. Scheduled Meals: Preventing Obesity", 
      meta: "Behavior | By Rachel Green", 
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80", 
      desc: "Leaving a bowl of dry kibble out all day (free-feeding) is a major contributor to the feline obesity epidemic. Cats are natural hunters meant to eat small, frequent meals rather than grazing out of boredom. Scheduled feeding allows you to control exactly how many calories your cat consumes and helps you notice immediately if their appetite changes—which is often the first sign of illness. Establishing set meal times also strengthens the bond between you and your pet, as they begin to associate you with the positive experience of being fed." 
    },
    { 
      id: "2-10", 
      title: "👴 Golden Years: Tailoring Nutrition for Senior Cats", 
      meta: "Senior Care | By Dr. Alan Smith", 
      image: "https://www.harringtonspetfood.com/cdn/shop/articles/Untitled_design_1.jpg?v=1700490117", 
      desc: "As cats age, their nutritional requirements change significantly. Senior cats often have a harder time digesting fats and proteins and may experience a decreased sense of smell and taste. To encourage an older cat to eat, look for highly aromatic wet foods with soft textures that are easy on sensitive teeth and gums. Many senior diets are also supplemented with glucosamine and chondroitin for joint health, and controlled levels of phosphorus to reduce the workload on aging kidneys, helping them live their final years in comfort." 
    },
    { 
      id: "2-11", 
      title: "🤢 Scarf and Barf: Why Your Cat Throws Up After Eating", 
      meta: "Health Alerts | By Laura Parker", 
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80", 
      desc: "If your cat frequently vomits whole, undigested kibble immediately after eating, they are likely a 'speed eater.' This phenomenon, often called 'scarf and barf,' happens when a cat gulps down food too quickly, causing the stomach to expand too fast and trigger a regurgitation reflex. To fix this, try using a slow-feeder bowl with ridges or spreading the food out on a flat plate. Puzzle feeders are also an excellent solution as they provide mental stimulation and force the cat to eat one piece at a time, promoting much better digestion." 
    },
    { 
      id: "2-12", 
      title: "🥣 The Risks and Rewards of Homemade Cat Food Recipes", 
      meta: "DIY Recipes | By JoyVibe Team", 
      image: "https://www.therecipesatlas.com/wp-content/uploads/2025/12/Homemade-Cat-Food-6-1024x559.webp", 
      desc: "Preparing homemade meals for your cat can be a great way to control exactly what they eat, but it is incredibly difficult to get the nutritional balance right. A simple recipe of boiled chicken and rice is fine for an upset stomach for a day or two, but it lacks over 20 essential vitamins and minerals required for long-term health. If you choose the DIY route, you must work with a veterinary nutritionist to ensure you are adding the correct supplements. Without professional guidance, homemade diets often lead to severe nutritional deficiencies that can take months to show symptoms." 
    }
  ],
    // ==========================================
  // ID 3: Toxic Dangers - Household Plants
  // ==========================================
  "3": [
    { 
      id: "3-1", 
      title: "☠️ The Lethal Danger of Lilies for Felines", 
      meta: "Toxins | By Laura Parker", 
      image: "https://www.moorabbinvet.com.au/wp-content/uploads/2024/12/Lily-Toxicity-In-Cats-1024x704.webp", 
      desc: "Lilies are among the most dangerous plants you can bring into a home with cats. Even a tiny amount of pollen licked off their fur or a small nibble on a petal can lead to acute, irreversible kidney failure within hours. The toxicity affects the entire plant—leaves, stems, and even the water in the vase. If you suspect your cat has come into contact with any part of a lily, it is a life-threatening emergency that requires immediate veterinary intervention to flush the toxins from their system before permanent damage occurs." 
    },
    { 
      id: "3-2", 
      title: "🌿 Creating a Lush Green Oasis with Safe Indoor Plants", 
      meta: "Pet Safety | By Emma Carter", 
      image: "https://cdn.shopify.com/s/files/1/0558/1130/9591/files/kier-in-sight-archives-xR0lfL-kcBg-unsplash.jpg?v=1689630962", 
      desc: "Being a pet owner doesn't mean you can't have a beautiful indoor garden. Spider Plants, Boston Ferns, and many species of palms are completely non-toxic and provide a safe way to add greenery to your space. Spider plants are particularly fun for cats as they love to bat at the dangling 'pups,' and you don't have to worry about accidental ingestion. Always double-check any new plant against the ASPCA's non-toxic list to ensure your home remains a safe sanctuary for both your plants and your furry friends." 
    },
    { 
      id: "3-3", 
      title: "🚑 Recognizing the Subtle Signs of Plant Poisoning", 
      meta: "Emergency | By Dr. Alan Smith", 
      image: "https://safer-america.com/wp-content/uploads/2022/01/pexels-nadiye-odabasi-9645527.jpg", 
      desc: "Cats are masters at hiding pain, so recognizing the early symptoms of plant toxicity is crucial. Common signs include sudden vomiting, excessive drooling, lethargy, and a complete loss of appetite. In more severe cases, you might notice tremors, seizures, or difficulty breathing. Some plants cause immediate oral irritation, leading to pawing at the mouth or a swollen tongue. Monitoring your cat's behavior and checking your plants for bite marks daily can help you catch a poisoning event before it becomes fatal." 
    },
    { 
      id: "3-4", 
      title: "🌵 The Hidden Toxicity of Aloe Vera for Pets", 
      meta: "Toxins | By Mark Davis", 
      image: "https://image.petmd.com/files/styles/863x625/public/2025-07/GettyImages-2178819527_0.jpg", 
      desc: "While Aloe Vera is a staple in many households for its healing properties on human skin, it contains saponins and anthraquinones that are toxic to both dogs and cats. If ingested, it can cause severe gastrointestinal upset, including vomiting, diarrhea, and abdominal pain. In some cases, it can also lead to tremors and changes in urine color. It's best to keep your Aloe plants on high shelves or in rooms that are inaccessible to curious pets who might be tempted to chew on the thick, succulent leaves." 
    },
    { 
      id: "3-5", 
      title: "🌱 Satisfying Natural Instincts: Growing Cat Grass", 
      meta: "DIY | By Sarah Johnson", 
      image: "https://www.epicgardening.com/wp-content/uploads/2019/02/A-shot-of-a-feline-licking-grass-that-is-called-cat-grass.jpg", 
      desc: "Cats have a natural instinct to chew on greens to aid their digestion and help pass hairballs. Instead of letting them nibble on your decorative (and potentially toxic) plants, grow a dedicated patch of 'Cat Grass'—usually a mix of wheat, oat, or barley seeds. It’s easy to grow in a small pot on a windowsill and provides a safe, fiber-rich snack. Having this available acts as a great redirection tool; when they go for your house plants, you can move them toward their own safe grass, satisfying their craving without the danger." 
    },
    { 
      id: "3-6", 
      title: "💐 Seasonal Hazards: Toxic Holiday Bouquets and Decor", 
      meta: "Safety | By Rachel Green", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cJXfq6QAJLHc4u9mGqb3iLIECeCLSZlduA&s", 
      desc: "Holiday seasons bring beautiful but dangerous flora into the home. Poinsettias, while only mildly irritating, can still cause stomach upset, but Mistletoe and Holly are much more serious, potentially causing heart rhythm changes and severe digestive distress. Amaryllis bulbs, often gifted in winter, are also highly toxic. Always inform florists that you have pets so they can avoid including toxic fillers like Eucalyptus or Baby’s Breath. Vigilance during celebrations ensures that your festive decorations don't lead to a holiday trip to the emergency vet." 
    },
    { 
      id: "3-7", 
      title: "🪴 Managing Pothos and Philodendrons in Pet Homes", 
      meta: "Houseplants | By Laura Parker", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghTTCOnAToZfZAYodTH6ib4H-gmk9_trw3g&s", 
      desc: "Pothos and Philodendrons are incredibly popular due to their low maintenance, but they contain insoluble calcium oxalate crystals. When a pet chews the leaves, these crystals act like tiny needles, embedding themselves in the mouth and throat. This leads to immediate intense burning, excessive drooling, and swelling that can make swallowing difficult. While usually not fatal, the experience is extremely painful for the animal. If you must have these plants, ensure they are in hanging baskets or on high wall-mounted planters where vines cannot be reached by jumping cats." 
    },
    { 
      id: "3-8", 
      title: "🪴 Home Design: Hanging Plants Safely Out of Reach", 
      meta: "Home Design | By Emma Carter", 
      image: "https://www.mydomaine.com/thmb/V-SxU5aFAtbwpPbHhDMXyhcWCvs=/700x0/filters:no_upscale():strip_icc()/cdn.cliqueinc.com__cache__posts__264557__indoor-hanging-plants-264557-1533232313458-fb.700x0c-7eca7d84df5440cb8748fef05e650289.jpg", 
      desc: "If you have a 'jumper' who reaches every surface, you need to get creative with your plant placement. Using ceiling hooks or high wall-mounted shelving is an excellent way to keep toxic plants completely out of your cat's vertical range. Avoid placing furniture like chairs or bookshelves near these plants, as they act as a ladder for a curious pet. Vertical gardening not only keeps your pets safe but also allows you to enjoy a lush, green home environment without the constant worry of accidental ingestion. It’s a stylish and practical solution for any multi-pet household." 
    },
    { 
      id: "3-9", 
      title: "👃 Natural Deterrents to Stop Your Pet from Chewing Pots", 
      meta: "Behavior | By JoyVibe Team", 
      image: "https://www.aspca.org/sites/default/files/dog-care_common-dog-behavior-problems_destructive-chewing_main-image.jpg", 
      desc: "Training your pet to stay away from plants requires a mix of redirection and deterrents. Pets generally dislike the smell of citrus; placing lemon or orange peels on top of the soil can discourage them from digging or nibbling. Double-sided sticky tape around the rim of the pot is another effective physical deterrent, as cats hate the sensation on their paws. Sprinkling a bit of diluted bitter apple spray on the leaves can also make the plants taste unpleasant. These methods, combined with providing safe alternatives like cat grass, will eventually teach your pet that your decorative plants are off-limits." 
    },
    { 
      id: "3-10", 
      title: "🚑 First Aid: What to Do if Your Pet Ingests a Toxic Plant", 
      meta: "First Aid | By Dr. Alan Smith", 
      image: "https://s3-us-west-1.amazonaws.com/assets.wagwalkingweb.com/media/wellness_articles/body/1678474674.1277525/poisoning-first-aid-and-after-care-for-your-dog-6.png", 
      desc: "Time is of the essence during a poisoning event. First, identify the plant immediately; if you aren't sure of the name, take a clear photo or bring a sample of the plant with you to the vet. Do not attempt to induce vomiting at home unless specifically instructed by a professional, as some toxins can cause more damage when coming back up. Call your local emergency vet or a pet poison control hotline immediately. While waiting for instructions, keep your pet calm and try to rinse their mouth with water if the plant causes oral irritation, but only if it's safe to do so without getting bitten." 
    },
    { 
      id: "3-11", 
      title: "🌺 Orchids: A Beautiful and Safe Choice for Cat Owners", 
      meta: "Plant Guide | By Sarah Johnson", 
      image: "https://thecatladies.com/cdn/shop/articles/Screenshot_2024-08-13_at_8.57.17_AM.png?v=1739193404&width=1100", 
      desc: "Great news for flower lovers: most species of Phalaenopsis (Moth Orchids) are completely non-toxic to cats and dogs. These stunning blooms add elegance to any room without the fear of kidney failure associated with lilies. While they are safe, it's still best to discourage chewing, as the fiber can sometimes cause mild stomach upset or a choking hazard. Orchids thrive in indirect light and humidity, much like a cat's preferred lounging spot, making them the perfect companions for a pet-friendly, aesthetically pleasing home. You can display these on coffee tables with total peace of mind." 
    },
    { 
      id: "3-12", 
      title: "🌷 Spring Garden Hazards: Digging Up Trouble Outdoors", 
      meta: "Outdoor Safety | By Mark Davis", 
      image: "https://static.wixstatic.com/media/950f7c_99fed75d8e6d408bb66ae20cc90d26ec~mv2.jpg/v1/fill/w_550,h_336,al_c,q_80,usm_0.66_1.00_0.01/950f7c_99fed75d8e6d408bb66ae20cc90d26ec~mv2.jpg", 
      desc: "If your cat goes outdoors or you have a dog that loves to dig, be extremely careful with spring bulbs. Tulips, Daffodils, and Hyacinths contain the highest concentration of toxins in the bulbs themselves. If a pet digs these up and chews on them, it can lead to intense oral irritation, increased heart rate, and severe respiratory distress. Daffodils also contain lycorine, which triggers intense vomiting. Always fence off your flower beds or supervise your pets closely in the garden during planting season to ensure they don't treat your new garden project as a dangerous snack bar." 
    }
  ],

  // ==========================================
  // ID 4: Stop Your Dog from Jumping on Guests
  // ==========================================
  "4": [
    { 
      id: "4-1", 
      title: "🐕 The Psychology of Why Dogs Jump During Greetings", 
      meta: "Behavior | By Mark Davis", 
      image: "https://gametimedogservices.com/wp-content/uploads/2019/12/dog-jumping-up.jpg", 
      desc: "Jumping is a natural canine behavior rooted in their history as pack animals. Puppies lick their mothers' faces to greet them and solicit food; as they grow, they continue this desire to get face-to-face with humans. When your dog jumps on you or your guests, they aren't trying to be dominant; they are simply overly excited and seeking immediate attention. By understanding that this is an emotional response rather than a rebellious one, you can approach training with more patience. The goal is to teach them that they only get the attention they crave when their paws are firmly planted on the ground." 
    },
    { 
      id: "4-2", 
      title: "🛑 Mastering the 'Turn and Ignore' Method for Calm Greetings", 
      meta: "Training | By Emma Carter", 
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80", 
      desc: "The most effective way to extinguish jumping behavior is to remove the reward—which is your attention. The moment your dog's paws leave the floor, turn your back, cross your arms, and look away. Do not speak to them, do not push them, and do not make eye contact. Even saying 'No!' can be seen as a reward by an attention-starved dog. Wait until they are calm and have all four paws on the floor for at least three seconds, then turn around and offer calm praise. This clear 'on/off' switch for attention teaches them that jumping makes you 'disappear,' while standing calmly makes you engage." 
    },
    { 
      id: "4-3", 
      title: "🪑 Teaching the 'Go to Mat' Command for Doorway Manners", 
      meta: "Obedience | By Sarah Johnson", 
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&q=80", 
      desc: "One of the best ways to stop a dog from jumping is to give them an incompatible task. You can't jump on a guest if you are lying on a mat across the room. Training your dog to 'Go to Mat' when the doorbell rings gives them a job to focus on during high-arousal moments. Start by rewarding them for simply stepping on the mat, then gradually increase the duration they must stay there before being released to greet the guest. This proactive approach changes their brain's default setting from 'doorbell equals chaos' to 'doorbell equals a specific job for a reward.'" 
    },
    { 
      id: "4-4", 
      title: "🚪 Proactive Management: Handling Doorway Excitement Safely", 
      meta: "Behavior | By Dr. Alan Smith", 
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&q=80", 
      desc: "Training takes time, so managing the environment in the meantime is essential for safety. If you know your dog is a jumper, keep a leash near the door. When guests arrive, put your dog on a leash and stand a few feet away from the entrance. This allows you to physically prevent the jump before it happens without using force. You can also use baby gates to keep the dog in a separate room until they have settled down. Management prevents the dog from practicing the 'bad' behavior, making your training sessions much more effective because they aren't getting away with jumping when you aren't looking." 
    },
    { 
      id: "4-5", 
      title: "🎾 Positive Reinforcement: Reward 'Four on the Floor' Instantly", 
      meta: "Positive Reinforcement | By JoyVibe", 
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80", 
      desc: "Consistency is the backbone of dog training. You must carry high-value treats and be ready to reward the exact second your dog makes the right choice. If your dog greets someone and chooses to keep their feet on the ground, flood them with praise and treats. You are building a strong positive association with 'standing still.' If you only scold them for jumping but never reward them for staying down, they won't understand what you actually want them to do. Make sure everyone in the household follows the same rule: standing still gets the jackpot, jumping gets nothing." 
    },
    { 
      id: "4-6", 
      title: "🧒 Kids and Jumpers: Safety Tips for Small Visitors", 
      meta: "Safety | By Laura Parker", 
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&q=80", 
      desc: "A large dog jumping on a toddler can lead to serious injury, even if the intent is friendly. It is vital to teach children how to behave around jumping dogs. Teach them to 'be a tree'—stand still, fold their branches (arms), and look at their roots (feet). Running or screaming only increases the dog's excitement and prey drive, making them jump more. For the dog, use a harness and leash during these interactions to maintain total control. Never leave a jumping dog unsupervised with children, and always prioritize physical barriers like crates or gates during high-energy gatherings until the dog is fully trained." 
    },
    { 
      id: "4-7", 
      title: "🗣️ Training Your Guests: Why Their Reaction Matters Most", 
      meta: "Socialization | By Mark Davis", 
      image: "https://www.hindustantimes.com/ht-img/img/2024/11/05/550x309/Dogs_around_guest_1730805607556_1730805607761.jpg", 
      desc: "The biggest obstacle in stopping a dog from jumping is often the guests themselves. Many people will say, 'Oh, I don't mind!' and proceed to pet and talk to the dog while they are jumping. This completely undoes all your hard work by rewarding the behavior you are trying to stop. You must be firm with your guests: tell them ahead of time, 'We are training Max not to jump. Please do not pet or talk to him until he sits.' A good guest will respect your rules and help you by ignoring the dog until they are calm. Consistency across all humans is the only way the dog will learn the new greeting standard." 
    },
    { 
      id: "4-8", 
      title: "🦴 Treat Scattering: A Simple Distraction for Calm Greetings", 
      meta: "Quick Fixes | By Rachel Green", 
      image: "https://calmdoggames.com/cdn/shop/files/enrichment-deck-brain-games-for-dogs-886673.jpg?v=1767971008&width=533", 
      desc: "If you are struggling to keep your dog's focus when the door opens, use a 'treat scatter.' Right as the guest enters, toss a handful of small, smelly treats on the floor. This forces the dog to lower their head and use their nose to find the treats, which is a naturally calming activity for canines. While they are busy sniffing the floor, the initial 'burst' of excitement from the guest's arrival passes. By the time they finish the treats, they are much more likely to greet the person with all four paws on the ground. It’s a great management tool for dogs that are easily overwhelmed by visitors." 
    },
    { 
      id: "4-9", 
      title: "👎 Why Pushing Them Away Actually Makes the Jumping Worse", 
      meta: "Training Myths | By Dr. Alan Smith", 
      image: "https://dyeranimalclinic.com/wp-content/uploads/2022/06/iStock-1361691537.jpg", 
      desc: "A common mistake owners make is pushing the dog's chest or knees when they jump. To a dog, this physical contact—even if meant to be a correction—feels like a fun wrestling match. They will often jump back with even more intensity because you are engaging with them. Similarly, yelling 'Down!' can be confusing, as 'Down' is usually a command to lie down, and the dog is already too excited to process it. Physical corrections can also backfire by making the dog fearful of hands near their face. Silence and a lack of physical touch are the most powerful 'corrections' you can give to an attention-seeking jumper." 
    },
    { 
      id: "4-10", 
      title: "🚶 Outdoor Etiquette: Stopping Jumps During Daily Walks", 
      meta: "Outdoor Training | By Sarah Johnson", 
      image: "https://www.allivet.com/blog/wp-content/uploads/2016/03/collie-jumping-into-lake-joint-problems-in-dogs-730x486.jpg", 
      desc: "Jumping on strangers during walks can be embarrassing and lead to complaints. To prevent this, always keep a safe distance from people on the sidewalk. If you see someone approaching, move to the side and ask your dog to 'Sit' and focus on you. Reward them heavily for maintaining eye contact while the person passes. If the stranger asks to pet your dog, only allow it if your dog remains in a sit position. If they start to break the sit or lunge upward, calmly walk in the opposite direction. Teaching your dog that access to people is a privilege earned through calm behavior is key to a well-mannered walking companion." 
    },
    { 
      id: "4-11", 
      title: "🕰️ The Power of Consistency: Why You Can't Allow It 'Sometimes'", 
      meta: "Training | By Emma Carter", 
      image: "https://i0.wp.com/prisonjournalismproject.org/wp-content/uploads/2026/03/260225_servicedogs_V1_FINAL-scaled.jpg?fit=780%2C585&ssl=1", 
      desc: "If you allow your dog to jump on you when you're wearing old clothes but scold them when you're in a suit, you are confusing them. Dogs don't understand the concept of 'fashion' or 'sometimes.' For training to work, the rule must be absolute: jumping is never rewarded, regardless of who the person is or what they are wearing. If you allow it once, you reinforce the behavior on a 'variable schedule,' which actually makes the habit stronger and harder to break (like a gambler at a slot machine). Commit to a 100% no-jump policy across all family members to see the fastest results in your dog's behavior." 
    },
    { 
      id: "4-12", 
      title: "🧸 The Toy-in-Mouth Strategy: A Genius Behavior Swap", 
      meta: "Behavior | By JoyVibe Team", 
      image: "https://w0.peakpx.com/wallpaper/242/639/HD-wallpaper-english-bulldog-dog-glance-funny-toy-thumbnail.jpg", 
      desc: "Many dogs jump and bark because they need something to do with their mouth and energy. A brilliant strategy is to train your dog to pick up a specific toy when someone comes to the door. It’s hard to bark or jump aggressively when you are proudly carrying a stuffed animal or a ball. Keep a basket of toys near the entrance and encourage your dog to 'Find your toy!' as soon as the doorbell rings. This gives them a positive outlet for their excitement and provides an alternative behavior that guests find adorable rather than annoying. It’s a win-win for everyone involved in the greeting." 
    }
  ],

  // ==========================================
  // ID 5: Dog Grooming Basics
  // ==========================================
  "5": [
    { 
      id: "5-1", 
      title: "🛁 The Essential Guide: How Often Should You Bathe Your Dog?", 
      meta: "Hygiene | By Rachel Green", 
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80", 
      desc: "Over-bathing is a common mistake that can strip your dog's skin of its natural, protective oils, leading to dryness, irritation, and even infections. For most dogs with healthy skin, a bath every 4 to 8 weeks is sufficient. However, breeds with oily coats like Basset Hounds may need more frequent washing, while water-repellent breeds like Labradors should be bathed less often to maintain their coat's integrity. Always use a dog-specific shampoo, as human products have a different pH balance that can damage their skin's acid mantle. If your dog gets muddy between baths, a simple rinse with plain water or a damp cloth is often all that's needed to keep them fresh." 
    },
    { 
      id: "5-2", 
      title: "✂️ Stress-Free Nail Trimming: Techniques to Avoid the Quick", 
      meta: "Grooming | By Dr. Alan Smith", 
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80", 
      desc: "Long nails aren't just an aesthetic issue; they can cause pain, affect a dog's posture, and even lead to joint damage over time. The key to successful nail trimming is avoiding the 'quick'—the sensitive bundle of nerves and blood vessels inside the nail. For white nails, the quick is visible as a pink area, but for black nails, you must trim in small, thin layers until you see a small dark circle in the center. Using a grinder (Dremel) can be less stressful for some dogs than traditional clippers. Always have styptic powder on hand just in case of a nick, and reward every single paw touch with high-value treats to build a positive association with the process." 
    },
    { 
      id: "5-3", 
      title: "🪮 Brushing Mastery: Matching the Right Tool to Your Dog's Coat", 
      meta: "Coat Care | By Sarah Johnson", 
      image: "https://petzpark.com.au/cdn/shop/articles/Brush-Your-Dog_s-Teeth_34c98f24-2cfd-4a6d-8387-be865cb9bd78_800x.jpg?v=1770649662", 
      desc: "Regular brushing is the single most important part of home grooming. It removes dead hair, prevents painful mats, and distributes natural oils for a healthy shine. However, using the wrong brush can be ineffective or even painful. Slicker brushes are great for removing tangles in long-haired breeds, while rubber curry brushes are best for short-haired dogs like Pugs to remove loose fur. For double-coated breeds like Shepherds, an undercoat rake is essential during shedding season. Brushing is also a fantastic time to check for lumps, bumps, or parasites like fleas and ticks, making it a vital part of your pet's overall health monitoring routine." 
    },
    { 
      id: "5-4", 
      title: "👂 Ear Care: Preventing Painful Infections with Safe Cleaning", 
      meta: "Health | By Laura Parker", 
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80", 
      desc: "Dogs with floppy ears or those who love to swim are highly prone to painful yeast and bacterial infections. Moisture trapped in the ear canal creates a perfect breeding ground for germs. To clean them safely, use a vet-recommended ear cleaning solution and a cotton ball—never use Q-tips as they can push debris deeper or puncture the eardrum. Fill the ear with the solution, massage the base for 30 seconds to break up wax, and let your dog shake it out. Wipe away the excess debris you can see. If you notice a foul smell, redness, or constant head shaking, it’s time to visit the vet, as these are signs of an active infection that cleaning alone won't fix." 
    },
    { 
      id: "5-5", 
      title: "🪥 Dental Hygiene: Why Brushing Your Dog's Teeth is Non-Negotiable", 
      meta: "Dental | By Mark Davis", 
      image: "https://www.oldetowneanimalhosp.com/wp-content/uploads/2025/08/Dog-Needs-Teeth-Cleaning.jpg", 
      desc: "By the age of three, over 80% of dogs show signs of periodontal disease. This isn't just about 'dog breath'; oral bacteria can enter the bloodstream and cause serious damage to the heart, liver, and kidneys. Daily brushing with a dog-specific enzymatic toothpaste (which tastes like chicken or beef) is the gold standard for care. Never use human toothpaste, as it often contains xylitol, which is lethal to dogs. If your dog won't tolerate a toothbrush, start by rubbing their gums with your finger or using dental wipes. While dental chews and water additives can help, they are supplements to—not replacements for—manual brushing to remove plaque before it hardens into tartar." 
    },
    { 
      id: "5-6", 
      title: "🐾 Paw Pad Health: Protection Against Salt, Snow, and Heat", 
      meta: "Seasonal | By Emma Carter", 
      image: "https://www.sparkpaws.at/cdn/shop/files/hotpavementdogshoes_9_1200x.jpg?v=1767774450", 
      desc: "Your dog's paw pads are tough but not invincible. In the winter, ice-melt salts can cause chemical burns, while snow can ball up between toes and cause painful cracking. In the summer, asphalt can become hot enough to blister their paws in seconds—always use the '7-second rule' with your hand on the pavement to check for safety. Using a wax-based paw balm can provide a protective barrier against these elements. After walks, always wipe their paws to remove any toxins they might have picked up. Keeping the hair between the pads trimmed also helps prevent slipping and reduces the amount of debris and moisture that gets trapped, keeping their feet healthy year-round." 
    },
    { 
      id: "5-7", 
      title: "🚿 Emergency De-skunking: The Science-Backed DIY Solution", 
      meta: "Emergency | By JoyVibe Team", 
      image: "https://i0.wp.com/dogish.com/wp-content/uploads/2025/05/How-to-deskunk-your-dog.jpg?fit=1500%2C1000&ssl=1", 
      desc: "If your dog gets sprayed by a skunk, don't reach for the tomato juice—it only masks the smell and leaves you with a pink dog. Skunk spray contains oils called thiols that are not water-soluble. To neutralize the odor, you need a chemical reaction. Mix 1 quart of 3% hydrogen peroxide, 1/4 cup of baking soda, and 1 teaspoon of liquid dish soap. Apply this mixture to your dog's dry coat (avoiding the eyes), let it sit for 5 minutes, and then rinse thoroughly. The oxygen in the peroxide breaks down the thiols immediately. Be aware that this mixture cannot be stored as it can explode in a closed container, so always mix it fresh right when you need it for maximum effectiveness." 
    },
    { 
      id: "5-8", 
      title: "🧴 Skin Deep: Choosing the Right Shampoo for Sensitive Skin", 
      meta: "Skin Care | By Rachel Green", 
      image: "https://animalsmatter.com/cdn/shop/articles/funny-dog-taking-bubble-bath.jpg_s_1024x1024_w_is_k_20_c_qgTXNWB-YuXtoeTgzTeGKjmNIsX3yKWlWhhNg4PoDto.jpg?v=1678062045", 
      desc: "Not all dog shampoos are created equal. If your dog suffers from flaky skin, constant itching, or redness, they likely have a sensitivity to artificial fragrances or harsh detergents like sulfates found in cheap soaps. Look for 'hypoallergenic' formulas that use soothing ingredients like colloidal oatmeal, aloe vera, or vitamin E to calm inflammation. For dogs with fungal or bacterial issues, a medicated shampoo containing chlorhexidine might be required. Always rinse your dog for twice as long as you think is necessary; leftover soap residue is a major cause of post-bath itching. Using a moisturizing conditioner after shampooing can also help seal the hair cuticle and keep the skin hydrated." 
    },
    { 
      id: "5-9", 
      title: "✂️ Dealing with Mats: Safe Removal Without Damaging the Skin", 
      meta: "Grooming | By Dr. Alan Smith", 
      image: "https://www.aumuca.com/cdn/shop/articles/Is_grooming_necessary_to_prevent_matting_in_cat_fur.jpg?v=1720429037", 
      desc: "Matted fur isn't just an eyesore; it's a health hazard. Mats pull tight against the skin, causing pain with every movement and preventing air from reaching the skin, which often leads to hidden 'hot spots' or infections. Never try to cut a mat out with scissors, as it is incredibly easy to accidentally slice through a dog's thin, delicate skin. Instead, use a detangling spray and a metal comb to gently pick at the mat starting from the outside and working in. For severe matting, the safest and most humane option is to have a professional groomer shave the area with clippers. Prevention through daily brushing is always better than the stress of removing deep mats after they've formed." 
    },
    { 
      id: "5-10", 
      title: "👁️ Clear Vision: Keeping Eyes Clean and Tear-Stain Free", 
      meta: "Hygiene | By Sarah Johnson", 
      image: "https://cdn.whole-dog-journal.com/wp-content/uploads/2021/05/mokie_eye_stainsDSC_0012.jpg.optimal.jpg", 
      desc: "Many small breeds, especially those with white fur, suffer from reddish-brown tear stains under their eyes. This is caused by porphyrins, iron-containing molecules excreted in tears. To manage this, keep the hair around the eyes trimmed short and wipe the area daily with a damp cloth or specialized eye-safe wipes to prevent the moisture from sitting on the fur. Providing filtered water instead of tap water can sometimes reduce the mineral content in tears and help lighten stains. Most importantly, if you notice a sudden increase in tearing, squinting, or a change in discharge color to yellow or green, consult your vet immediately, as these can be signs of a corneal ulcer or a serious eye infection." 
    },
    { 
      id: "5-11", 
      title: "😌 Fear-Free Grooming: Distraction Techniques for Nervous Dogs", 
      meta: "Behavior | By Mark Davis", 
      image: "https://www.redbluffpetresort.com/wp-content/uploads/2025/09/english-cocker-spaniel-5937757.webp", 
      desc: "For many dogs, the sound of clippers or the sensation of water is terrifying. To make grooming a positive bonding experience, you need to use high-value distractions. A 'lick mat' smeared with peanut butter (xylitol-free!) and stuck to the side of the bathtub is a genius way to keep a dog still and happy during a wash. For nail trims, offer a high-value treat after every single clip to create a 'Pavlovian' response where they actually look forward to the clippers. If your dog is extremely stressed, keep grooming sessions very short—even if you only brush one leg or trim one nail per day. Going slow and staying calm prevents the 'grooming phobia' from worsening and keeps you both safe." 
    },
    { 
      id: "5-12", 
      title: "💈 Professional vs. Home Grooming: Knowing When to Call an Expert", 
      meta: "Lifestyle | By Emma Carter", 
      image: "https://cdn.myikas.com/images/1244fa41-86e1-4cbd-9682-c6bb023c9d37/8e36e8f6-d73c-4c2e-ab02-4cc5ddb7075f/image_1080.jpg", 
      desc: "While every owner should handle basic brushing and bathing, some tasks are best left to professionals. Breeds with hair that grows continuously (like Poodles or Doodles) require precision clipping that is difficult to master at home without causing 'clipper burn.' Professional groomers also handle delicate tasks like expressing anal glands or plucking ear hair that can be messy or painful if done incorrectly. Furthermore, groomers are trained to handle difficult or aggressive dogs safely using professional equipment and tables. If your dog has a complex coat or requires a specific breed standard cut, visiting a certified groomer every 6 to 8 weeks ensures they stay in top condition while saving you a massive amount of cleanup and potential stress." 
    }
  ],

  // ==========================================
  // ID 6: Signs Your Cat is Happy and Healthy
  // ==========================================
// ==========================================
  // ID 6: Signs Your Cat is Happy and Healthy
  // ==========================================
  "6": [
    { 
      id: "6-1", 
      title: "🐈 The Symphony of Purring: Contentment or Healing?", 
      meta: "Behavior | By Dr. Alan Smith", 
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80", 
      desc: "Purring is the most iconic sign of a happy cat, but did you know it’s also a biological healing mechanism? While most cats purr when they are being petted or feel safe, they also use low-frequency purring to soothe pain and accelerate bone and tissue repair. A healthy, happy cat will purr consistently during positive social interactions. However, if your cat is purring while hiding or hunched over, they might be trying to self-soothe an injury. Understanding the context of the purr is key to knowing if your feline is truly in a state of bliss or needs medical attention." 
    },
    { 
      id: "6-2", 
      title: "🐾 Making Biscuits: Why Happy Cats Knead Their Owners", 
      meta: "Happy Habits | By Emma Carter", 
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80", 
      desc: "Kneading, or 'making biscuits,' is a rhythmic motion cats do with their paws against a soft surface. This behavior is a comforting throwback to kittenhood, where they would knead their mother to stimulate milk flow. When an adult cat kneads you, it is a profound sign of comfort, security, and absolute trust. They are essentially saying they feel as safe with you as they did with their mother. Happy cats often purr loudly and half-close their eyes while kneading, showing they are in a state of pure emotional relaxation and bonding." 
    },
    { 
      id: "6-3", 
      title: "🚽 Litter Box Detective: What Bathroom Habits Reveal About Health", 
      meta: "Health Check | By Laura Parker", 
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&q=80", 
      desc: "A healthy cat is a consistent cat, especially when it comes to the litter box. Monitoring their bathroom habits is the #1 way to catch early signs of kidney disease or urinary tract infections (UTIs). A happy, well-functioning cat will use the box regularly without straining or vocalizing. If you notice your cat suddenly going outside the box, or if the clumps are significantly larger or smaller than usual, it’s a major red flag. Changes in frequency or consistency of waste are often the very first indicators of internal health issues that require a quick trip to the veterinarian." 
    },
    { 
      id: "6-4", 
      title: "✨ The Lustrous Glow: Why a Shiny Coat Means a Healthy Cat", 
      meta: "Nutrition | By Rachel Green", 
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&q=80", 
      desc: "A cat’s fur is a direct reflection of their internal health and nutritional status. A healthy feline will have a sleek, shiny, and dander-free coat. This is achieved through a combination of high-quality protein in their diet and a dedicated self-grooming routine. Happy cats spend about 30-50% of their day grooming themselves to stay clean. If a cat stops grooming and their fur becomes matted, greasy, or dull, it is often a sign of dental pain, arthritis, or systemic illness. A well-groomed cat is a cat that feels physically capable and mentally content." 
    },
    { 
      id: "6-5", 
      title: "👁️ Windows to the Soul: Checking for Bright and Clear Eyes", 
      meta: "Health Check | By Dr. Alan Smith", 
      image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&q=80", 
      desc: "A healthy cat should have eyes that are bright, clear, and free from any discharge or cloudiness. The pupils should be equal in size and react quickly to light changes. If you see the 'third eyelid' (a white membrane) creeping across the corner of the eye, it’s a sign that the cat is ill or highly stressed. Redness, squinting, or constant tearing can indicate allergies or infections. Clear, alert eyes show that your cat’s nervous system is functioning correctly and they are engaged with their surroundings. Regular eye checks during cuddle time can help you spot subtle changes early." 
    },
    { 
      id: "6-6", 
      title: "🏃 The Midnight Zoomies: Playfulness and Energy Levels", 
      meta: "Activity | By JoyVibe Team", 
      image: "https://ca-times.brightspotcdn.com/dims4/default/8dae686/2147483647/strip/true/crop/1366x912+0+0/resize/1200x801!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F93%2Faf%2F0e64624445f0864412237caa556b%2Fcat-brushing-hero.jpg", 
      desc: "Even as cats age, they should still exhibit bursts of energy, commonly known as 'the zoomies.' This playful behavior indicates that their joints are comfortable and their cardiovascular system is strong. A happy cat will engage in 'hunting' behavior with toys, showing off their natural predatory instincts. If a previously playful cat suddenly becomes lethargic or stops showing interest in their favorite string or laser, it may be a sign of hidden pain or depression. Encouraging daily play not only keeps them physically fit but also provides the mental stimulation necessary for a truly contented house cat." 
    },
    { 
      id: "6-7", 
      title: "🗣️ Vocal Cues: Understanding Chatty vs. Silent Felines", 
      meta: "Communication | By Sarah Johnson", 
      image: "https://platopettreats.com/cdn/shop/articles/the-vocal-range-of-the-siberian-cat_20251228011124_20251228_7455fdd8-b503-441c-87be-78f3606e6415.jpg?v=1770567078&width=480", 
      desc: "Cats primarily meow to communicate with humans, not other cats. A happy cat will often greet you with a chirrup or a high-pitched meow. However, the key to health is 'consistency' in their vocalization. If your quiet cat suddenly becomes extremely loud and demanding (especially at night), they might be experiencing age-related confusion or hyperthyroidism. Conversely, if a chatty cat goes silent, they may be withdrawing due to pain. Listening to the 'tone' of your cat's voice helps you gauge their emotional state—a relaxed cat has a soft, varied range of sounds." 
    },
    { 
      id: "6-8", 
      title: "🐈 Tail Language: The Meaning of the Upright Hooked Tail", 
      meta: "Body Language | By Mark Davis", 
      image: "https://cdn.almonature.com/hubfs/Cat-Tail-Blog-post_1140x630.jpg", 
      desc: "A cat’s tail is a highly expressive barometer of their mood. When a cat walks toward you with their tail held high and a slight 'hook' or 'question mark' at the tip, it is a universal sign of a confident, happy, and friendly cat. This 'tail-up' position shows they are open to interaction and feel secure in their territory. In contrast, a low, tucked, or twitching tail indicates fear or irritation. By observing their tail during different times of the day, you can learn exactly how your cat feels about their environment and the people within it." 
    },
    { 
      id: "6-9", 
      title: "👃 Dental Check: Why Healthy Gums Lead to a Happy Life", 
      meta: "Dental | By Emma Carter", 
      image: "https://getwag.com.au/cdn/shop/articles/Doggo_Dental_Health_Healthy_Dog_Gums_Vs_Unhealthy_Dog_Gums_a43c4c8b-a019-4487-ba3f-061f091ac66d.jpg?v=1766689895&width=920", 
      desc: "Oral health is often overlooked, but it is a critical pillar of feline well-being. A healthy cat should have pink gums (not red or pale) and teeth free from thick yellow tartar. Bad breath in cats is NOT normal; it usually indicates periodontal disease or infection. Because cats are so good at hiding pain, they will often continue to eat even with severe toothaches. Checking their mouth regularly ensures they aren't suffering in silence. Good dental hygiene prevents bacteria from spreading to the heart and kidneys, ensuring your cat stays happy and active for years to come." 
    },
    { 
      id: "6-10", 
      title: "💤 Master of Sleep: Recognizing Restful vs. Painful Hiding", 
      meta: "Rest | By Laura Parker", 
      image: "https://cdn.shopify.com/s/files/1/0765/3946/1913/files/dog_hiding_under_furniture.png?v=1761303464", 
      desc: "Cats are professional sleepers, averaging 12-16 hours of rest a day. A happy cat will sleep in relaxed, exposed positions—like on their side or back—showing they feel safe and unthreatened. However, there is a big difference between 'resting' and 'hiding.' If your cat starts sleeping in unusual, cramped places or refuses to come out for social interaction, they may be trying to hide a physical illness. Monitoring where and how your cat sleeps provides vital clues about their stress levels and physical comfort. Restful sleep is essential for their immune system and overall mood." 
    },
    { 
      id: "6-11", 
      title: "🥣 The Appetite Test: Why Consistent Eating is a Must", 
      meta: "Digestion | By Dr. Alan Smith", 
      image: "https://www.houndsy.com/cdn/shop/articles/why_does_a_dog_stop_eating_his_food_understanding_the_reasons_behind_appetite_changes.webp?v=1766755887", 
      desc: "A steady appetite is one of the most reliable indicators of a healthy cat. While some cats are naturally picky, a sudden total loss of interest in food is a medical emergency for felines, as it can lead to fatty liver disease within just 24-48 hours. A happy cat will greet mealtime with excitement and eat a consistent amount each day. If your cat is 'begging' for food but then refuses to eat it, they may have dental pain or nausea. Keeping track of their caloric intake helps you spot the very first signs that something might be wrong with their digestive system." 
    },
    { 
      id: "6-12", 
      title: "🤝 Head Bunting: The Ultimate Sign of Feline Affection", 
      meta: "Affection | By JoyVibe Team", 
      image: "https://petwellnessdirect.com/cdn/shop/articles/Cat_Love_Blog.jpg?v=1732251914&width=1500", 
      desc: "When your cat bumps their head against your forehead, cheek, or hand, they are performing a behavior called 'bunting.' This is a high-level sign of affection where they rub their scent glands onto you, effectively marking you as a trusted member of their family 'pride.' A cat that initiates bunting is emotionally secure, happy, and bonded with their owner. It is their way of creating a communal scent that signifies safety. Responding with gentle scratches behind the ears reinforces this bond, making your cat feel even more loved and integrated into the household." 
    }
  ],

  
 // ==========================================
  // ID 7: The Complete Pet Health & Management Guide
  // ==========================================
  "7": [
    { 
      id: "7-1", 
      title: "📚 Strategic Vet Selection: Finding the Right Partner for Your Pet", 
      meta: "Guide | By JoyVibe Team", 
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=80", 
      desc: "Choosing a veterinarian is one of the most significant decisions you will make as a pet owner. A great vet is more than just a doctor; they are a partner in your pet's lifelong wellness. Look for clinics that are accredited by the AAHA (American Animal Hospital Association) and observe how the staff interacts with animals. It’s best to find a trustworthy clinic while your pet is healthy, allowing you to establish a baseline and build a relationship before an emergency strikes. Consider factors like location, emergency hours, and the range of diagnostic equipment available on-site." 
    },
    { 
      id: "7-2", 
      title: "📋 Financial Planning: Navigating the First-Year Costs of Pet Ownership", 
      meta: "Budgeting | By Sarah Johnson", 
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80", 
      desc: "Bringing home a new puppy or kitten is a joy, but it comes with a substantial financial responsibility. The first year is often the most expensive, covering a series of essential vaccinations, spaying or neutering procedures, and high-quality growth-specific food. You also need to budget for startup gear like crates, leashes, and grooming tools. Understanding these costs upfront allows you to plan effectively, ensuring that your new family member receives the best possible start in life without causing financial strain on your household." 
    },
    { 
      id: "7-3", 
      title: "🏥 Pet Insurance 101: Balancing Premiums and Peace of Mind", 
      meta: "Finance | By Mark Davis", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_Tzbr4jeVEhG3Tcub6_O62LEIE19omRdIg&s", 
      desc: "Is pet insurance truly worth it? In an era where advanced veterinary treatments like MRI scans and orthopedic surgeries can cost thousands, insurance provides a vital safety net. When comparing plans, look closely at the difference between accident-only coverage and comprehensive plans that include chronic illnesses. Starting a policy while your pet is young ensures that 'pre-existing conditions' don't lock you out of future coverage. It allows you to make medical decisions based on what's best for your pet’s health rather than what's in your bank account." 
    },
    { 
      id: "7-4", 
      title: "🏷️ Microchipping: The Permanent Link Between You and Your Pet", 
      meta: "Safety | By Dr. Alan Smith", 
      image: "https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/117645/1191992/heroimage0.167286001721831201.jpg", 
      desc: "While collars and tags are important, they can easily break or get lost. A microchip is a permanent, rice-sized identification device implanted under the skin that stays with your pet for life. It carries a unique ID number that can be read by scanners at any shelter or vet clinic. However, the chip is only as good as the information in the registry. Always ensure your contact details are updated in the national database. Thousands of lost pets are reunited with their families every year solely because of this simple, lifesaving technology." 
    },
    { 
      id: "7-5", 
      title: "🏠 Advanced Pet-Proofing: Creating a Danger-Free Home Environment", 
      meta: "Safety | By Emma Carter", 
      image: "https://res.cloudinary.com/remax-prod/images/f_auto,q_auto/v1768602936/us-news-prod/dog_cat/dog_cat.jpeg?_i=AA", 
      desc: "Pet-proofing goes beyond hiding shoes; it’s about identifying hidden hazards that could be fatal. Secure your trash cans with locking lids to prevent ingestion of toxic food scraps or sharp objects. Use cord protectors to prevent electrical shocks for curious chewers, and ensure all cleaning supplies and human medications are stored in high, locked cabinets. Small objects like hair ties or coins can cause life-threatening intestinal blockages. Seeing your home from a 'pet’s eye view' helps you identify risks you might otherwise overlook in your daily routine." 
    },
    { 
      id: "7-6", 
      title: "⚖️ The Body Condition Score: Maintaining an Ideal Pet Weight", 
      meta: "Health | By Rachel Green", 
      image: "https://yumove.co.uk/cdn/shop/files/Hungarian-Vizla.webp?v=1757435739&width=550", 
      desc: "Obesity is a leading cause of premature death in pets, contributing to diabetes, heart disease, and severe joint pain. Instead of relying solely on the scale, learn to use the Body Condition Score (BCS). You should be able to easily feel your pet's ribs without a thick layer of fat covering them, and they should have a visible waistline when viewed from above. Keeping your pet at an ideal weight can add up to two years to their life. It requires a disciplined approach to portion control and resisting those begging eyes for extra table scraps." 
    },
    { 
      id: "7-7", 
      title: "🌡️ Mastering Vital Signs: Tracking Your Pet's Baseline Health", 
      meta: "Health | By Dr. Alan Smith", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IrA63uXS7wBEnjvqnEieUSmvBJXkH06u6w&s", 
      desc: "Knowing your pet's normal vital signs is essential for recognizing when an emergency is happening. The average resting heart rate for dogs is 60–140 bpm, while cats range from 150–220 bpm. Their normal body temperature should be between 101.0 and 102.5°F. Practice checking their capillary refill time by pressing on their gums—they should turn from white back to pink in under 2 seconds. Tracking these baseline numbers while they are healthy allows you to provide accurate information to your vet during a crisis, potentially saving precious time." 
    },
    { 
      id: "7-8", 
      title: "🚗 Road Trip Ready: Essential Safety Tips for Car Travel", 
      meta: "Lifestyle | By Laura Parker", 
      image: "https://prideandgroom.com/cdn/shop/articles/Road_Trip_Essentials_for_Your_Dogs.webp?v=1715952700", 
      desc: "Traveling with your pet can be a wonderful adventure if done safely. Allowing a pet to roam free in the car is a major distraction and extremely dangerous in the event of a sudden stop. Use crash-tested crates or seatbelt harnesses to keep them secure. Never leave your pet alone in a parked car, as temperatures can reach lethal levels in minutes, even with windows cracked. For long trips, plan frequent breaks for hydration and stretching, and always carry a travel kit with their medical records and a familiar toy to reduce travel-related anxiety." 
    },
    { 
      id: "7-9", 
      title: "🧒 Baby and Beast: Introducing Your Pet to a New Human Family Member", 
      meta: "Family | By Sarah Johnson", 
      image: "https://www.nanit.com/cdn/shop/articles/babypuppy-1-scaled.jpg?v=1676314828&width=1024", 
      desc: "Bringing a new baby home is a massive transition for a pet. To ensure a smooth introduction, start by gradually changing your pet's schedule weeks before the arrival. Introduce them to baby sounds and smells, such as bringing a blanket with the baby's scent home from the hospital. During the first meeting, keep the pet on a leash and stay calm to avoid transferring anxiety. Reward positive, gentle behavior around the baby to build a happy association. Never leave a pet and baby unsupervised, no matter how much you trust your furry friend." 
    },
    { 
      id: "7-10", 
      title: "✈️ High Altitude Hounds: Navigating Air Travel with Pets", 
      meta: "Travel | By Mark Davis", 
      image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2024/May/air-safety-hero.jpg", 
      desc: "Flying with a pet requires months of preparation. Each airline has specific regulations regarding crate sizes, health certificates, and whether pets can fly in the cabin or cargo. For brachycephalic (flat-faced) breeds, air travel poses significant respiratory risks due to pressure changes. Acclimate your pet to their travel crate weeks in advance so it feels like a safe space. Avoid sedating your pet for flights unless specifically recommended by a vet, as it can affect their ability to regulate body temperature and balance. Proper planning ensures their journey is as stress-free as possible." 
    },
    { 
      id: "7-11", 
      title: "🆘 The DIY Pet First Aid Kit: Essentials for Every Household", 
      meta: "Emergency | By JoyVibe Team", 
      image: "https://moderndogmagazine.com/wp-content/uploads/2019/06/firstaiddog-940x640.jpg", 
      desc: "When an accident happens, having a well-stocked first aid kit can be a lifesaver. Your kit should include sterile gauze, non-stick bandages, adhesive tape, and digital thermometers. Antiseptic wipes and saline solution are vital for cleaning wounds, while tweezers are necessary for removing ticks or splinters. Include a bottle of 3% hydrogen peroxide (only to induce vomiting if instructed by a vet) and styptic powder for bleeding nails. Keeping a pet first aid manual and the phone number for the nearest emergency vet inside the kit ensures you are ready for any situation at a moment's notice." 
    },
    { 
      id: "7-12", 
      title: "🌈 The Final Journey: Coping with the Loss of a Beloved Companion", 
      meta: "Mental Health | By Emma Carter", 
      image: "https://www.laurelbox.com/cdn/shop/files/angel-luciano-LATYeZyw88c-unsplash.jpg?v=1684325981&width=3840", 
      desc: "The bond between a human and a pet is profound, and saying goodbye is one of life's hardest experiences. It’s important to acknowledge that grief is a natural response and that seeking support is a sign of strength. Many people find comfort in creating a memorial, like planting a tree or making a photo album. If you find the loss overwhelming, consider joining a pet loss support group or seeking professional counseling. Understanding the stages of grief helps you navigate this difficult time, allowing you to eventually focus on the beautiful memories and the love you shared." 
    }
  ],

  // ==========================================
  // ID 8: Essential Pet Health & Prevention
  // ==========================================
  "8": [
    { 
      id: "8-1", 
      title: "💉 Vaccinations Decoded: Navigating Core and Non-Core Requirements", 
      meta: "Health | By Dr. Alan Smith", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmJfe_rCpeXqEpB67N2jvUBQkDSQgMdOCkQ&s", 
      desc: "Vaccines are the frontline defense against devastating diseases like Rabies, Parvovirus, and Distemper. However, not every pet needs every vaccine. 'Core' vaccines are considered essential for all pets due to the severity of the disease and the risk of transmission. 'Non-core' vaccines, like those for Lyme disease or Bordetella (kennel cough), are recommended based on your pet's specific lifestyle, geographic location, and exposure risk. Discussing a tailored vaccination schedule with your vet ensures your pet is protected against the most likely threats without unnecessary over-vaccination." 
    },
    { 
      id: "8-2", 
      title: "🦟 The Heartworm Threat: Why Year-Round Prevention is Mandatory", 
      meta: "Parasites | By Rachel Green", 
      image: "https://cdn11.bigcommerce.com/s-ke1v21/product_images/uploaded_images/blog-year-round-heartworm-prevention-risks-section.jpg", 
      desc: "Heartworms are transmitted through mosquito bites and can grow up to a foot long inside your pet's heart and lungs, causing permanent organ damage or death. Treatment for an active infection is painful, expensive, and dangerous for the pet. In contrast, preventative medication—given once a month—is highly effective and safe. Because mosquitoes can survive indoors and emerge during unexpected warm spells in winter, veterinarians strictly recommend year-round prevention. A simple monthly pill or topical treatment is a small price to pay for such vital protection." 
    },
    { 
      id: "8-3", 
      title: "🕷️ Tick Safety: Advanced Techniques for Detection and Removal", 
      meta: "Parasites | By Mark Davis", 
      image: "https://sakercanine.com/cdn/shop/articles/DES_TB_toller-face_2by1_7a74d096-6735-4989-aaa6-e743a8986f44.jpg?v=1737564090&width=1500", 
      desc: "Ticks are more than just a nuisance; they carry dangerous pathogens like Lyme disease and Rocky Mountain Spotted Fever. After every walk in wooded or grassy areas, perform a 'tick check' by feeling for small bumps on your pet's body, paying close attention to ears, toes, and under the collar. If you find a tick, use fine-tipped tweezers to grasp it as close to the skin as possible and pull upward with steady pressure. Never use matches or alcohol to 'burn' it off, as this can cause the tick to regurgitate toxins into your pet. Regular use of vet-approved preventatives is your best defense." 
    },
    { 
      id: "8-4", 
      title: "🦷 Periodontal Disease: Preventing the Silent Health Killer", 
      meta: "Health | By Emma Carter", 
      image: "https://dogtime.com/wp-content/uploads/sites/12/2024/07/IMG_2748-e1722163285743.jpeg", 
      desc: "Dental health is one of the most neglected aspects of pet care. Plaque that isn't removed through brushing hardens into tartar within 48 hours, leading to painful gum inflammation and tooth loss. More alarmingly, the bacteria in the mouth can travel through the bloodstream, attacking the heart, liver, and kidneys. Professional dental cleanings under anesthesia are often necessary to clean beneath the gumline where a toothbrush cannot reach. Combining annual vet cleanings with daily at-home brushing is the only way to ensure your pet doesn't suffer from chronic oral pain and systemic infections." 
    },
    { 
      id: "8-5", 
      title: "💩 Digestion Diagnostics: What Your Pet's Stool Says About Their Health", 
      meta: "Digestion | By Dr. Alan Smith", 
      image: "https://allpets.net/wp-content/uploads/2025/05/dog-poop.jpg", 
      desc: "It’s not a glamorous task, but monitoring your pet's stool is a primary way to track their digestive health. Any sudden changes in color, consistency, or frequency should be noted. Black, tarry stool can indicate internal bleeding, while greasy, grey stool might point to pancreas issues. The presence of mucus or blood often signals inflammation or parasites like Giardia. A healthy stool should be firm, brown, and easy to pick up. If your pet experiences diarrhea for more than 24 hours, or if it's accompanied by vomiting or lethargy, it’s time to bring a sample to your veterinarian for a lab analysis." 
    },
    { 
      id: "8-6", 
      title: "🩸 The Importance of Annual Blood Panels for Senior Pets", 
      meta: "Seniors | By Laura Parker", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbT1u8N5zb59k6V-2jqfxBBSVbb8ODgLw_pg&s", 
      desc: "As pets age, their internal organs begin to wear down, often long before they show any outward signs of illness. Annual or bi-annual blood work for senior pets (typically over age 7) is vital for early detection of kidney disease, liver failure, or thyroid imbalances. Catching these conditions in the early stages allows for dietary changes or medications that can significantly extend their lifespan. A blood panel provides a window into their internal chemistry, giving you the information needed to make proactive health decisions rather than reacting to a full-blown medical crisis." 
    },
    { 
      id: "8-7", 
      title: "☀️ Heatstroke Awareness: Protecting Your Pet from Lethal Temperatures", 
      meta: "Summer Safety | By Sarah Johnson", 
      image: "https://cdn-683a6392c1ac1808a47ec9a0.closte.com/wp-content/uploads/2021/06/bigstock-Dog-Drinking-Water-From-Plasti-419875660.jpg", 
      desc: "Pets cannot sweat like humans; they rely on panting to cool down, which is far less efficient. In high humidity or extreme heat, a pet's body temperature can skyrocket to lethal levels in minutes. Signs of heatstroke include excessive panting, dark red gums, drooling, and collapse. Brachycephalic (flat-faced) breeds are at much higher risk. If you suspect heatstroke, move the pet to a cool area and apply room-temperature water to their body—never use ice-cold water as it can cause shock. This is a critical medical emergency that requires immediate veterinary attention to prevent permanent brain and organ damage." 
    },
    { 
      id: "8-8", 
      title: "❄️ Winter Wellness: Preventing Frostbite and Chemical Hazards", 
      meta: "Winter Safety | By JoyVibe", 
      image: "https://bfahnh.com/wp-content/uploads/2023/12/dog-frostbite-1024x683.jpeg", 
      desc: "Cold weather brings unique dangers, from frozen paw pads to toxic chemicals. Antifreeze has a sweet taste that pets find irresistible, but even a small lick can cause fatal kidney failure. Always wipe your pet's paws after walks to remove ice-melt salts which can burn their skin. For short-haired breeds, a well-fitted coat is a necessity, not a fashion choice. Be aware that damp pets lose body heat rapidly; ensure they are dried thoroughly after being in the snow. Limiting outdoor time during extreme cold snaps prevents frostbite on delicate areas like ears and tail tips." 
    },
    { 
      id: "8-9", 
      title: "🪱 Internal Parasites: Managing the Risk of Worms in Pets", 
      meta: "Parasites | By Rachel Green", 
      image: "https://weu-az-web-ca-cdn.azureedge.net/mediacontainer/medialibraries/centralindependentvetcare/images-canada/blog-images/intestinal-worms-cat.webp?ext=.webp", 
      desc: "Roundworms, hookworms, and tapeworms are common internal parasites that can cause weight loss, anemia, and stunted growth, particularly in young pets. Some of these parasites are 'zoonotic,' meaning they can be transmitted to humans. Puppies and kittens should be dewormed every two weeks until they reach three months of age. For adult pets, a regular fecal exam is the best way to ensure they are worm-free. Using year-round heartworm preventatives that also include deworming agents is a convenient way to protect your pet and your entire family from these hidden threats." 
    },
    { 
      id: "8-10", 
      title: "✂️ Spaying and Neutering: Beyond Population Control", 
      meta: "Health | By Dr. Alan Smith", 
      image: "https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/103744/1324887/heroimage0.270750001748421883.jpg", 
      desc: "Spaying and neutering are vital for preventing overpopulation, but the health benefits are equally important. Spaying females before their first heat cycle virtually eliminates the risk of mammary tumors and prevents pyometra, a life-threatening uterine infection. Neutering males prevents testicular cancer and can reduce the risk of prostate issues. Behaviorally, these procedures can reduce roaming, aggression, and urine marking. Modern veterinary science suggests the 'ideal' age for these procedures varies by breed and size; discuss the best timing for your specific pet with your vet to maximize the long-term health benefits." 
    },
    { 
      id: "8-11", 
      title: "🤧 Identifying and Managing Environmental Pet Allergies", 
      meta: "Skin Care | By Emma Carter", 
      image: "https://cdn.shopify.com/s/files/1/0814/8369/4394/articles/Dog_Allergies_2_b5f6d49a-b664-476c-aa58-ec12728032ed.png?v=1751140698", 
      desc: "Just like humans, pets can suffer from allergies to pollen, dust mites, and mold. While humans get hay fever, pets usually manifest allergies through their skin. If your pet is constantly licking their paws, scratching their ears, or has red, inflamed skin, they are likely suffering from atopy. Managing allergies often requires a multi-faceted approach, including frequent baths with soothing shampoos, high-quality fatty acid supplements to strengthen the skin barrier, and sometimes prescription medications. Identifying the triggers through vet-conducted allergy testing can help you create a targeted plan to keep your pet comfortable and itch-free throughout the seasons." 
    },
    { 
      id: "8-12", 
      title: "💦 The Skin Tent Test: Quickly Identifying Pet Dehydration", 
      meta: "First Aid | By Mark Davis", 
      image: "https://www.goldendailyscoop.com/wp-content/uploads/2025/12/how-can-you-tell-if-your-dog-is-dehydrated.png", 
      desc: "Dehydration can happen quickly during illness or heat exposure and can lead to organ failure if left untreated. To check your pet's hydration level, perform the 'skin tent' test: gently pinch the loose skin on the back of their neck or between the shoulder blades and release it. In a hydrated pet, the skin will snap back instantly. If the skin stays in a 'tent' shape or returns slowly, it is a sign of moderate to severe dehydration. Other signs include dry, tacky gums and sunken eyes. If you suspect dehydration, offer small amounts of water or unflavored Pedialyte and seek veterinary care immediately for fluid therapy." 
    }
  ],

  // ==========================================
  // ID 9: Advanced Behavior & Training Mastery
  // ==========================================
  "9": [
    { 
      id: "9-1", 
      title: "🐕 The Big Three: Mastering Sit, Stay, and Reliable Recall", 
      meta: "Basics | By Mark Davis", 
      image: "https://pet-net.co.uk/wp-content/uploads/2024/09/training_dogs_for_recall.jpg", 
      desc: "Every well-behaved dog starts with a solid foundation of Sit, Stay, and Come. These aren't just parlor tricks; they are essential for your dog's safety in the real world. A reliable 'Stay' prevents a dog from bolting into a busy street, while a strong 'Recall' (coming when called) ensures you can get them back from a potentially dangerous situation. Use high-value treats and keep training sessions short and positive. Consistency across all family members is the key—if the commands or rewards vary, the dog will become confused and unreliable. Mastery of these three commands builds the communication bridge needed for all future training." 
    },
    { 
      id: "9-2", 
      title: "😾 Redirecting Feline Aggression: Stopping Bites and Scratches", 
      meta: "Behavior | By Emma Carter", 
      image: "https://eu-central-1.graphassets.com/AnwjgMYRvQfWK3bRPjoq3z/resize=height:778,width:1080/output=format:webp/l9LK6tcCTxmKxb3JHCRs", 
      desc: "Cat 'love bites' and scratching during play are often signs of overstimulation or a lack of appropriate outlets for their hunting instincts. It is crucial never to use your hands or feet as play targets; this teaches the cat that human skin is a toy. If your cat becomes too aggressive, immediately stop the interaction and walk away—this 'time-out' signals that the fun ends when they get too rough. Provide wand toys and kickers that allow them to vent their predatory energy safely. Understanding your cat's body language, like a twitching tail or dilated pupils, helps you stop play before it crosses the line into aggression." 
    },
    { 
      id: "9-3", 
      title: "🚶 The Loose Leash Walk: Teaching Your Dog to Heel Perfectly", 
      meta: "Leash Skills | By Sarah Johnson", 
      image: "https://www.bowwowlabs.com/cdn/shop/articles/dog-loose-leash-walking-1342380161-671420.png?v=1724060347", 
      desc: "Stop the pulling! Walking should be a pleasant bonding experience, not a tug-of-war. To teach a perfect heel, use a 'be a tree' approach: the second the leash becomes tight, stop walking and wait for the dog to look back or move toward you. Reward them for a loose leash with treats and praise. High-value rewards delivered at your hip level will encourage them to stay by your side. Avoid using retractable leashes for training, as they actually teach the dog that pulling gets them more freedom. With patience and hundreds of repetitions, your dog will learn that staying by your side is the fastest way to get where they want to go." 
    },
    { 
      id: "9-4", 
      title: "😭 Overcoming Separation Anxiety: Building Confidence in Loneliness", 
      meta: "Mental Health | By Dr. Alan Smith", 
      image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/SEEDs/how-to-ease-your-dogs-separation-anxiety-seeds/1800x1200-how-to-ease-your-dogs-separation-anxiety-seeds.jpg", 
      desc: "Separation anxiety is a panic disorder where a dog becomes destructive or vocal when left alone. Overcoming this requires a process called 'desensitization.' Start by identifying your 'departure cues'—like picking up keys or putting on a coat—and perform them without actually leaving. Gradually increase the time you spend outside the door, starting with just seconds. Provide long-lasting chew toys or frozen lick mats to keep them occupied and build a positive association with being alone. In severe cases, work with a professional behaviorist or discuss anxiety medications with your vet to help lower the dog's baseline stress level so they can actually learn to be calm." 
    },
    { 
      id: "9-5", 
      title: "⚡ Clicker Training: The Science of Precise Communication", 
      meta: "Methods | By JoyVibe Team", 
      image: "https://cdn-fastly.petguide.com/media/2025/05/16/08063/what-s-the-science-behind-clicker-training.jpg?size=720x845&nocrop=1", 
      desc: "Clicker training uses a distinct 'click' sound to mark the exact millisecond a pet performs a desired behavior. This 'event marker' is much more precise than the human voice and tells the animal exactly why they are receiving a reward. First, you must 'charge' the clicker by clicking and immediately giving a treat multiple times. Once the pet understands that Click equals Treat, you can use it to shape complex behaviors. This method is incredibly effective for all species, from dogs and cats to birds and horses, because it removes the guesswork and builds a clear, positive dialogue between the trainer and the animal." 
    },
    { 
      id: "9-6", 
      title: "🚽 Housebreaking 101: A Bulletproof Plan for Puppy Potty Training", 
      meta: "Basics | By Rachel Green", 
      image: "https://www.richellusa.com/wp-content/uploads/2021/02/Puppy-Training-Blog-1.jpg", 
      desc: "Potty training success depends on two things: supervision and consistency. Treat your puppy like they are never fully housebroken until they’ve gone months without an accident. Take them outside after every meal, nap, and play session. Use a specific 'potty' word and reward them with a 'jackpot' of treats the instant they finish outside. If you catch them in the act indoors, make a neutral noise to startle them and immediately carry them outside to finish. Never punish a puppy for an old accident; they won't understand the connection. Using an enzymatic cleaner for accidents is vital to remove the scent that would otherwise draw them back to the same spot." 
    },
    { 
      id: "9-7", 
      title: "🗣️ Silence the Bark: Identifying and Treating Excessive Barking", 
      meta: "Nuisance | By Mark Davis", 
      image: "https://farmtopettreats.com/cdn/shop/articles/stop-barking-cover-8053172_53a005f5-08ac-41df-8007-c45b05ca47cb-4687772_1200x.jpg?v=1753308304", 
      desc: "Barking is a form of communication, but excessive noise is usually a symptom of a deeper issue like boredom, fear, or territorial guarding. To stop the barking, you must first identify the trigger. If they bark at people passing the window, close the blinds to remove the visual stimulus. If they bark for attention, you must completely ignore them—even looking at them is a reward. Teach the 'Quiet' command by rewarding the moment they stop barking to catch their breath. Ensure your dog is getting enough physical and mental exercise; a tired dog has much less desire to bark at every leaf that blows by. Training 'Speak' can also help you gain control over when they use their voice." 
    },
    { 
      id: "9-8", 
      title: "🐈 Litter Box Detective: Solving Inappropriate Elimination", 
      meta: "Cat Issues | By Laura Parker", 
      image: "https://www.preventivevet.com/hs-fs/hubfs/cat%20with%20asthma%20in%20uncovered%20litter%20box-canva.jpg?width=500&height=250&name=cat%20with%20asthma%20in%20uncovered%20litter%20box-canva.jpg", 
      desc: "When a cat stops using the litter box, they aren't being spiteful; they are trying to tell you something is wrong. First, rule out medical issues like crystals or UTIs. If health is fine, look at the environment. Cats are very picky about their bathroom. Is the box clean enough? You should have 'number of cats + 1' boxes in the house. Is the location too loud or trapped in a corner? Did you change the litter type recently? Cats prefer unscented, fine-grained clumping litter in an open-top box. Resolving litter box issues requires playing detective to find what part of the current setup makes the cat feel unsafe or uncomfortable during their most vulnerable moments." 
    },
    { 
      id: "9-9", 
      title: "🥊 Understanding Resource Guarding: Safety First Training", 
      meta: "Aggression | By Dr. Alan Smith", 
      image: "https://wheresithappens.com/wp-content/uploads/2025/07/Ultimate-Guide-to-Resource-Guarding.jpg", 
      desc: "Resource guarding—where a dog growls or snaps over food, toys, or a favorite person—is a fear-based behavior where they worry their valuable item will be stolen. Never 'alpha roll' or punish a dog for guarding, as this confirms their fear and can lead to a bite. Instead, use the 'trade-up' method. Approach the dog from a safe distance and toss a treat that is even better than what they have. Gradually work your way closer over weeks until they learn that your approach means 'something even better is coming.' The goal is to change their emotional response from 'Oh no, they’re taking it!' to 'Yay, they’re here to give me a bonus!'" 
    },
    { 
      id: "9-10", 
      title: "🐾 The Socialization Window: Building a Fearless Puppy", 
      meta: "Development | By Emma Carter", 
      image: "https://www.rover.com/blog/wp-content/uploads/puppy-socialization-period-960x540.jpg", 
      desc: "Puppies have a critical socialization window that closes between 12 and 16 weeks of age. During this time, they need positive exposure to everything they will encounter in their adult life: different types of people, varied floor textures, vacuum cleaners, and other animals. A lack of socialization leads to a lifetime of fear-based aggression and anxiety. However, socialization doesn't mean just 'letting them play.' It means controlled, positive experiences where they feel safe. If they seem overwhelmed, back away. The goal is to create a confident, resilient dog that views the world as an interesting and safe place rather than a series of scary threats." 
    },
    { 
      id: "9-11", 
      title: "🙀 Noise Phobias: Helping Pets Through Storms and Fireworks", 
      meta: "Anxiety | By Sarah Johnson", 
      image: "https://spotondogs.ca/wp-content/uploads/2024/12/dogs-fireworks.jpg", 
      desc: "For pets with noise phobias, the sound of thunder or fireworks feels like a literal life-or-death threat. To help them, create a 'safe haven'—an inner room or crate covered with blankets to dampen the sound. Use white noise machines or loud classical music to mask the booms. Tools like Thundershirts provide a gentle, constant pressure that calms many dogs' nervous systems. Most importantly, don't be afraid to comfort your pet; you cannot 'reinforce fear' by being kind. In severe cases, where a pet may injure themselves trying to escape the noise, consult your vet for short-term sedative medications that can help them sleep through the event safely." 
    },
    { 
      id: "9-12", 
      title: "🐈 The Art of the Feline Introduction: Preventing Cat Wars", 
      meta: "Multi-Pet | By JoyVibe", 
      image: "https://www.preventivevet.com/hubfs/two%20cats%20snuggling-shutter.jpg", 
      desc: "Introducing two cats is a delicate process that can take weeks of patience. Never just 'throw them together' to work it out. Start by keeping them in separate rooms where they can only smell each other under the door. Use 'scent swapping' by rubbing a towel on one cat and placing it in the other's room. Next, feed them on opposite sides of the closed door so they associate the other's scent with high-value food. Gradually move to visual introductions through a screen or baby gate. This slow, controlled method prevents the initial fight that can ruin a feline relationship forever, ensuring a peaceful, multi-cat household in the long run." 
    }
  ],

  // ==========================================
  // ID 10: DIY & Recipes (Healthy Treats)
  // ==========================================
"10": [
    { 
      id: "10-1", 
      title: "🍠 Slow-Baked Sweet Potato Chews: The Rawhide Alternative", 
      meta: "Recipes | By Emma Carter", 
      image: "https://cdn.petsathome.com/public/images/products/3000_7102817_05.jpg", 
      desc: "Commercial rawhide can be dangerous due to chemical processing and choking risks. Our DIY sweet potato chews are a safe, one-ingredient alternative. Sweet potatoes are packed with dietary fiber, Vitamin A, and Vitamin C. By slicing them thin and baking them at a low temperature for several hours, you create a chewy, tough texture that satisfies your dog's natural urge to gnaw while providing a healthy boost to their immune system and digestive tract." 
    },
    { 
      id: "10-2", 
      title: "🧊 Gourmet Pupsicles: Hydrating Summer Treats for Heat Relief", 
      meta: "Cool Treats | By Rachel Green", 
      image: "https://mywoof.com/cdn/shop/files/homemade-frozen-treats-for-hot-dogs_20260101010310_20260101.jpg", 
      desc: "When temperatures soar, your pet needs more than just water. These gourmet pupsicles are made by freezing unsalted bone broth with fresh blueberries and parsley. The bone broth provides essential electrolytes and collagen for joint health, while blueberries offer a powerful antioxidant punch. Parsley isn't just a garnish; it acts as a natural breath freshener. This frozen treat keeps your dog occupied, hydrated, and cool during the hottest summer afternoons." 
    },
    { 
      id: "10-3", 
      title: "🥜 No-Bake Peanut Butter Oat Balls: The Ultimate Training Reward", 
      meta: "No-Bake | By JoyVibe", 
      image: "https://images.pond5.com/funny-pet-dog-puppy-playing-footage-258341107_iconl.jpeg", 
      desc: "High-value training rewards are essential for teaching new commands, and these no-bake balls are a canine favorite. Made with rolled oats, plain pumpkin puree, and xylitol-free peanut butter, they are soft enough to hide pills in but firm enough to carry in your pocket. The soluble fiber in oats helps regulate blood sugar, while peanut butter provides healthy fats and protein. Always double-check that your peanut butter does not contain Xylitol, as it is a sweetener that is highly toxic to dogs." 
    },
    { 
      id: "10-4", 
      title: "🐟 Crunchy Tuna Bites: Irresistible Protein Snacks for Felines", 
      meta: "Cat Treats | By Laura Parker", 
      image: "https://pawsomerecipes.com/wp-content/uploads/2025/06/homemade-tuna-cat-treats.jpg", 
      desc: "Cats are notoriously picky eaters, but few can resist the aroma of fresh tuna. These homemade bites combine canned tuna (in water, no salt added) with one egg and a small amount of whole wheat flour. Baked until crispy, they provide a satisfying crunch that helps reduce plaque buildup on your cat's teeth. Unlike store-bought treats filled with mystery 'by-products,' these are pure protein and Omega-3 fatty acids, which promote a shiny coat and reduce skin inflammation in cats." 
    },
    { 
      id: "10-5", 
      title: "🎃 Pumpkin Digestive Biscuits: A Remedy for Sensitive Tummies", 
      meta: "Health Foods | By Dr. Alan Smith", 
      image: "https://platopettreats.com/cdn/shop/articles/are-pumpkin-treats-good-for-constipated-dogs_20251215011027_20251215_3ea4c2ae-d659-4565-9843-f2f4b7dfaaf1.jpg?v=1766348696", 
      desc: "Pure pumpkin is a miracle food for pet digestion, helping with both diarrhea and constipation. These baked cookies combine pumpkin puree with oat flour and a dash of ginger, which is a natural anti-nausea remedy. They are perfect for dogs with sensitive stomachs or those prone to car sickness. Because they are low in fat and high in fiber, they are also a great treat option for overweight pets who need to feel full without the extra calories." 
    },
    { 
      id: "10-6", 
      title: "🍎 Apple and Carrot Crunchers: Vitamin-Packed Vegan Rewards", 
      meta: "Vegan Treats | By Sarah Johnson", 
      image: "https://www.houndsy.com/cdn/shop/articles/what_can_puppies_eat_instead_of_dog_food_a_comprehensive_guide_for_pet_owners.webp?v=1768209653", 
      desc: "Apples and carrots are naturally sweet and packed with Vitamin A and potassium. When grated and mixed with a little coconut oil and baked, they become a crunchy delight that most dogs love. Coconut oil provides medium-chain triglycerides that improve cognitive function and skin health. It is vital to remove all apple seeds and the core before preparation, as they contain trace amounts of cyanide which can be harmful if accumulated in a small pet's system." 
    },
    { 
      id: "10-7", 
      title: "🎂 The Celebration 'Pupcake': A Meat-Based Birthday Treat", 
      meta: "Celebration | By Emma Carter", 
      image: "https://s.yimg.com/ny/api/res/1.2/17iNfz2qEGbV7o5dpE1vKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzUwO2NmPXdlYnA-/https://media.zenfs.com/en/pethelpful_915/37f6e36ce4296d10304da485f296a07e", 
      desc: "Celebrate your pet's special day with a cake that is actually good for them! This 'pupcake' uses ground turkey or lean beef as the base, mixed with shredded carrots. Instead of sugary icing, we use a topping of whipped mashed potatoes or plain Greek yogurt. It’s a high-protein, low-fat celebration meal that won't cause the digestive upset often associated with human birthday cakes. It’s the perfect way to make your furry friend feel like the center of attention on their big day." 
    },
    { 
      id: "10-8", 
      title: "🥩 Oven-Dehydrated Chicken Jerky: Pure High-Value Motivation", 
      meta: "High Protein | By Mark Davis", 
      image: "https://www.houndsy.com/cdn/shop/articles/can_dogs_eat_chicken_in_a_biscuit_crackers__understanding_the_safety_and_implications.jpg?v=1749469477", 
      desc: "Training a distracted dog requires a treat they simply cannot ignore. Store-bought jerky often contains dangerous preservatives and excessive salt. By slicing lean chicken breast into paper-thin strips and dehydrating them in your oven at 175°F for several hours, you create a 100% natural, high-protein snack. This jerky is incredibly aromatic and motivating for dogs, making it the perfect tool for mastering difficult commands like 'stay' or 'recall' in high-distraction environments." 
    },
    { 
      id: "10-9", 
      title: "🥣 Golden Bone Broth: A Joint-Healing Superfood Supplement", 
      meta: "Supplements | By Dr. Alan Smith", 
      image: "https://dogchild.co/cdn/shop/articles/Untitled_design_38_e686fa18-8912-47b0-b383-072d2041352d.jpg?v=1754068264", 
      desc: "Bone broth is a powerhouse of nutrition for aging pets or those recovering from surgery. By slow-cooking marrow bones with a splash of apple cider vinegar, you leach out essential minerals and collagen. Collagen is critical for maintaining joint elasticity and a healthy gut lining. Adding a pinch of turmeric creates 'Golden Broth,' providing powerful anti-inflammatory benefits. It can be served as a standalone warm drink or poured over kibble to encourage picky eaters to finish their meals while supporting their skeletal health." 
    },
    { 
      id: "10-10", 
      title: "🍣 Crispy Salmon Skins: Omega-3 Boost for Skin and Coat", 
      meta: "Omega-3 | By Rachel Green", 
      image: "https://www.thinkjinx.com/cdn/shop/articles/Omega_3.png?v=1742543530", 
      desc: "Don't throw away those salmon skins! They are the most concentrated source of Omega-3 fatty acids, which are essential for reducing skin inflammation and promoting a mirror-like shine on your pet's coat. By baking them until they are completely dehydrated and crispy, you create a gourmet snack that both dogs and cats adore. Omega-3s also support brain health and can help slow the progression of kidney disease, making these crunchy 'chips' a functional health supplement masquerading as a treat." 
    },
    { 
      id: "10-11", 
      title: "🍉 Watermelon Frosty: A Refreshing Zero-Fat Hydrator", 
      meta: "Hydration | By JoyVibe", 
      image: "https://roguepetscience.com/cdn/shop/articles/can_dogs_eat_watermelon_featured_image.jpg?v=1698432451", 
      desc: "Watermelon is 92% water, making it the perfect low-calorie hydrator for overweight pets. By blending seedless watermelon flesh with a few mint leaves and freezing the mixture in silicone molds, you create a 'frosty' treat that is as refreshing as it is healthy. The mint helps settle the stomach and freshen breath, while the lycopene in the watermelon provides cellular protection. This is an excellent post-walk treat to help your pet's body temperature return to normal quickly and safely." 
    },
    { 
      id: "10-12", 
      title: "🚫 Forbidden Kitchen: A Guide to Toxic DIY Ingredients", 
      meta: "Safety | By Laura Parker", 
      image: "https://cdn.shopify.com/s/files/1/1057/6184/files/10_Toxic_Foods_Dogs_Should_Never_Eat_-_a_white_maltese_dog_sitting_on_the_floor_with_food_and_fruits_480x480.jpg?v=1761833987", 
      desc: "When cooking for your pet, it's not just about what you include, but what you exclude. Many common human staples are lethal to pets. Macadamia nuts cause tremors and weakness, while onions and garlic can destroy a pet's red blood cells. Grapes and raisins lead to sudden kidney failure, and the pits of fruits like cherries and peaches contain cyanide. Always ensure your DIY recipes are free from salt, sugar, and artificial sweeteners. Knowing these forbidden foods is the most critical step in becoming a safe and successful homemade pet chef." 
    }
  ],

  // ==========================================
  // ID 11: Pet Lifestyle & Activities
  // ==========================================
 "11": [
    { 
      id: "11-1", 
      title: "🥾 Wilderness Bound: A Complete Guide to Hiking with Your Dog", 
      meta: "Outdoors | By Mark Davis", 
      image: "https://nutrenaworld.com/wp-content/uploads/2024/01/Blog_Pet_hiking-with-pets_820x525.png", 
      desc: "Hiking is the ultimate bonding activity, providing both physical exertion and a wealth of new scents for your dog to explore. Before hitting the trails, ensure your dog has a well-fitted harness and you carry a dedicated first aid kit. Always pack twice as much water as you think you'll need, and check the trail's leash laws to protect local wildlife. After the hike, perform a thorough tick check and inspect their paw pads for cuts or thorns. Preparedness ensures your outdoor adventures remain safe and exhilarating for both species." 
    },
    { 
      id: "11-2", 
      title: "🧩 Cognitive Challenges: Using Brain Games to Prevent Boredom", 
      meta: "Enrichment | By Emma Carter", 
      image: "https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/blt5de079449c794e48/683f9983fd6bfcdefd99139d/mental-stimulation-puppies-header@1.5x.jpg", 
      desc: "Mental fatigue is often more effective at calming an energetic dog than physical exercise alone. Puzzle toys, snuffle mats, and hide-and-seek games force your pet to use their problem-solving skills and their most powerful tool—their nose. For cats, interactive laser pointers and feather wands satisfy their predatory drive. Cognitive enrichment prevents destructive behaviors like chewing furniture or excessive barking, as it provides a constructive outlet for their intelligence. A bored pet is often a stressed pet; keep their minds sharp and they will be much more relaxed in the home." 
    },
    { 
      id: "11-3", 
      title: "🌊 Aquatic Safety: Introducing Your Pet to Swimming and Water", 
      meta: "Summer | By Sarah Johnson", 
      image: "https://luckydogbarkandbrew.com/wp-content/uploads/Dog-swimming-tips-1200x900.jpg", 
      desc: "Contrary to popular belief, not all dogs are natural swimmers. Breeds like Bulldogs and Corgis can struggle to stay afloat due to their body structure. When introducing your pet to water, start in a shallow area and use a high-quality pet life jacket with a handle. Never throw a pet into the water, as this can create a lifelong phobia. For cats, 'water play' can be as simple as a dripping faucet or a floating toy in a shallow basin. Always rinse off pool chemicals or lake bacteria after a swim to prevent skin irritation and ensure they don't ingest toxic blue-green algae." 
    },
    { 
      id: "11-4", 
      title: "🐈 The Catio Revolution: Providing Safe Outdoor Access for Felines", 
      meta: "Cat Lifestyle | By Laura Parker", 
      image: "https://protectapet.com/cdn/shop/articles/Cat_Fence_Barrier_1_ff411af1-34f0-4e26-b7ac-04e6c49da39c.png?v=1742402221&width=3840", 
      desc: "Indoor cats often miss out on the mental stimulation of the outside world, but roaming free poses risks from traffic and predators. A 'Catio'—an enclosed outdoor patio for cats—is the perfect solution. It allows your cat to enjoy the fresh air, watch birds, and soak up the sun without the dangers of being unsupervised. You can furnish it with climbing shelves, scratching posts, and cat-safe plants. Catios significantly reduce feline stress and prevent obesity by encouraging movement, providing a safe way for your cat to experience the 'wild' from the security of their home." 
    },
    { 
      id: "11-5", 
      title: "🚲 Cycling Companions: How to Safely Bike with Your High-Energy Dog", 
      meta: "Active | By Dr. Alan Smith", 
      image: "https://www.dailypaws.com/thmb/Jkd4b_prS3XZe6CNU1WM_G7ivgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/biking-with-dog-1208975567-2000-44aee9e378824115a47819b61697b845.jpg", 
      desc: "For high-energy breeds like Huskies or Weimaraners, a simple walk isn't enough to burn off their stamina. Biking with your dog can be a great workout, but it requires special equipment like a non-tangling bike leash attachment that keeps the dog a safe distance from the wheels. Start with short distances on soft grass to protect their paw pads and monitor them closely for signs of exhaustion. Never bike with a dog in extreme heat, and ensure they have mastered basic commands like 'left,' 'right,' and 'stop' to prevent accidents. It’s a high-speed bonding experience for the truly active duo." 
    },
    { 
      id: "11-6", 
      title: "🧶 DIY Cat Enrichment: Crafting Irresistible Homemade Toys", 
      meta: "Crafts | By Rachel Green", 
      image: "https://www.care.com/c/wp-content/uploads/sites/2/2021/04/amyj863-202020280220831255None-e1727296389547-1614x1080.jpg", 
      desc: "You don't need to spend a fortune to keep your cat entertained. Many of the best feline toys can be made from common household items. A simple cardboard box with holes cut out becomes a 'whack-a-mole' game, and empty toilet paper rolls can be folded into treat dispensers. Braiding old t-shirts into a wand toy provides a durable chase target. These DIY projects allow you to constantly rotate your cat's toy selection, which is essential for preventing 'toy fatigue.' Engaging your cat in play for just 15 minutes a day can drastically improve their mood and reduce nighttime restlessness." 
    },
    { 
      id: "11-7", 
      title: "🏕️ Paws in the Park: Mastering Pet-Friendly Camping Trips", 
      meta: "Travel | By JoyVibe Team", 
      image: "https://campingsitesuk.co.uk/wp-content/uploads/2024/05/AdobeStock_765179777-scaled-1-1024x574.jpeg", 
      desc: "Camping with your pet is an incredible way to disconnect and bond with nature. To ensure success, choose a pet-friendly campground and bring a long tether so your pet can enjoy the site while remaining secure. Pack a portable bed to give them a familiar place to sleep inside the tent, and never leave food out that could attract wildlife. Be mindful of evening temperatures; even dogs with thick coats can get chilly at night. Carrying a recent photo and their vaccination records is a must for any travel. With the right gear, your pet will find the sights and sounds of the forest just as magical as you do." 
    },
    { 
      id: "11-8", 
      title: "🎾 Beyond the Ball: Fetch Alternatives for Modern Dogs", 
      meta: "Play | By Mark Davis", 
      image: "https://www.houndsy.com/cdn/shop/articles/how_to_exercise_your_dog_at_home_fun_and_creative_ways_to_keep_them_active.webp?v=1753790107", 
      desc: "While fetch is a classic, many dogs get bored of the same repetitive motion, or the high-impact jumping can be hard on their joints. Consider alternatives like 'Frisbee Golf' or using a 'flirt pole'—a long stick with a toy attached by a rope. Flirt poles allow your dog to use their natural herding and chasing instincts in a small space while giving you total control over the intensity. Scent-tracking games, where you hide a toy and have the dog 'find it,' engage their brain and nose simultaneously. These variations keep playtime fresh and provide a more well-rounded physical and mental workout." 
    },
    { 
      id: "11-9", 
      title: "🐾 Rainy Day Fun: Setting Up an Indoor Pet Obstacle Course", 
      meta: "Rainy Days | By Emma Carter", 
      image: "https://images.squarespace-cdn.com/content/v1/5e7c3ad4ab841d781e6be704/41317911-51f6-45ff-964b-b35b0d75a5fa/cute-dog-ready-to-go-out-in-the-rain-2021-08-30-22-09-20-utc.jpg", 
      desc: "Don't let bad weather ruin your pet's exercise routine. You can build a challenging obstacle course using items you already have at home. Use hula hoops for jumping, sturdy boxes for tunnels, and kitchen chairs for a 'slalom' course. This activity is excellent for building your dog's confidence and improving their coordination. For cats, you can use step-stools and pillows to create a climbing challenge. Not only does this burn physical energy, but the process of navigating the course is a great mental workout that strengthens the communication between you and your pet during the long, indoor hours." 
    },
    { 
      id: "11-10", 
      title: "🧘 Doga: The Art of Practicing Yoga with Your Dog", 
      meta: "Wellness | By Sarah Johnson", 
      image: "https://blog.petfinn.com/static/97fa0892c05bd36844113ed8fe5bdbb6/87f9f/desktop-card-doga.jpg", 
      desc: "Doga (Dog Yoga) is a growing trend that focuses on gentle stretching and meditation for both you and your canine companion. It’s not about getting your dog into a 'downward dog' pose, but rather about creating a calm, shared space where you can bond through touch. Gentle canine massage during the session can help lower your dog's blood pressure and improve their circulation. For anxious dogs, the focused, quiet environment of a Doga session helps them learn to settle and relax. It’s a unique way to deepen your connection and promote a peaceful lifestyle for both ends of the leash." 
    },
    { 
      id: "11-11", 
      title: "🏄 SUP Pups: Navigating Paddleboarding with Your Pet", 
      meta: "Water Sports | By Rachel Green", 
      image: "https://bluefinsupboards.com/cdn/shop/articles/715cdd8a234a1ff81d10ec4899f9a745.png?v=1758793347", 
      desc: "Stand-up paddleboarding (SUP) is a serene way to enjoy the water with your dog. Success starts on dry land; let your dog get comfortable standing on the board before ever hitting the water. Once on the lake, have your dog sit or lie down in the center of the board to maintain balance. A life jacket with a sturdy handle is non-negotiable, as it allows you to easily pull them back on board if they take an unexpected dip. The core strength and focus required for SUP provide a low-impact but effective workout for your pet while they enjoy a 360-degree view of the water." 
    },
    { 
      id: "11-12", 
      title: "🐈 Harness Training: Taking Your Indoor Cat on Outdoor Adventures", 
      meta: "Adventures | By Laura Parker", 
      image: "https://catharnessaustralia.com.au/cdn/shop/articles/Glen_Guilmartin_glen.gg86_hotmail.com.jpg?v=1694130420", 
      desc: "Who says only dogs go for walks? Harness training allows indoor cats to explore the neighborhood safely. The key is a slow, patient introduction to the harness inside the home, rewarding them with treats until they no longer notice they are wearing it. Once they are comfortable on a leash, start with very short trips to a quiet backyard. Unlike walking a dog, walking a cat usually involves them leading the way and sniffing every blade of grass. It provides immense sensory enrichment and can stop bored cats from trying to bolt out the front door, making it a life-changing lifestyle shift for curious felines." 
    }
  ]
  
  };

  const articlesList = categoryData[id] || [];


  const handleJoinSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <>
      <style>{`
        :root {
            --primary-btn: #f49b88;
            --btn-hover: #e08977;
            --bg-pink: #fde4e1;
            --text-dark: #333;
            --text-light: #666;
            --white: #ffffff;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Roboto, sans-serif; color: var(--text-dark); background-color: #fff; }
        a { text-decoration: none; color: inherit; transition: 0.3s; }

        /* Navigation */
        nav { display: flex; justify-content: space-between; align-items: center; padding: 30px 80px; background: var(--white); border-bottom: 1px solid #eee; }
        .logo { font-size: 38px; font-weight: 800; color: var(--primary-btn); }
        .nav-links { display: flex; gap: 40px; font-size: 24px; font-weight: 600; }
        .nav-links a:hover { color: var(--primary-btn); }
        .nav-join-btn { border: 2px solid var(--primary-btn); color: var(--primary-btn); padding: 15px 35px; border-radius: 60px; font-size: 20px; font-weight: 700; cursor: pointer; transition: 0.3s; background: transparent; }
        .nav-join-btn:hover { background: var(--primary-btn); color: white; }

        /* Back to Home Button - Box Styled */
        .back-home-box { 
            display: inline-flex; 
            align-items: center; 
            gap: 10px; 
            color: var(--primary-btn); 
            font-weight: 700; 
            font-size: 18px; 
            margin-bottom: 30px; 
            padding: 12px 25px; 
            border: 2px solid var(--primary-btn); 
            border-radius: 8px; 
            background: transparent;
        }
        .back-home-box:hover { 
            background-color: var(--bg-pink); 
            color: var(--text-dark);
            transform: translateY(-3px);
        }

        /* Header Section */
        .details-header { padding: 60px 80px 40px 80px; max-width: 1500px; margin: 0 auto; }
        .details-header h1 { font-size: 48px; font-weight: 800; color: #1a202c; margin-bottom: 20px; }
        .details-header p { font-size: 24px; color: var(--text-light); line-height: 1.6; max-width: 1100px; }

        /* Grid Section - 3 Cards per line */
        .container-grid { max-width: 2500px; margin: 0 auto 100px auto; padding: 0 80px; }
        .articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 5px; row-gap: 20px; }
        .article-card { display: flex; flex-direction: column; height: 100%; }
        .card-img { width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin-bottom: 25px; }
        .card-title { font-size: 28px; font-weight: 800; line-height: 1.2; color: #1a202c; margin-bottom: 15px; }
        .card-desc { font-size: 17px; color: #4a5568; line-height: 1.8; text-align: justify; flex-grow: 1; }

        /* Footer */
        footer { background-color: #cce8cc; padding: 100px 80px 80px 80px; position: relative; color: #222; display: flex; flex-direction: column; align-items: center; margin-top: 100px; }
        .footer-socials { display: flex; gap: 25px; position: absolute; right: 80px; top: 100px; }
        .footer-socials svg { width: 35px; height: 35px; fill: #000; cursor: pointer; }
        .footer-socials svg:hover { fill: var(--primary-btn); }
        .footer-main-links { display: flex; gap: 50px; flex-wrap: wrap; justify-content: center; margin-bottom: 60px; }
        .footer-main-links a { text-decoration: none; color: #333; font-weight: 600; font-size: 24px; }
        .footer-main-links a:hover { color: var(--primary-btn); }
        .footer-bottom-group { display: flex; flex-direction: column; align-items: center; gap: 25px; }
        .footer-policy-links { display: flex; gap: 50px; justify-content: center; }
        .footer-policy-links a { text-decoration: none; color: #333; font-weight: 600; font-size: 20px; }
        .footer-policy-links a:hover { color: var(--primary-btn); }
        .footer-bottom-text { font-size: 22px; font-weight: 500; color: #333; margin-top: 15px; }
        .scroll-to-top { position: absolute; bottom: 60px; right: 80px; background-color: #000; color: #fff; width: 55px; height: 55px; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; }

        /* ================== MODAL CSS ================== */
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(5px);
          display: flex; justify-content: center; align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff; padding: 40px; border-radius: 16px;
          width: 90%; max-width: 500px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center; animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .close-btn {
          position: absolute; top: 15px; right: 20px;
          font-size: 30px; font-weight: bold; background: none;
          border: none; cursor: pointer; color: #999; transition: 0.3s;
        }
        .close-btn:hover { color: #333; }

        /* Form Styles */
        .form-area h2 { font-size: 32px; color: #1a202c; margin-bottom: 10px; }
        .form-area p { font-size: 16px; color: #666; margin-bottom: 25px; }
        .form-area form { display: flex; flex-direction: column; gap: 15px; }
        .form-area input {
          padding: 14px 18px; border: 1px solid #ddd; border-radius: 8px;
          font-size: 16px; width: 100%; transition: 0.3s;
        }
        .form-area input:focus { outline: none; border-color: var(--primary-btn); box-shadow: 0 0 0 3px var(--bg-pink); }
        .submit-btn {
          background: var(--primary-btn); color: #fff; border: none;
          padding: 16px; border-radius: 8px; font-size: 18px; font-weight: bold;
          cursor: pointer; margin-top: 10px; transition: 0.3s;
        }
        .submit-btn:hover { background: var(--btn-hover); transform: translateY(-2px); }

        /* Success Message Styles */
        .success-area .icon { font-size: 70px; margin-bottom: 15px; }
        .success-area h2 { font-size: 32px; color: #2e7d32; margin-bottom: 15px; }
        .success-area p { font-size: 18px; color: #555; line-height: 1.6; margin-bottom: 30px; }
        .success-btn {
          background: #1a202c; color: #fff; border: none;
          padding: 14px 35px; border-radius: 8px; font-size: 16px; font-weight: 600;
          cursor: pointer; transition: 0.3s;
        }
        .success-btn:hover { background: #333; transform: scale(1.05); }

        @media (max-width: 1200px) { .articles-grid { grid-template-columns: repeat(2, 1fr); } .footer-socials { position: static; margin-bottom: 30px; } }
        @media (max-width: 768px) { .articles-grid { grid-template-columns: 1fr; } .nav-links, .nav-join-btn { display: none; } }
      `}</style>

      {/* Navbar */}
      <nav>
        <div className="logo">🐾 JoyVibe Pet Service</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Training</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Resources Hub</a></li>
        </ul>
        <button className="nav-join-btn" onClick={() => setIsModalOpen(true)}>Join our App</button>
      </nav>

      {/* Conditional Rendering for ID 12 (Join Our Community Page) */}
      {id === "12" ? (
        <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 20px', backgroundColor: '#fcfcfc' }}>
          {!isSubmitted ? (
            <div style={{ background: '#fff', padding: '50px 40px', borderRadius: '16px', boxShadow: '0 10px 35px rgba(0,0,0,0.06)', maxWidth: '600px', width: '100%', textAlign: 'center', border: '1.5px solid #fde4e1' }}>
              <div style={{ fontSize: '55px', marginBottom: '10px' }}>📣</div>
              <h2 style={{ fontSize: '36px', color: '#1a202c', margin: '10px 0 15px 0' }}>Join Our Community</h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '35px' }}>Fill out the form below to become a member of our JoyVibe family.</p>
              <form onSubmit={handleJoinSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="text" placeholder="Your Full Name" required style={{ padding: '16px', border: '1.5px solid #ddd', borderRadius: '10px', fontSize: '16px', outline: 'none' }} />
                <input type="email" placeholder="Email Address" required style={{ padding: '16px', border: '1.5px solid #ddd', borderRadius: '10px', fontSize: '16px', outline: 'none' }} />
                <button type="submit" style={{ background: 'var(--primary-btn)', color: '#fff', border: 'none', padding: '16px', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s', marginTop: '10px' }}>Submit Request</button>
              </form>
            </div>
          ) : (
            <div style={{ background: '#fff', padding: '60px 40px', borderRadius: '16px', boxShadow: '0 10px 35px rgba(0,0,0,0.06)', maxWidth: '600px', width: '100%', textAlign: 'center', border: '1.5px solid #fde4e1' }}>
              <div style={{ fontSize: '85px', marginBottom: '20px' }}>🎉</div>
              <h2 style={{ fontSize: '40px', color: '#2e7d32', marginBottom: '20px' }}>Awesome!</h2>
              <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.6', marginBottom: '40px' }}>Congratulations! Now you are our joined member. Welcome to the amazing pet community!</p>
              <a href="/" style={{ background: '#1a202c', color: '#fff', padding: '16px 40px', borderRadius: '10px', fontSize: '18px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>Back to Home</a>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Header Section */}
          <header className="details-header">
            <a href="/" className="back-home-box">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Home
            </a>
            <h1>{categoryTitles[id] || "Pet Care Resources"}</h1>
            <p>Expert insights and detailed guides on {categoryTitles[id]?.toLowerCase()}. Our mission is to provide you with high-quality resources for your pet's physical and mental well-being.</p>
          </header>

          {/* Articles Grid */}
          <div className="container-grid">
            <div className="articles-grid">
              {articlesList.length > 0 ? articlesList.map((article) => (
                <div key={article.id} className="article-card">
                  <img src={article.image} alt={article.title} className="card-img" />
                  <div style={{fontSize: '14px', fontWeight: '700', color: '#999', textTransform: 'uppercase', marginBottom: '10px'}}>Pet Health & Behavior</div>
                  <h3 className="card-title">{article.title}</h3>
                  <div style={{fontSize: '16px', color: '#aaa', marginBottom: '20px'}}>{article.meta}</div>
                  <p className="card-desc">{article.desc}</p>
                </div>
              )) : (
                <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '100px'}}>
                   <h2 style={{fontSize: '32px'}}>Content Loading...</h2>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-socials">
          <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
        </div>
        <div className="footer-main-links">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Categories</a>
          <a href="#">Advertise with Us</a>
        </div>
        <div className="footer-bottom-group">
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-bottom-text">Copyright © 2025 JoyVibe </div>
        </div>
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
      </footer>

      {/* ================== JOIN APP MODAL ================== */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          {/* Prevent clicks inside the modal from closing it */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            
            {!isSubmitted ? (
              <div className="form-area">
                <h2>Join JoyVibe!</h2>
                <p>Fill out the form below to become a part of our amazing pet community.</p>
                <form onSubmit={handleJoinSubmit}>
                  <input type="text" placeholder="Your Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="text" placeholder="Pet's Name (Optional)" />
                  <button type="submit" className="submit-btn">Join Now</button>
                </form>
              </div>
            ) : (
              <div className="success-area">
                <div className="icon">🎉</div>
                <h2>Awesome!</h2>
                <p>Congratulations! You are now an official joined member of the JoyVibe community. Welcome aboard!</p>
                <button className="success-btn" onClick={handleCloseModal}>Continue Exploring</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}