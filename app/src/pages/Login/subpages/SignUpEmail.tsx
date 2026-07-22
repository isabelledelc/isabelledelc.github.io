import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/shared/header';
import ErrorPopup from '../components/ErrorPopup';

export default function SignUpEmail() {
    const navigate = useNavigate();

    // Input field states
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [criteriaAccepted, setCriteriaAccepted] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Error popup states
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const handleCreateAccount = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors: string[] = [];

        // 1. Valid name check
        if (!displayName.trim()) {
            validationErrors.push('Valid name');
        }

        // 2. Valid phone number check
        const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
        if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
            validationErrors.push('Valid phone number');
        }

        // 3. Valid email address check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailAddress.trim() || !emailRegex.test(emailAddress)) {
            validationErrors.push('Valid email address');
        }

        // 4. Matching valid password check
        if (!password || password !== confirmPassword) {
            validationErrors.push('Matching valid password');
        }

        // 5. Agree to Terms & Conditions check
        if (!termsAccepted) {
            validationErrors.push('Agree to Terms & Conditions');
        }

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setIsOpen(true);
        } else {
            // Navigate to Secret Phrase setup screen
            navigate('/secret-phrase');
        }
    };

    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col px-6 py-8 max-w-5xl mx-auto w-full">
                {/* Top bar with back navigation and title */}
                <div className="flex items-center gap-4 mb-10">
                    <Link
                        to="/signup"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#1b1f24] hover:bg-gray-50 transition-colors"
                        aria-label="Back to sign up"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-bold text-[#333333] flex-1 text-center pr-10">
                        Please Enter Your Registration Details
                    </h1>
                </div>

                {/* Two Column Form */}
                <form onSubmit={handleCreateAccount} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Column 1 */}
                        <div className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="displayName"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    placeholder="Display Name"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#1d9878]/40 focus:border-[#1d9878] focus:outline-none placeholder-gray-400 text-gray-700 bg-white"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Phone Number"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#1d9878]/40 focus:border-[#1d9878] focus:outline-none placeholder-gray-400 text-gray-700 bg-white"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#1d9878]/40 focus:border-[#1d9878] focus:outline-none placeholder-gray-400 text-gray-700 bg-white"
                                />
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="invitationCode"
                                    placeholder="Invitation Code (Optional)"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#1d9878]/40 focus:border-[#1d9878] focus:outline-none placeholder-gray-400 text-gray-700 bg-white"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="emailAddress"
                                    value={emailAddress}
                                    onChange={(e) => setEmailAddress(e.target.value)}
                                    placeholder="Email Address"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#1d9878]/40 focus:border-[#1d9878] focus:outline-none placeholder-gray-400 text-gray-700 bg-white"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#1d9878]/40 focus:border-[#1d9878] focus:outline-none placeholder-gray-400 text-gray-700 bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Details Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
                        {/* Password Requirements */}
                        <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm text-[#464b59]">
                            <p className="font-semibold mb-3">Your password should:</p>
                            <ol className="space-y-2 list-decimal list-inside text-gray-500">
                                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                            </ol>
                        </div>

                        {/* Criteria and Terms checkboxes */}
                        <div className="space-y-4 pt-4">
                            <label className="flex items-center gap-3 cursor-pointer text-sm text-[#464b59]">
                                <input
                                    type="checkbox"
                                    checked={criteriaAccepted}
                                    onChange={(e) => setCriteriaAccepted(e.target.checked)}
                                    className="h-5 w-5 rounded border-2 border-gray-300 text-[#1d9878] focus:ring-[#1d9878]"
                                />
                                <span>I met all the criteria mentioned</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer text-sm text-[#464b59]">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    className="h-5 w-5 rounded border-2 border-gray-300 text-[#1d9878] focus:ring-[#1d9878]"
                                />
                                <span>
                                    I agree to <span className="font-bold">Terms and Conditions of Use</span>
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8">
                        <button
                            type="submit"
                            className="w-full max-w-sm rounded-full bg-[#1d9878] hover:bg-[#156e57] text-white font-semibold py-4 px-8 text-lg transition-colors text-center shadow-sm cursor-pointer"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </main>

            {/* Error Modal */}
            <ErrorPopup
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                errors={errors}
            />
        </div>
    );
}