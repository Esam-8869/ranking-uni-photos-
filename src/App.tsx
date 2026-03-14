import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Trophy, RotateCcw, ChevronRight, X, ArrowLeft, Lock, Unlock } from 'lucide-react';

const malePeople = [
  { id: 'm1', name: 'Ahmed', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 'm2', name: 'Ali', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 'm3', name: 'Omar', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 'm4', name: 'Tariq', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: 'm5', name: 'Youssef', img: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: 'm6', name: 'Mohammed', img: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: 'm7', name: 'Hassan', img: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { id: 'm8', name: 'Hussein', img: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { id: 'm9', name: 'Khalid', img: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: 'm10', name: 'Amir', img: 'https://randomuser.me/api/portraits/men/10.jpg' },
  { id: 'm11', name: 'Zaid', img: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 'm12', name: 'Ibrahim', img: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 'm13', name: 'Bilal', img: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { id: 'm14', name: 'Faisal', img: 'https://randomuser.me/api/portraits/men/14.jpg' },
  { id: 'm15', name: 'Kareem', img: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { id: 'm16', name: 'Mahmoud', img: 'https://randomuser.me/api/portraits/men/16.jpg' },
  { id: 'm17', name: 'Nabil', img: 'https://randomuser.me/api/portraits/men/17.jpg' },
  { id: 'm18', name: 'Osama', img: 'https://randomuser.me/api/portraits/men/18.jpg' },
  { id: 'm19', name: 'Qasim', img: 'https://randomuser.me/api/portraits/men/19.jpg' },
  { id: 'm20', name: 'Rami', img: 'https://randomuser.me/api/portraits/men/20.jpg' },
  { id: 'm21', name: 'Sami', img: 'https://randomuser.me/api/portraits/men/21.jpg' },
  { id: 'm22', name: 'Tarek', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 'm23', name: 'Waleed', img: 'https://randomuser.me/api/portraits/men/23.jpg' },
  { id: 'm24', name: 'Yasin', img: 'https://randomuser.me/api/portraits/men/24.jpg' },
  { id: 'm25', name: 'Zakaria', img: 'https://randomuser.me/api/portraits/men/25.jpg' },
  { id: 'm26', name: 'Abbas', img: 'https://randomuser.me/api/portraits/men/26.jpg' },
  { id: 'm27', name: 'Baha', img: 'https://randomuser.me/api/portraits/men/27.jpg' },
  { id: 'm28', name: 'Faruq', img: 'https://randomuser.me/api/portraits/men/28.jpg' },
  { id: 'm29', name: 'Ghassan', img: 'https://randomuser.me/api/portraits/men/29.jpg' },
  { id: 'm30', name: 'Hamza', img: 'https://randomuser.me/api/portraits/men/30.jpg' }
];

const femalePeople = [
  { id: 'f1', name: 'Fatima', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 'f2', name: 'Aisha', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 'f3', name: 'Khadija', img: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: 'f4', name: 'Maryam', img: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 'f5', name: 'Zainab', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: 'f6', name: 'Sarah', img: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 'f7', name: 'Huda', img: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: 'f8', name: 'Noor', img: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 'f9', name: 'Layla', img: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: 'f10', name: 'Yasmin', img: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: 'f11', name: 'Salma', img: 'https://randomuser.me/api/portraits/women/11.jpg' },
  { id: 'f12', name: 'Amira', img: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 'f13', name: 'Rania', img: 'https://randomuser.me/api/portraits/women/13.jpg' },
  { id: 'f14', name: 'Farah', img: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { id: 'f15', name: 'Maha', img: 'https://randomuser.me/api/portraits/women/15.jpg' },
  { id: 'f16', name: 'Nada', img: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { id: 'f17', name: 'Laila', img: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { id: 'f18', name: 'Dina', img: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { id: 'f19', name: 'Yasmine', img: 'https://randomuser.me/api/portraits/women/19.jpg' },
  { id: 'f20', name: 'Mona', img: 'https://randomuser.me/api/portraits/women/20.jpg' },
  { id: 'f21', name: 'Hala', img: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { id: 'f22', name: 'Reem', img: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { id: 'f23', name: 'Noha', img: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { id: 'f24', name: 'Samar', img: 'https://randomuser.me/api/portraits/women/24.jpg' },
  { id: 'f25', name: 'Safiya', img: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: 'f26', name: 'Rima', img: 'https://randomuser.me/api/portraits/women/26.jpg' },
  { id: 'f27', name: 'Suha', img: 'https://randomuser.me/api/portraits/women/27.jpg' },
  { id: 'f28', name: 'Rasha', img: 'https://randomuser.me/api/portraits/women/28.jpg' },
  { id: 'f29', name: 'Dalia', img: 'https://randomuser.me/api/portraits/women/29.jpg' },
  { id: 'f30', name: 'Amina', img: 'https://randomuser.me/api/portraits/women/30.jpg' }
];

type RankedItem = { id: string, name: string, img: string };
type LeaderboardEntry = { userName: string, results: RankedItem[], date: number };

export default function App() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const items = gender === 'male' ? malePeople : femalePeople;
  
  const [sorted, setSorted] = useState<RankedItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [mid, setMid] = useState(0);
  
  const [appState, setAppState] = useState<'intro' | 'welcome' | 'setup' | 'sorting' | 'results'>('intro');
  
  const [leftItem, setLeftItem] = useState<RankedItem | null>(null);
  const [rightItem, setRightItem] = useState<RankedItem | null>(null);

  const [currentUser, setCurrentUser] = useState('');
  const [nameInput, setNameInput] = useState('');
  
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<LeaderboardEntry | null>(null);
  
  const [isLeaderboardAuth, setIsLeaderboardAuth] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  // Intro Animation Timer
  useEffect(() => {
    if (appState === 'intro') {
      const timer = setTimeout(() => {
        setAppState('welcome');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const startSorting = () => {
    setSorted([items[0]]);
    setCurrentIndex(1);
    setLow(0);
    setHigh(0);
    setAppState('sorting');
  };

  useEffect(() => {
    if (appState !== 'sorting') return;
    
    if (currentIndex >= items.length) {
      setAppState('results');
      setLeaderboard(prev => {
        const newEntry = { userName: currentUser, results: sorted, date: Date.now() };
        const filtered = prev.filter(p => p.userName !== currentUser);
        return [...filtered, newEntry];
      });
      return;
    }
    
    if (low > high) {
      const newSorted = [...sorted];
      newSorted.splice(low, 0, items[currentIndex]);
      setSorted(newSorted);
      setCurrentIndex(currentIndex + 1);
      setLow(0);
      setHigh(newSorted.length - 1);
    } else {
      const newMid = Math.floor((low + high) / 2);
      setMid(newMid);
      setLeftItem(items[currentIndex]);
      setRightItem(sorted[newMid]);
    }
  }, [appState, currentIndex, low, high, items, sorted, currentUser]);

  const handleChoice = (preferredId: string) => {
    if (!leftItem) return;
    if (preferredId === leftItem.id) {
      setHigh(mid - 1);
    } else {
      setLow(mid + 1);
    }
  };

  const resetApp = () => {
    setAppState('setup');
    setSorted([]);
    setCurrentIndex(1);
    setLow(0);
    setHigh(0);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === 'let me in') {
      setIsLeaderboardAuth(true);
      setPasswordInput('');
    } else {
      alert('Incorrect password');
    }
  };

  const renderIntro = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <svg className="w-full max-w-4xl h-64" viewBox="0 0 1000 200" preserveAspectRatio="none">
        <motion.path
          d="M 0 100 Q 125 0 250 100 T 500 100 T 750 100 T 1000 100"
          fill="transparent"
          stroke="#FACC15" // yellow-400
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 100 Q 125 200 250 100 T 500 100 T 750 100 T 1000 100"
          fill="transparent"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
    </motion.div>
  );

  const renderWelcome = () => (
    <motion.div
      key="welcome"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="max-w-md w-full mx-auto mt-20 p-10 bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
    >
      {/* Subtle glass highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <h2 className="text-4xl font-light text-white mb-10 tracking-wide">Enter Your Name <span className="text-yellow-400 font-medium">Love</span></h2>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        if (nameInput.trim()) {
          setCurrentUser(nameInput.trim());
          setAppState('setup');
        }
      }}>
        <input
          type="text"
          placeholder="Your Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="w-full px-6 py-5 rounded-2xl bg-black/20 border border-white/10 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 outline-none transition-all text-white font-medium placeholder-gray-500 mb-6 text-center text-xl shadow-inner"
          autoFocus
        />
        <button
          type="submit"
          disabled={!nameInput.trim()}
          className="w-full px-8 py-5 bg-yellow-400 text-[#0A1128] rounded-2xl font-bold text-lg hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );

  const renderSetup = () => (
    <motion.div 
      key="setup"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto p-8 md:p-12 bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/[0.05]"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-light text-white mb-3 tracking-wide">Choose <span className="text-yellow-400 font-medium">Category</span></h2>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setGender('male')}
          className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${gender === 'male' ? 'bg-yellow-400 text-[#0A1128] shadow-[0_0_20px_rgba(250,204,21,0.3)]' : 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700'}`}
        >
          Male
        </button>
        <button
          onClick={() => setGender('female')}
          className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${gender === 'female' ? 'bg-yellow-400 text-[#0A1128] shadow-[0_0_20px_rgba(250,204,21,0.3)]' : 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700'}`}
        >
          Female
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 mb-12 max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative group rounded-2xl overflow-hidden border border-white/10 aspect-square shadow-lg bg-[#0A1128]"
            >
              <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-white font-medium truncate text-sm">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button
          onClick={startSorting}
          className="px-12 py-5 bg-yellow-400 text-[#0A1128] rounded-2xl font-bold text-lg hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all flex items-center gap-3 active:scale-95"
        >
          <Play size={24} fill="currentColor" />
          Start Ranking {items.length} Photos
        </button>
      </div>
    </motion.div>
  );

  const renderSorting = () => {
    if (!leftItem || !rightItem) return null;

    const progress = Math.round((currentIndex / items.length) * 100);

    return (
      <motion.div
        key="sorting"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-6xl mx-auto w-full -mt-8 md:-mt-16"
      >
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">Which one do you <span className="text-yellow-400 font-medium">prefer?</span></h2>
          
          <div className="w-full max-w-md mx-auto mt-6 md:mt-8 bg-gray-800/50 rounded-full h-2 overflow-hidden border border-gray-700">
            <div className="bg-yellow-400 h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs font-medium text-gray-500 mt-4 uppercase tracking-widest">Progress: {currentIndex} / {items.length}</p>
        </div>

        {/* Side-by-side grid for both mobile and desktop */}
        <div className="grid grid-cols-2 gap-3 md:gap-8">
          {[leftItem, rightItem].map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleChoice(item.id)}
              className="cursor-pointer bg-white/[0.02] backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/[0.05] hover:border-yellow-400/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all flex flex-col group"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-[#0A1128]">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-3 md:p-8 text-center relative z-10 -mt-12 md:-mt-20">
                <h3 className="text-xl md:text-4xl font-bold text-white drop-shadow-lg truncate">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderResultsList = (results: RankedItem[]) => (
    <div className="space-y-4 mb-12 max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar">
      {results.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: Math.min(index * 0.05, 1) }}
          className="flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-3xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all group"
        >
          <div className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full font-bold text-lg md:text-2xl shadow-lg shrink-0
            ${index === 0 ? 'bg-yellow-400 text-[#0A1128] shadow-yellow-400/20' : 
              index === 1 ? 'bg-gray-300 text-[#0A1128] shadow-gray-300/20' : 
              index === 2 ? 'bg-amber-600 text-white shadow-amber-600/20' : 
              'bg-gray-800 text-gray-400 border border-gray-700'}`}
          >
            {index + 1}
          </div>
          <img src={item.img} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover bg-[#0A1128] shadow-md group-hover:scale-105 transition-transform shrink-0" referrerPolicy="no-referrer" />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-medium text-white truncate">{item.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderResults = () => (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 md:p-12 bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/[0.05] w-full"
    >
      <div className="text-center mb-10 md:mb-12">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-yellow-400/10 text-yellow-400 rounded-full mb-6 shadow-[inset_0_0_20px_rgba(250,204,21,0.2)] border border-yellow-400/20"
        >
          <Trophy size={40} strokeWidth={1.5} className="md:w-12 md:h-12" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-3 tracking-wide">Your Final <span className="text-yellow-400 font-medium">Ranking</span></h2>
        <p className="text-gray-400 text-base md:text-lg font-light">Great job, {currentUser}! Here are your results.</p>
      </div>

      {renderResultsList(sorted)}

      <div className="flex justify-center">
        <button
          onClick={resetApp}
          className="px-8 md:px-10 py-4 md:py-5 bg-gray-800 text-white border border-gray-700 rounded-2xl font-medium text-base md:text-lg hover:bg-gray-700 hover:border-gray-600 transition-all flex items-center gap-3 active:scale-95"
        >
          <RotateCcw size={22} />
          Rank Again
        </button>
      </div>
    </motion.div>
  );

  const renderLeaderboardModal = () => (
    <AnimatePresence>
      {isLeaderboardOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1128]/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0A1128] border border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden relative"
          >
            <div className="p-6 md:p-8 border-b border-gray-800 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                {selectedUser ? (
                  <button onClick={() => setSelectedUser(null)} className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors">
                    <ArrowLeft size={24} />
                  </button>
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/10 text-yellow-400 rounded-full flex items-center justify-center border border-yellow-400/20">
                    <Trophy size={20} className="md:w-6 md:h-6" />
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                  {selectedUser ? <><span className="font-medium text-yellow-400">{selectedUser.userName}'s</span> Ranking</> : 'Leaderboard'}
                </h2>
              </div>
              <button 
                onClick={() => {
                  setIsLeaderboardOpen(false);
                  setSelectedUser(null);
                  setIsLeaderboardAuth(false);
                  setPasswordInput('');
                }}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              {!isLeaderboardAuth ? (
                <div className="flex flex-col items-center justify-center h-full py-10">
                  <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                    <Lock size={40} className="text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">Password Required</h3>
                  <p className="text-gray-400 mb-8 text-center">Only Esam can see the results for privacy</p>
                  
                  <form onSubmit={handlePasswordSubmit} className="w-full max-w-sm">
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/10 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 outline-none transition-all text-white font-medium placeholder-gray-500 mb-4 text-center text-lg shadow-inner"
                      autoFocus
                    />
                    <button
                      type="submit"
                      disabled={!passwordInput.trim()}
                      className="w-full px-8 py-4 bg-yellow-400 text-[#0A1128] rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Unlock size={20} />
                      Unlock
                    </button>
                  </form>
                </div>
              ) : selectedUser ? (
                renderResultsList(selectedUser.results)
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leaderboard.length === 0 ? (
                    <div className="col-span-full text-center py-20">
                      <p className="text-gray-500 text-xl font-light">No rankings yet.</p>
                      <p className="text-gray-600 mt-2">Be the first to rank!</p>
                    </div>
                  ) : (
                    leaderboard.sort((a, b) => b.date - a.date).map((entry) => (
                      <button
                        key={entry.userName}
                        onClick={() => setSelectedUser(entry)}
                        className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-yellow-400/30 transition-all group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gray-800 text-yellow-400 flex items-center justify-center text-xl font-medium border border-gray-700 group-hover:border-yellow-400/50 transition-colors">
                            {entry.userName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <span className="font-medium text-xl text-white block">{entry.userName}</span>
                            <span className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <ChevronRight size={24} className="text-gray-600 group-hover:text-yellow-400 transition-colors" />
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-[#0A1128] text-white font-sans selection:bg-yellow-400/30 selection:text-yellow-200 relative overflow-hidden flex flex-col">
      
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-400/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-500/5 blur-[120px] pointer-events-none"></div>

      {/* Huge Cursive Background Text */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: 'clamp(10rem, 30vw, 40rem)' }} className="text-white select-none whitespace-nowrap">
          Esam
        </span>
      </div>

      {appState === 'intro' ? (
        <AnimatePresence mode="wait">
          {renderIntro()}
        </AnimatePresence>
      ) : (
        <>
          {/* Header */}
          {appState !== 'welcome' && appState !== 'sorting' && (
            <header className="relative z-20 w-full max-w-7xl mx-auto p-6 flex items-center justify-end">
              <button
                onClick={() => setIsLeaderboardOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-full text-sm font-medium transition-all text-white hover:text-yellow-400"
              >
                <Trophy size={18} />
                <span>Leaderboard</span>
              </button>
            </header>
          )}

          {/* Main Content */}
          <main className="flex-1 relative z-10 p-4 md:p-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {appState === 'welcome' && renderWelcome()}
              {appState === 'setup' && renderSetup()}
              {appState === 'sorting' && renderSorting()}
              {appState === 'results' && renderResults()}
            </AnimatePresence>
          </main>

          {renderLeaderboardModal()}
        </>
      )}
    </div>
  );
}
