export interface PinInputProps {
  length?: number;
}

export function PinInput({ length = 6 }: PinInputProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Verification code">
      {Array.from({ length }).map((_, index) => (
        <input
          aria-label={`Digit ${index + 1}`}
          className="focus-ring h-12 w-10 rounded-habibiMd border border-gray-300 bg-white text-center text-lg font-semibold text-gray-900 shadow-habibiXs placeholder:text-gray-300"
          inputMode="numeric"
          key={index}
          maxLength={1}
          placeholder="0"
          type="text"
        />
      ))}
    </div>
  );
}
