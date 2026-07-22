import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/shared/header';

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
    const [selectedPicId, setSelectedPicId] = useState<string>('klcc'); // Default select KLCC as in screenshot
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
        <div className="min-h-screen w-full bg-white flex flex-col font-sans relative">
            <Header />

            <main className="flex-1 flex flex-col px-6 py-6 max-w-5xl mx-auto w-full">
                {/* Back Button & Title */}
                <div className="relative flex items-center justify-center mb-8">
                    <button
                        type="button"
                        onClick={() => {
                            if (step === 'confirm') setStep('select');
                            else navigate(-1);
                        }}
                        className="absolute left-0 p-2 text-gray-700 hover:text-black transition cursor-pointer"
                        aria-label="Back"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <h1 className="text-xl sm:text-2xl font-bold text-[#404040]">
                        Setting up your security secret phrase
                    </h1>
                </div>

                {/* STEP 1: SELECT PICTURE & TYPE PHRASE */}
                {step === 'select' && (
                    <div className="space-y-8 flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-600 font-medium text-base mb-8">
                                Select one of the picture as your secret phrase picture
                            </p>

                            {/* Image Grid */}
                            <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto py-4 items-center justify-items-center">
                                {PICTURE_OPTIONS.map((item) => {
                                    const isSelected = selectedPicId === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setSelectedPicId(item.id)}
                                            className={`p-2 rounded-xl transition-all duration-150 flex items-center justify-center h-28 w-28 cursor-pointer ${
                                                isSelected
                                                    ? 'border-2 border-[#22c55e] ring-2 ring-[#22c55e]/20 bg-emerald-50/20'
                                                    : 'hover:opacity-80 border border-transparent'
                                            }`}
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="max-h-20 max-w-20 object-contain"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Bottom Inputs & Next Button */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-6">
                            <div>
                                <label className="block font-semibold text-gray-700 mb-2 text-sm">
                                    Your secret phrase
                                </label>
                                <input
                                    type="text"
                                    value={secretText}
                                    onChange={(e) => setSecretText(e.target.value)}
                                    placeholder=""
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#22c55e] focus:outline-none text-gray-800 font-bold bg-white"
                                />
                                <p className="text-xs text-gray-400 mt-2">
                                    (You are required to memorize your secret phrase for future login)
                                </p>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    disabled={!selectedPicId || !secretText.trim()}
                                    className={`w-full py-3.5 rounded-xl font-semibold text-white transition shadow-sm cursor-pointer ${
                                        selectedPicId && secretText.trim()
                                            ? 'bg-[#22c55e] hover:bg-emerald-600'
                                            : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 2: CONFIRMATION SCREEN */}
                {step === 'confirm' && (
                    <div className="space-y-8 flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-600 font-medium text-base mb-8">
                                Please make sure that the following details are correct
                            </p>

                            {/* Summary Card */}
                            <div className="max-w-2xl mx-auto border-2 border-[#22c55e] rounded-xl p-10 flex flex-col items-center justify-center space-y-6 bg-white min-h-[280px]">
                                {selectedImage && (
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        className="h-36 max-w-xs object-contain"
                                    />
                                )}
                                <span className="text-2xl font-black text-slate-800 tracking-wide">
                                    {secretText}
                                </span>
                            </div>
                        </div>

                        {/* Edit & Save Action Buttons */}
                        <div className="flex justify-center gap-6 pt-6">
                            <button
                                type="button"
                                onClick={() => setStep('select')}
                                className="w-36 py-2.5 rounded-xl border-2 border-[#22c55e] text-slate-800 font-bold hover:bg-emerald-50 transition cursor-pointer"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={handleSave}
                                className="w-48 py-2.5 rounded-xl bg-[#22c55e] hover:bg-emerald-600 text-white font-bold transition shadow-sm cursor-pointer"
                            >
                                Save
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
                        <div className="p-8 text-center space-y-2 bg-white">
                            <h2 className="text-3xl font-black text-black">
                                Welcome to Opus Touch
                            </h2>
                            <p className="text-slate-800 font-bold text-lg">
                                Setting up your investor profile
                            </p>
                        </div>

                        {/* Modal Body */}
                        <div className="bg-[#eaf6ec] p-8 text-center space-y-6">
                            <p className="text-slate-700 font-medium text-base leading-relaxed max-w-xs mx-auto">
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