import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/shared/header";

export default function PaymentConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || '250.00';
  const paymentMethod = location.state?.paymentMethod || 'Boost';

  const handleProceed = () => {
    navigate('/transactions/transaction-confirmation', {
      state: { amount, paymentMethod }
    });
  };

  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300 text-app-main font-sans"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-app-card backdrop-blur-md rounded-2xl shadow-xl border border-app-border overflow-hidden transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="p-6 border-b border-app-border flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-xl font-bold text-app-heading hover:bg-app-pill rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-2xl font-bold text-app-heading font-heading">Payment Confirmation</h1>
          </div>

          <div className="p-8 space-y-6">
            <h2 className="text-xl font-bold text-app-heading font-heading mb-6">Payment Details</h2>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
              <div className="grid grid-cols-2">
                <span className="font-semibold text-app-muted">Master Account</span>
                <span className="text-app-heading font-mono-data font-medium">A-908123-KYC</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold text-app-muted">Fund Name</span>
                <span className="text-app-heading uppercase font-medium">OPUS INCOME PLUS FUND</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold text-app-muted">Account Holder(s)</span>
                <span className="text-app-heading font-medium">Alex Tan Jin Wei</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold text-app-muted">Payment Amount</span>
                <span className="text-app-primary font-bold text-base font-mono-data">MYR {amount}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold text-app-muted">Goal</span>
                <span className="text-app-heading uppercase font-medium">RETIREMENT FUND</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-semibold text-app-muted">Payment Method</span>
                <div className={`border rounded-lg px-3 py-1.5 w-24 text-center font-bold text-sm shadow-sm ${
                  paymentMethod === 'Boost' ? 'border-red-400/40 text-red-500 bg-red-500/10' : 
                  paymentMethod === 'Offline' ? 'border-amber-400/40 text-amber-500 bg-amber-500/10' : 
                  'border-sky-400/40 text-sky-500 bg-sky-500/10'
                }`}>
                  {paymentMethod}
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="bg-app-container border border-app-border rounded-2xl p-6 mt-8 space-y-3 text-xs text-app-muted leading-relaxed">
              <h3 className="font-bold text-sm text-app-heading mb-2">Note :</h3>
              <p>• Any transactions made after 4:00 PM will be processed on the next business day.</p>
              <p>• Kindly ensure that your payment details match your registered account name.</p>
              <p>• Please take note that we do not allow 3rd party payment to make investment. We reserve the right to reject any 3rd party payment at our sole discretion.</p>
            </div>

            {/* Action Button */}
            <div className="flex justify-center pt-6">
              <button 
                onClick={handleProceed}
                className="bg-app-primary hover:bg-app-primary-hover text-white font-semibold py-3.5 px-24 rounded-xl text-lg transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Proceed
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}