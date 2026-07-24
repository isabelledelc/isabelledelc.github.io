import Header from "../../../components/shared/header";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

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
    <div className="min-h-screen w-full bg-app-card transition-colors duration-300">
      <Header />
      

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-app-card p-6 border border-app-border shadow-xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xl font-semibold text-app-heading">
              <Link
                to="/settings"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border text-app-heading transition hover:border-app-border-interactive hover:bg-app-pill"
              >
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <span>Bank Account</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 rounded-[24px] border border-app-border bg-app-pill p-6">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-[180px_minmax(0,1fr)] items-center gap-4 border-b border-app-border py-3 last:border-b-0"
                >
                  <span className="text-sm font-medium text-app-muted">{field.label}</span>
                  <span className="text-base font-semibold text-app-heading">{field.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-[24px] border border-app-border bg-app-pill p-6 text-app-heading">
              <h2 className="mb-4 text-center text-2xl font-semibold text-app-heading">
                Bank Account Information
              </h2>
              <p className="whitespace-pre-line leading-7 text-sm text-app-muted">
                {bankAccount.information}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}