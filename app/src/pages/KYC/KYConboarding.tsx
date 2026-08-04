import { useState } from "react";
import { ChevronLeft, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import Header from "../../components/shared/header";
// import Navbar from "../../components/shared/navbar";

// Step Components
import InvestorProfile from "./steps/InvestorProfile";
import RiskProfile from "./steps/RiskProfile";
import ORCIC from "./steps/ORCIC";
import ORCFace from "./steps/ORCFace";
import IdentityDetails from "./steps/IdentityDetails";
import PersonalDetails from "./steps/PersonalDetails";
import EmploymentDetails from "./steps/EmploymentDetails";
import AddressDetails from "./steps/AddressDetails";
import BankDetails from "./steps/BankDetails";
import CRSDeclare from "./steps/CRSDeclare";
import Summary from "./steps/Summary";

export interface KYCFormData {
  // Investor Profile
  age: string;
  investmentObjective: string;
  investmentHorizon: string;
  income: string;
  // Risk Profile
  riskProfile: "Conservative" | "Moderate" | "High";
  // Identity Upload
  idType: "IC" | "Passport";
  frontIdImage: string | null;
  backIdImage: string | null;
  faceImage: string | null;
  // Identity Details
  title: string;
  fullName: string;
  idNumberType: string;
  idNumber: string;
  dateOfBirth: string;
  // Personal Details
  nationality: string;
  gender: string;
  race: string;
  isRelatedToOpus: string;
  // Employment Details
  employmentType: string;
  occupation: string;
  companyName: string;
  industry: string;
  sourceOfWealth: string;
  // Address Details
  address: string;
  postcode: string;
  town: string;
  state: string;
  country: string;
  // Bank Details
  distributionInstruction: "Reinvest" | "Payout";
  bankName: string;
  accountNumber: string;
  payeeName: string;
  // CRS Declaration
  crsStatus: string;
}

const initialFormData: KYCFormData = {
  age: "",
  investmentObjective: "",
  investmentHorizon: "",
  income: "",
  riskProfile: "Conservative",
  idType: "IC",
  frontIdImage: null,
  backIdImage: null,
  faceImage: null,
  title: "Mr",
  fullName: "",
  idNumberType: "NRIC/Passport",
  idNumber: "",
  dateOfBirth: "1900-01-01",
  nationality: "Malaysian",
  gender: "",
  race: "",
  isRelatedToOpus: "No",
  employmentType: "",
  occupation: "",
  companyName: "",
  industry: "",
  sourceOfWealth: "",
  address: "",
  postcode: "",
  town: "",
  state: "",
  country: "",
  distributionInstruction: "Reinvest",
  bankName: "",
  accountNumber: "",
  payeeName: "",
  crsStatus: "",
};

export default function KYConboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<KYCFormData>(initialFormData);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();
  const totalSteps = 11;

  const updateFormData = (fields: Partial<KYCFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleBack = () => {
    if (currentStep > 1) {
      prevStep();
      return;
    }

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // Trigger success modal on final submission from Summary
  const handleCompleteForm = () => {
    setShowSuccessModal(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    navigate("/"); // Redirect user to home or dashboard after completing setup
  };

  const progressPercent = Math.min(((currentStep - 0.5) / totalSteps) * 100, 100);

  return (
    <div className="relative min-h-screen bg-[#E9F7E5] flex flex-col font-sans">
      {/* <Header />
      <Navbar /> */}

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 sm:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
          
          {/* Header Action Bar */}
          {currentStep <= 11 && (
            <div className="flex items-center px-6 py-5 border-b border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                className="p-2 rounded-xl transition hover:bg-slate-100 text-slate-800 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold text-slate-900 ml-2">Open Account</h1>
            </div>
          )}

          {/* Progress Indicator */}
          {currentStep <= 11 && (
            <div className="w-full bg-slate-100 h-2">
              <div
                className="bg-[#22C55E] h-2 transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}

          {/* Dynamic Step View Rendering */}
          <div className="flex-1 p-6 sm:p-10">
            {currentStep === 1 && (
              <InvestorProfile formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 2 && (
              <RiskProfile formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 3 && (
              <ORCIC formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 4 && (
              <ORCFace formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 5 && (
              <IdentityDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 6 && (
              <PersonalDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 7 && (
              <EmploymentDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 8 && (
              <AddressDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 9 && (
              <BankDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {currentStep === 10 && (
              <CRSDeclare 
                formData={formData} 
                updateFormData={updateFormData} 
                onNext={nextStep} 
              />
            )}
            {currentStep === 11 && (
              <Summary 
                formData={formData} 
                onComplete={handleCompleteForm} 
              />
            )}
          </div>
        </div>
      </main>

      {/* SUCCESS POPUP MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="relative bg-white rounded-2xl border-2 border-[#22C55E] p-8 sm:p-12 max-w-md w-full shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseSuccess}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition p-1 cursor-pointer"
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </button>

            {/* Checkmark Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#22C55E] rounded-full flex items-center justify-center text-white shadow-lg">
                <Check className="w-12 h-12 stroke-[3]" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-2 pt-2">
              <h3 className="text-2xl font-black text-slate-900">Success !</h3>
              <p className="text-slate-700 font-medium text-base sm:text-lg">
                Your account has been created
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}