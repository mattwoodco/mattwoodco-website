import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms and Conditions",
  description:
    "SMS terms and conditions for MattWood+Co text message communications.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 font-[family-name:var(--font-inter)] text-foreground">
      <h1 className="mb-2 font-[family-name:var(--font-goudy)] text-3xl font-normal tracking-tight">
        SMS Terms and Conditions
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        Effective Date: March 30, 2026
      </p>

      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          These terms and conditions apply to messages sent to and from Matt Wood
          Co DBA MattWood+Co.
        </p>

        <ol className="list-decimal space-y-4 pl-5">
          <li>
            We send account notifications, deployment status updates, and system
            alerts via SMS to users who have opted in through our platform.
          </li>
          <li>
            You can cancel the SMS service at any time. Just text
            &ldquo;STOP&rdquo;. After you send the SMS message
            &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm
            that you have been unsubscribed. After this, you will no longer
            receive SMS messages from us. If you want to join again, send the SMS
            message &ldquo;START&rdquo; and we will start sending SMS messages to
            you again.
          </li>
          <li>
            If you are experiencing issues with the messaging program you can
            reply with the keyword HELP for more assistance, or you can get help
            directly at{" "}
            <a
              href="mailto:matt@mattwood.co"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              matt@mattwood.co
            </a>
            .
          </li>
          <li>
            Carriers are not liable for delayed or undelivered messages.
          </li>
          <li>
            As always, message and data rates may apply for any messages sent to
            you from us and to us from you. Message frequency varies. If you have
            any questions about your text plan or data plan, it is best to
            contact your wireless provider.
          </li>
          <li>
            If you have any questions regarding privacy, please read our{" "}
            <a
              href="/privacy"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              privacy policy
            </a>
            .
          </li>
        </ol>
      </div>
    </main>
  );
}
