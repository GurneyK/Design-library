import { Accessibility, Bot, CheckCircle2, Code2, Layers, ShieldCheck } from "lucide-react";
import type { CatalogEntry } from "../../data/catalog";
import { CodeBlock } from "./CodeBlock";
import { PreviewFrame } from "./PreviewFrame";
import { PropsTable } from "./PropsTable";
import { TokenList } from "./TokenList";

interface ComponentEntryLayoutProps {
  entry: CatalogEntry;
}

export function ComponentEntryLayout({ entry }: ComponentEntryLayoutProps) {
  const Preview = entry.preview;

  return (
    <article className="space-y-6">
      <header className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {entry.category}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {entry.subcategory}
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-normal text-gray-900">{entry.name}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">{entry.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {entry.source.map((source) => (
              <span
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                key={source}
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section id="preview">
        <SectionHeading
          icon={<Layers className="h-4 w-4" />}
          title="Preview"
          description="Live React component using Habibi tokens."
        />
        <PreviewFrame>
          <Preview />
        </PreviewFrame>
      </section>

      <section id="variants" className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs">
        <SectionHeading icon={<CheckCircle2 className="h-4 w-4" />} title="Variants" />
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.variants.map((variant) => (
            <span
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
              key={variant}
            >
              {variant}
            </span>
          ))}
        </div>
      </section>

      <section id="props" className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs">
        <SectionHeading icon={<Code2 className="h-4 w-4" />} title="Props" />
        <PropsTable props={entry.props} />
      </section>

      <section id="tokens" className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs">
        <SectionHeading icon={<ShieldCheck className="h-4 w-4" />} title="Tokens" />
        <TokenList tokens={entry.tokens} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <GuidanceList title="Use When" items={entry.usage} />
        <GuidanceList title="Do Not Use When" items={entry.avoid} />
      </section>

      <section
        id="accessibility"
        className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs"
      >
        <SectionHeading icon={<Accessibility className="h-4 w-4" />} title="Accessibility" />
        <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
          {entry.accessibility.map((item) => (
            <li className="flex gap-2" key={item}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="code" className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs">
        <SectionHeading icon={<Code2 className="h-4 w-4" />} title="Code" />
        <CodeBlock code={entry.code} />
      </section>

      <section
        id="for-agents"
        className="rounded-habibiLg border border-brand-200 bg-brand-50 p-6 text-brand-950"
      >
        <SectionHeading icon={<Bot className="h-4 w-4" />} title="For agents" />
        <ul className="mt-4 space-y-2 text-sm leading-6">
          {entry.agentGuidance.map((item) => (
            <li className="flex gap-2" key={item}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function SectionHeading({
  description,
  icon,
  title,
}: {
  description?: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
        <span className="flex h-7 w-7 items-center justify-center rounded-habibiSm bg-gray-100 text-gray-600">
          {icon}
        </span>
        {title}
      </div>
      {description ? <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p> : null}
    </div>
  );
}

function GuidanceList({ items, title }: { items: readonly string[]; title: string }) {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
