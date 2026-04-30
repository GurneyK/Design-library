import { LockKeyhole, ShieldCheck } from "lucide-react";
import { Alert } from "../ui/alert/Alert";
import { Button } from "../ui/button/Button";
import { FormField } from "../ui/form-field/FormField";
import { ValidationMessage } from "../ui/forms/ValidationMessage";
import { Input } from "../ui/input/Input";

export function AuthScreen() {
  return (
    <div className="grid min-h-[620px] overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs lg:grid-cols-[minmax(0,1fr)_420px]">
      <section className="flex flex-col justify-between bg-brand-50 p-8">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-habibiLg bg-brand-700 text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h2 className="mt-8 max-w-xl text-3xl font-semibold text-gray-900">Design Library access for product teams.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
            A focused auth screen for internal tools where trust, clarity, and low-friction access matter more than marketing copy.
          </p>
        </div>
        <Alert title="Internal workspace" variant="info">
          Use approved identity providers and keep permission language direct.
        </Alert>
      </section>
      <section className="flex items-center p-8">
        <div className="w-full space-y-5">
          <div>
            <p className="text-sm font-semibold text-brand-700">Unilever H3L</p>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900">Sign in</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">Use your workspace account to continue.</p>
          </div>
          <FormField label="Email" htmlFor="auth-email">
            <Input id="auth-email" defaultValue="gurney@unilever.com" />
          </FormField>
          <FormField label="Password" htmlFor="auth-password">
            <Input id="auth-password" type="password" defaultValue="northstar" />
          </FormField>
          <ValidationMessage tone="info">Single sign-on can replace this form in production.</ValidationMessage>
          <Button className="w-full" leadingIcon={<LockKeyhole className="h-4 w-4" />}>Continue</Button>
          <p className="text-center text-xs leading-5 text-gray-500">Access is limited to approved product and design-system teams.</p>
        </div>
      </section>
    </div>
  );
}
