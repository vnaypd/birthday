import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Camera, MessageCircle, Gift, Cake, PartyPopper, Moon as Balloon, Music, Crown, Flower2, Zap, Rainbow, Sun } from 'lucide-react';
import img1 from "./img-1.jpg"
import img2 from "./img-2.jpg"
import img3 from "./img-3.jpg"

function App() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string; size: number }>>([]);
  const [balloons, setBalloons] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([]);
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [currentWish, setCurrentWish] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
  const [birthdayClicks, setBirthdayClicks] = useState(0);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const [currentCompliment, setCurrentCompliment] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);

  const birthdayWishes = [
    "Happy Birthday to my sunshine! ☀️✨",
    "Another year of being absolutely amazing! 🌟💫",
    "You make every day feel like a celebration! 🎉🎊",
    "Wishing you all the happiness in the world! 🌈💖",
    "You deserve all the love and joy today! 💕🎂",
    "Here's to another year of beautiful memories! 🥂✨",
    "You're not just older, you're more wonderful! 🌸👑",
    "May all your birthday wishes come true! 🎂🌟",
    "Today the world celebrates YOU! 🌍💝",
    "Another year of being my favorite person! 💕😍"
  ];

  const sweetCompliments = [
    "You're absolutely gorgeous! 😍✨",
    "Your smile lights up my world! 😊🌟",
    "You're my favorite person ever! 💕👑",
    "You make everything better! 🌈💖",
    "You're incredibly amazing! ⭐💫",
    "You're my happy place! 🏠💕",
    "You're pure magic! ✨🦄",
    "You're my greatest blessing! 🙏💝"
  ];

  const confettiColors = ['#ff69b4', '#ffd700', '#98fb98', '#87ceeb', '#dda0dd', '#f0e68c', '#ff6347', '#40e0d0'];
  const balloonColors = ['#ff1493', '#ff69b4', '#da70d6', '#ba55d3', '#9370db', '#8a2be2', '#ff6347', '#ffd700'];

  useEffect(() => {
    // Create enhanced confetti with different sizes
    const newConfetti = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: Math.random() * 3 + 2
    }));
    setConfetti(newConfetti);

    // Create more floating balloons
    const newBalloons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      delay: Math.random() * 3,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)]
    }));
    setBalloons(newBalloons);

    // Create floating hearts
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 95,
      delay: Math.random() * 2
    }));
    setFloatingHearts(newHearts);

    // Cycle through birthday wishes faster
    const wishInterval = setInterval(() => {
      setCurrentWish(prev => (prev + 1) % birthdayWishes.length);
    }, 2800);

    // Cycle through compliments
    const complimentInterval = setInterval(() => {
      setCurrentCompliment(prev => (prev + 1) % sweetCompliments.length);
    }, 3200);

    // Show surprise after 2 seconds
    const surpriseTimer = setTimeout(() => {
      setShowSurprise(true);
    }, 2000);

    // Show fireworks after 5 seconds
    const fireworksTimer = setTimeout(() => {
      setShowFireworks(true);
    }, 5000);

    return () => {
      clearInterval(wishInterval);
      clearInterval(complimentInterval);
      clearTimeout(surpriseTimer);
      clearTimeout(fireworksTimer);
    };
  }, []);

  const handleBirthdayClick = () => {
    setBirthdayClicks(prev => prev + 1);
    if (birthdayClicks >= 4) {
      setShowSpecialMessage(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-50 via-blue-100 to-rose-100 font-['Poppins'] overflow-x-hidden relative">
      {/* Enhanced Floating Confetti */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {confetti.map(piece => (
          <div
            key={piece.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animation: `confettiFall 5s infinite linear ${piece.delay}s, sparkle 2s infinite ${piece.delay}s`
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            className="absolute"
            style={{
              left: `${heart.x}%`,
              animationDelay: `${heart.delay}s`,
              animation: `floatHeart 8s infinite ease-in-out ${heart.delay}s`
            }}
          >
            <Heart
              className="w-6 h-6 text-pink-400 opacity-60"
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Floating Balloons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {balloons.map(balloon => (
          <div
            key={balloon.id}
            className="absolute"
            style={{
              left: `${balloon.x}%`,
              animationDelay: `${balloon.delay}s`,
              animation: `floatBalloon 7s infinite ease-in-out ${balloon.delay}s`
            }}
          >
            <Balloon
              className="w-10 h-10 opacity-70 drop-shadow-lg"
              style={{ color: balloon.color }}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Fireworks Effect */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 20}%`,
                animation: `firework 3s infinite ${i * 0.5}s`
              }}
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="backdrop-blur-sm bg-white/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 max-w-6xl mx-auto relative overflow-hidden party-lights">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 animate-bounce">
            <Cake className="w-10 h-10 text-pink-500" />
          </div>
          <div className="absolute top-4 left-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <PartyPopper className="w-10 h-10 text-purple-500" />
          </div>
          <div className="absolute top-16 right-16 animate-spin">
            <Crown className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="absolute top-16 left-16 animate-pulse">
            <Flower2 className="w-8 h-8 text-pink-400" />
          </div>

          <div className="animate-bounce mb-8" onClick={handleBirthdayClick}>
            <div className="relative cursor-pointer">
              <Heart className="w-20 h-20 md:w-24 md:h-24 text-pink-500 mx-auto animate-heart-pulse birthday-glow" fill="currentColor" />
              <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-yellow-400 animate-spin" />
              <Star className="absolute -bottom-2 -left-2 w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </div>

          <h1 className="font-['Pacifico'] text-5xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-400 via-blue-500 to-rose-500 bg-clip-text mb-8 animate-pulse drop-shadow-lg">
            Happy Birthday Shruti! 🎂✨
          </h1>

          <div className="mb-8">
            <p className="text-xl md:text-3xl text-gray-700 mb-4 leading-relaxed max-w-4xl font-medium">
              Today is all about celebrating the most
              <span className="font-bold text-pink-600 animate-pulse"> incredible, beautiful, amazing person </span>
              I know... YOU! 🎉💖
            </p>

            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-4 mb-6 animate-pulse">
              <p className="font-['Dancing_Script'] text-2xl md:text-3xl text-purple-700 font-bold">
                {sweetCompliments[currentCompliment]}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce cute-hover">
              <Crown className="inline w-6 h-6 mr-2" />
              Birthday Queen 👑
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce cute-hover" style={{ animationDelay: '0.2s' }}>
              <Star className="inline w-6 h-6 mr-2" />
              My Everything ⭐
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce cute-hover" style={{ animationDelay: '0.4s' }}>
              <Sun className="inline w-6 h-6 mr-2" />
              My Sunshine ☀️
            </div>
          </div>

          {showSurprise && (
            <div className="animate-fadeIn mb-6">
              <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 border-4 border-dashed border-pink-400">
                <p className="text-2xl md:text-3xl font-['Dancing_Script'] text-purple-600 font-bold animate-pulse">
                  🎈 Surprise! This magical website is made just for YOU! 🎈
                </p>
                <p className="text-lg text-gray-600 mt-2">
                  Click the heart above for more surprises! 💕
                </p>
              </div>
            </div>
          )}

          {showSpecialMessage && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl p-6 border-4 border-solid border-yellow-400 celebration-burst">
                <p className="text-xl md:text-2xl font-bold text-white mb-2">
                  🎊 SPECIAL BIRTHDAY SURPRISE! 🎊
                </p>
                <p className="text-lg text-white">
                  You found the secret message! You're absolutely perfect! 💖✨
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Birthday Wishes Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Dancing_Script'] text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16 relative">
            Birthday Wishes Just For You 🎂💕
            <div className="absolute -top-6 -right-6">
              <PartyPopper className="w-10 h-10 text-yellow-500 animate-spin" />
            </div>
            <div className="absolute -top-4 left-1/4">
              <Rainbow className="w-8 h-8 text-pink-500 animate-bounce" />
            </div>
          </h2>

          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 via-yellow-400 to-blue-400 text-white p-8 md:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-4xl mx-auto relative overflow-hidden party-lights">
              <div className="absolute top-3 right-3 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-200" />
              </div>
              <div className="absolute top-3 left-3 animate-pulse">
                <Music className="w-8 h-8 text-pink-200" />
              </div>
              <p className="text-2xl md:text-3xl font-medium animate-pulse drop-shadow-lg">
                {birthdayWishes[currentWish]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cake, text: "Hope your day is as sweet as cake! 🍰✨", color: "from-pink-400 to-red-400" },
              { icon: Gift, text: "You deserve all the presents! 🎁💝", color: "from-purple-400 to-pink-400" },
              { icon: Balloon, text: "Let's celebrate you today! 🎈🎊", color: "from-blue-400 to-purple-400" },
              { icon: Crown, text: "Birthday queen deserves the world! 👑🌟", color: "from-yellow-400 to-orange-400" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer relative overflow-hidden cute-hover"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full -mr-10 -mt-10 opacity-60"></div>
                <div className="text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center animate-bounce shadow-lg`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Birthday Photo Gallery */}
      {/* Enhanced Birthday Photo Gallery */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-pink-100/80 to-purple-100/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Dancing_Script'] text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16 relative">
            Birthday Memories to Treasure 📸🎂
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 right-1/4">
              <Heart className="w-6 h-6 text-red-400 animate-bounce" fill="currentColor" />
            </div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Photo 1 */}
            <div className="relative group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-6 shadow-2xl relative overflow-hidden party-lights">
                <div className="absolute top-3 right-3 animate-bounce">
                  <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                </div>
                <div className="absolute top-3 left-3 animate-pulse">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>

                <div className="bg-white rounded-3xl h-72 md:h-96 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={img1}
                    alt="Birthday celebration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-xl">Your Beautiful Smile</p>
                      <p className="text-white/90">That lights up every room 😊✨</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-6 shadow-2xl relative overflow-hidden party-lights">
                <div className="absolute top-3 right-3 animate-bounce" style={{ animationDelay: '0.3s' }}>
                  <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                </div>
                <div className="absolute top-3 left-3 animate-pulse" style={{ animationDelay: '0.4s' }}>
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>

                <div className="bg-white rounded-3xl h-72 md:h-96 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={img2}
                    alt="Sweet moments"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-xl">Our Sweet Moments</p>
                      <p className="text-white/90">Every second with you is precious 💕🌟</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="relative group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl p-6 shadow-2xl relative overflow-hidden party-lights">
                <div className="absolute top-3 right-3 animate-bounce" style={{ animationDelay: '0.6s' }}>
                  <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                </div>
                <div className="absolute top-3 left-3 animate-pulse" style={{ animationDelay: '0.8s' }}>
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>

                <div className="bg-white rounded-3xl h-72 md:h-96 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={img3}
                    alt="Birthday celebration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-xl">Birthday Celebration</p>
                      <p className="text-white/90">Making this day unforgettable! 🎉🎂</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Special Birthday Message */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-400 to-blue-500 rounded-3xl p-2 relative overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-pink-400 to-purple-400 opacity-30"></div>
            <div className="bg-white rounded-3xl p-10 md:p-16 relative z-10">
              <div className="flex justify-center mb-8 space-x-6">
                <Cake className="w-16 h-16 text-pink-500 animate-cake-bounce" />
                <Crown className="w-16 h-16 text-yellow-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <Gift className="w-16 h-16 text-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>

              <h2 className="font-['Dancing_Script'] text-4xl md:text-6xl font-bold text-gray-800 mb-10">
                Happy Birthday My Love! 🎂💕👑
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto">
                Today isn't just any day - it's the day the world became infinitely more beautiful because
                <span className="font-bold text-pink-600"> YOU </span> were born! 🌟✨
                Thank you for being the most incredible, funny, smart, and absolutely gorgeous person I know.
                You make every single day feel like a celebration, but today we celebrate YOU!
                I hope your birthday is filled with as much joy, laughter, and love as you bring into my life every day! 💖🎊
              </p>

              <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 mb-10 border-4 border-dashed border-pink-300">
                <p className="font-['Dancing_Script'] text-3xl md:text-4xl text-purple-700 font-bold mb-4">
                  "Another year older, another year more wonderful!" ✨👑
                </p>
                <p className="text-lg text-gray-600 italic">
                  You're not just my girlfriend, you're my best friend, my sunshine, and my everything! 🌞💕
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-4xl mb-8">
                <span className="animate-bounce">🎂</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎁</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>✨</span>
                <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🌟</span>
                <span className="animate-bounce" style={{ animationDelay: '0.7s' }}>💖</span>
                <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>👑</span>
                <span className="animate-bounce" style={{ animationDelay: '0.9s' }}>🦄</span>
              </div>

              <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 border-2 border-pink-400">
                <p className="text-lg md:text-xl font-medium text-gray-700">
                  🎊 Make a wish and blow out the candles! Your birthday magic is about to begin! 🎊
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Birthday Stats Section */}
      <section className="relative z-10 py-16 px-4 bg-gradient-to-r from-yellow-100/60 to-pink-100/60">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Celebrating Another Amazing Year! 🎊👑
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "365", label: "Days of Joy Ahead", icon: "☀️", color: "from-yellow-400 to-orange-400" },
              { number: "∞", label: "Reasons I Love You", icon: "💕", color: "from-pink-400 to-red-400" },
              { number: "1", label: "Amazing Birthday Girl", icon: "👑", color: "from-purple-400 to-pink-400" },
              { number: "100%", label: "Perfect in Every Way", icon: "✨", color: "from-blue-400 to-purple-400" }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer party-lights`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-4">{item.number}</div>
                <div className="text-sm md:text-base font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="font-['Dancing_Script'] text-2xl md:text-3xl font-bold text-purple-600 mb-4">
              Birthday Countdown Complete! 🎉
            </h3>
            <p className="text-lg text-gray-700">
              The wait is over - it's officially YOUR day! Time to celebrate the most amazing person! 🎂💖
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 py-16 text-center bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Dancing_Script'] text-3xl md:text-4xl text-gray-600 mb-6">
            Made with endless love for your special day 🎂💕✨
          </p>
          <div className="flex justify-center space-x-3 mb-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 text-pink-400 animate-pulse hover:scale-125 transition-transform cursor-pointer"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6 mb-6">
            <p className="text-xl font-medium text-gray-700 mb-2">
              🎈 Hope your birthday is as wonderful as you are! 🎈
            </p>
            <p className="text-lg text-gray-600">
              You deserve all the happiness, cake, and birthday magic in the world! 🌟🎂
            </p>
          </div>
          <div className="flex justify-center space-x-4 text-3xl">
            <Crown className="w-10 h-10 text-yellow-500 animate-bounce" />
            <Cake className="w-10 h-10 text-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <PartyPopper className="w-10 h-10 text-purple-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;