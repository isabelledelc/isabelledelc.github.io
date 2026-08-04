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
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: "var(--bg-page)" }}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-3 sm:px-6 pb-16 pt-4 sm:pt-8">
        <div className="overflow-hidden rounded-2xl sm:rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-4 sm:p-6 shadow-xl transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="mb-6 flex items-center gap-3 text-lg sm:text-xl font-bold text-app-heading">
            <Link
              to="/settings"
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Back to settings"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <span className="truncate">Bank Account</span>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {/* Account Details Box */}
            <div className="grid gap-3 sm:gap-4 rounded-xl sm:rounded-[24px] border border-app-border bg-app-pill p-4 sm:p-6">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)] items-start sm:items-center gap-1 sm:gap-4 border-b border-app-border/60 pb-3 sm:pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs sm:text-sm font-medium text-app-muted">
                    {field.label}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-app-heading break-all">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Account Information Text Box */}
            <div className="rounded-xl sm:rounded-[24px] border border-app-border bg-app-pill p-4 sm:p-6 text-app-heading">
              <h2 className="mb-3 sm:mb-4 text-center text-lg sm:text-2xl font-semibold text-app-heading">
                Bank Account Information
              </h2>
              <p className="whitespace-pre-line leading-6 sm:leading-7 text-xs sm:text-sm text-app-muted">
                {bankAccount.information}
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}