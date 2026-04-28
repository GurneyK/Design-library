export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-habibiLg bg-gray-900 p-5 text-sm leading-6 text-gray-50">
      <code>{code}</code>
    </pre>
  );
}
