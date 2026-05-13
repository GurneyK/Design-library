import { Accessibility, Bot, Check, CheckCircle2, Code2, Copy, ExternalLink, Layers, PackageCheck, ShieldCheck } from "lucide-react";
import { useState } from "react";
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
  const handoff = entry.developerHandoff;

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
        id="developer-handoff"
        className="rounded-habibiLg border border-gray-200 bg-white p-6 shadow-habibiXs"
      >
        <SectionHeading
          icon={<PackageCheck className="h-4 w-4" />}
          title="Developer handoff"
          description="Copy contract for full-stack teams moving this component into another React + Tailwind app."
        />
        <DeveloperHandoff handoff={handoff} />
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

type DeveloperHandoffData = {
  copyInstructions: string;
  copyScript?: string;
  copyScriptLanguage?: string;
  copyScripts?: Record<string, string>;
  copyStatus: string;
  githubUrls: string[];
  importPaths: string[];
  importAlias: string;
  packageInstallCommand: string;
  rawUrls: string[];
  repositoryUrl: string;
  requiredGlobalGithubUrls: string[];
  requiredGlobalPaths: string[];
  requiredGlobalRawUrls: string[];
  requiredSetup: string[];
  sourcePaths: string[];
  allCopyPaths: string[];
  allGithubUrls: string[];
  allImportPaths: string[];
  allRawUrls: string[];
  dependencyPaths: string[];
  dependencyGithubUrls: string[];
  dependencyImportPaths: string[];
  dependencyRawUrls: string[];
  usageSnippetStatus: string;
};

function DeveloperHandoff({ handoff }: { handoff?: DeveloperHandoffData }) {
  if (!handoff) {
    return (
      <p className="mt-4 rounded-habibiMd bg-warning-50 p-4 text-sm leading-6 text-warning-700">
        Developer handoff metadata is missing for this entry. Run <code>npm run build</code> to regenerate the catalog.
      </p>
    );
  }

  return (
    <div className="mt-4 space-y-5">
      <div className="grid gap-3 md:grid-cols-3">
        <MetadataTile label="Copy status" value={formatStatus(handoff.copyStatus)} />
        <MetadataTile label="Usage snippet" value={formatStatus(handoff.usageSnippetStatus)} />
        <MetadataTile label="Files to copy" value={String(handoff.sourcePaths.length + handoff.dependencyPaths.length)} />
      </div>

      <div className="rounded-habibiMd bg-gray-50 p-4 text-sm leading-6 text-gray-700">
        {handoff.copyInstructions}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SetupBlock title="Install command" value={handoff.packageInstallCommand} />
        <SetupBlock title="Import alias" value={handoff.importAlias} />
      </div>

      {handoff.copyScripts?.powershell ? (
        <CopyScriptBlock
          code={handoff.copyScripts.powershell}
          description="Run from the root of a React + Tailwind project on Windows."
          title="PowerShell copy script"
        />
      ) : null}

      {handoff.copyScripts?.bash ? (
        <CopyScriptBlock
          code={handoff.copyScripts.bash}
          description="Run from the root of a React + Tailwind project on macOS or Linux."
          title="Bash copy script"
        />
      ) : null}

      {handoff.sourcePaths.length > 0 ? (
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Implementation source</h3>
          <SourceFileList githubUrls={handoff.githubUrls} importPaths={handoff.importPaths} rawUrls={handoff.rawUrls} sourcePaths={handoff.sourcePaths} />
        </div>
      ) : null}

      {handoff.dependencyPaths.length > 0 ? (
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Local dependencies to copy</h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            These are local Design Library imports used by the implementation source.
          </p>
          <SourceFileList
            githubUrls={handoff.dependencyGithubUrls}
            importPaths={handoff.dependencyImportPaths}
            rawUrls={handoff.dependencyRawUrls}
            sourcePaths={handoff.dependencyPaths}
          />
        </div>
      ) : null}

      {handoff.requiredGlobalPaths.length > 0 ? (
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Global setup files</h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Review these before copying into an existing app; they define the shared token layer and base focus styles.
          </p>
          <SourceFileList
            githubUrls={handoff.requiredGlobalGithubUrls}
            importPaths={handoff.requiredGlobalPaths}
            rawUrls={handoff.requiredGlobalRawUrls}
            sourcePaths={handoff.requiredGlobalPaths}
          />
        </div>
      ) : null}

      <div>
        <h3 className="text-sm font-semibold text-gray-900">Required setup</h3>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-gray-700 md:grid-cols-2">
          {handoff.requiredSetup.map((item) => (
            <li className="flex gap-2" key={item}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <SourceLink href={handoff.repositoryUrl} label="Open repository" />
    </div>
  );
}

function SetupBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-4">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 break-words font-mono text-xs leading-5 text-gray-700">{value}</p>
    </div>
  );
}

function CopyScriptBlock({ code, description, title }: { code: string; description: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copyScript() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-gray-950">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="mt-1 text-xs text-gray-400">{description}</p>
        </div>
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-habibiSm bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
          onClick={copyScript}
          type="button"
        >
          {copied ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : <Copy aria-hidden="true" className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy script"}
        </button>
      </div>
      <pre className="max-h-80 overflow-auto p-4 text-xs leading-5 text-gray-50">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SourceFileList({
  githubUrls,
  importPaths,
  rawUrls,
  sourcePaths,
}: {
  githubUrls: string[];
  importPaths: string[];
  rawUrls: string[];
  sourcePaths: string[];
}) {
  return (
    <div className="mt-3 max-h-80 space-y-2 overflow-y-auto pr-1">
      {sourcePaths.map((sourcePath, index) => (
        <div className="rounded-habibiMd border border-gray-200 p-3" key={sourcePath}>
          <p className="font-mono text-xs text-gray-700">{sourcePath}</p>
          <p className="mt-1 font-mono text-xs text-gray-500">{importPaths[index]}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <SourceLink href={githubUrls[index]} label="View source" />
            <SourceLink href={rawUrls[index]} label="Raw file" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MetadataTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="focus-ring inline-flex items-center gap-1.5 rounded-habibiSm text-sm font-semibold text-brand-700 hover:text-brand-800"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
    </a>
  );
}

function formatStatus(status: string) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
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
