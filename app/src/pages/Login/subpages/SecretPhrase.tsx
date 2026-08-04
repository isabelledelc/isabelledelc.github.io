import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Asset Imports
import bagImg from '../../../assets/secretPhrasePic/bag.png';
import clockImg from '../../../assets/secretPhrasePic/clock.png';
import mouseImg from '../../../assets/secretPhrasePic/mouse.png';
import sunflowerImg from '../../../assets/secretPhrasePic/flower.png';
import appleImg from '../../../assets/secretPhrasePic/apple.png';
import chairImg from '../../../assets/secretPhrasePic/chair.png';
import headphoneImg from '../../../assets/secretPhrasePic/earphone.png';
import mugImg from '../../../assets/secretPhrasePic/cup.png';
import towersImg from '../../../assets/secretPhrasePic/klcc.png';
import catImg from '../../../assets/secretPhrasePic/cat.png';

interface ImageOption {
  id: string;
  src: string;
  alt: string;
}

const PICTURE_OPTIONS: ImageOption[] = [
  { id: 'bag', src: bagImg, alt: 'Bag' },
  { id: 'clock', src: clockImg, alt: 'Clock' },
  { id: 'mouse', src: mouseImg, alt: 'Mouse' },
  { id: 'flower', src: sunflowerImg, alt: 'Flower' },
  { id: 'apple', src: appleImg, alt: 'Apple' },
  { id: 'chair', src: chairImg, alt: 'Chair' },
  { id: 'earphone', src: headphoneImg, alt: 'Earphone' },
  { id: 'cup', src: mugImg, alt: 'Cup' },
  { id: 'klcc', src: towersImg, alt: 'KLCC' },
  { id: 'cat', src: catImg, alt: 'Cat' },
];

export default function SecretPhrase() {
  const navigate = useNavigate();

  // Setup state
  const [selectedPicId, setSelectedPicId] = useState<string>('klcc'); // Default select KLCC
  const [secretText, setSecretText] = useState<string>('');
  const [step, setStep] = useState<'select' | 'confirm'>('select');
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(false);

  const selectedImage = PICTURE_OPTIONS.find((img) => img.id === selectedPicId);

  const handleNext = () => {
    if (!selectedPicId || !secretText.trim()) return;
    setStep('confirm');
  };

  const handleSave = () => {
    setShowWelcomeModal(true);
  };

  const handleStartAssessment = () => {
    setShowWelcomeModal(false);
    // Navigate to KYC Onboarding page
    navigate('/kyc-onboarding');
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans relative pb-20 md:pb-6">
      <main className="flex-1 flex flex-col px-4 sm:px-6 py-4 sm:py-6 max-w-5xl mx-auto w-full">
        {/* Back Button & Title */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-8 min-h-[40px]">
          <button
            type="button"
            onClick={() => {
              if (step === 'confirm') setStep('select');
              else navigate(-1);
            }}
            className="absolute left-0 p-2 text-gray-700 hover:text-black transition cursor-pointer"
            aria-label="Back"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <h1 className="text-lg sm:text-2xl font-bold text-[#404040] text-center px-10">
            Setting up your security secret phrase
          </h1>
        </div>

        {/* STEP 1: SELECT PICTURE & TYPE PHRASE */}
        {step === 'select' && (
          <div className="space-y-6 sm:space-y-8 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-gray-600 font-medium text-sm sm:text-base mb-4 sm:mb-8 text-center sm:text-left">
                Select one of the picture as your secret phrase picture
              </p>

              {/* Responsive Image Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-3xl mx-auto py-2 sm:py-4 items-center justify-items-center">
                {PICTURE_OPTIONS.map((item) => {
                  const isSelected = selectedPicId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPicId(item.id)}
                      className={`p-2 rounded-xl transition-all duration-150 flex items-center justify-center h-24 w-full max-w-[110px] sm:h-28 cursor-pointer ${
                        isSelected
                          ? 'border-2 border-[#22c55e] ring-2 ring-[#22c55e]/20 bg-emerald-50/20'
                          : 'hover:opacity-80 border border-transparent bg-slate-50/50 sm:bg-transparent'
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="max-h-16 max-w-16 sm:max-h-20 sm:max-w-20 object-contain"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Inputs & Next Button */}
            <div className="pt-4 sm:pt-6">
              <label className="block font-semibold text-gray-700 mb-2 text-sm">
                Your secret phrase
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
                <div>
                  <input
                    type="text"
                    value={secretText}
                    onChange={(e) => setSecretText(e.target.value)}
                    placeholder="Enter phrase..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#22c55e] focus:outline-none text-gray-800 font-bold bg-white text-base"
                  />
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!selectedPicId || !secretText.trim()}
                    className={`w-full py-3 rounded-xl font-semibold text-white transition shadow-sm cursor-pointer text-base ${
                      selectedPicId && secretText.trim()
                        ? 'bg-[#22c55e] hover:bg-emerald-600'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                (You are required to memorize your secret phrase for future login)
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: CONFIRMATION SCREEN */}
        {step === 'confirm' && (
          <div className="flex-1 flex flex-col justify-between max-w-2xl mx-auto w-full py-2">
            <div className="space-y-6">
              <div className="text-center sm:text-left space-y-1">
                <h2 className="text-lg font-bold text-slate-800">Review Your Selection</h2>
                <p className="text-gray-500 font-medium text-sm">
                  Please verify that your secret image and phrase are correct before saving.
                </p>
              </div>

              {/* Modern Confirmation Card */}
              <div className="relative border-2 border-[#22c55e] rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center space-y-6 bg-gradient-to-b from-white via-emerald-50/20 to-emerald-50/40 shadow-sm overflow-hidden">
                {/* Subtle Decorative Ambient Blur */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Selected Image Wrapper */}
                {selectedImage && (
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-emerald-100 flex items-center justify-center">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="h-28 sm:h-36 max-w-xs object-contain transform hover:scale-105 transition duration-200"
                    />
                  </div>
                )}

                {/* Secret Phrase Display Badge */}
                <div className="flex flex-col items-center space-y-1.5 w-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Your Secret Phrase
                  </span>
                  <div className="px-6 py-2.5 bg-white border border-emerald-200 shadow-xs rounded-xl max-w-md w-full text-center">
                    <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-wide break-all">
                      "{secretText}"
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-8">
              <button
                type="button"
                onClick={() => setStep('select')}
                className="w-full sm:w-1/2 py-3.5 rounded-xl border-2 border-emerald-600 text-emerald-700 font-bold hover:bg-emerald-50 active:scale-[0.99] transition cursor-pointer text-base"
              >
                Edit Details
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#22c55e] hover:bg-emerald-600 text-white font-bold active:scale-[0.99] transition shadow-md shadow-emerald-600/20 cursor-pointer text-base"
              >
                Save & Continue
              </button>
            </div>
          </div>
        )}
      </main>

      {/* WELCOME TO OPUS TOUCH MODAL */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl border-2 border-[#22c55e] max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 text-center space-y-2 bg-white">
              <h2 className="text-2xl sm:text-3xl font-black text-black">
                Welcome to Opus Touch
              </h2>
              <p className="text-slate-800 font-bold text-base sm:text-lg">
                Setting up your investor profile
              </p>
            </div>

            {/* Modal Body */}
            <div className="bg-[#eaf6ec] p-6 sm:p-8 text-center space-y-6">
              <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                These question will allow us personalize funds based on your risk appetite.
              </p>

              <button
                type="button"
                onClick={handleStartAssessment}
                className="w-full max-w-xs py-3.5 rounded-xl bg-[#22c55e] hover:bg-emerald-600 text-white font-bold transition shadow-md cursor-pointer"
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}