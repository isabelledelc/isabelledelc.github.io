import Header from "../../../components/shared/header";
import Navbar from "../../../components/shared/navbar";
import { Link } from "react-router-dom";
 
export default function ViewBankAccount() {
  const bankAccount = {
    bankName: "MAYBANK BERHAD",
    accountNumber: "1234578901387",
    payeeName: "EMMA LXC",
    information: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  };
 
  const fields = [
    { label: "Bank Name", value: bankAccount.bankName },
    { label: "Bank Account No.", value: bankAccount.accountNumber },
    { label: "Payee Name", value: bankAccount.payeeName },
  ];
 
  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />
 
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xl font-semibold text-slate-900">
              <Link
                to="/settings"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
              >
                ←
              </Link>
              <span>Bank Account</span>
            </div>
          </div>
 
          <div className="grid gap-6">
            <div className="grid gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-[180px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3 last:border-b-0"
                >
                  <span className="text-sm font-medium text-slate-500">{field.label}</span>
                  <span className="text-base text-slate-900">{field.value}</span>
                </div>
              ))}
            </div>
 
            <div className="rounded-[24px] border border-[#8ACB8A] bg-[#F5FBF5] p-6 text-slate-700">
              <h2 className="mb-4 text-center text-2xl font-semibold text-slate-900">
                Bank Account Information
              </h2>
              <p className="whitespace-pre-line leading-7 text-sm text-slate-700">
                {bankAccount.information}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}