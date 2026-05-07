import { Badge } from "../badge/Badge";

const cards = [
  { title: "Quality lift", text: "Answer quality improved after adding source constraints.", tone: "success" },
  { title: "Source review", text: "Three evidence packs need owner approval before publish.", tone: "warning", tall: true },
  { title: "Prompt update", text: "Marketing draft prompt now includes brand voice rules.", tone: "brand" },
  { title: "Policy check", text: "No blocked terms detected in the latest run.", tone: "success" },
];

export function MasonryGrid() {
  return (
    <div className="columns-1 gap-4 md:columns-2">
      {cards.map((card) => (
        <article className="mb-4 break-inside-avoid rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs" key={card.title}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>
            <Badge variant={card.tone as "success" | "warning" | "brand"}>{card.tone}</Badge>
          </div>
          <p className="text-sm leading-6 text-gray-600">{card.text}</p>
          {card.tall ? (
            <div className="mt-4 rounded-habibiMd bg-gray-50 p-3 text-xs leading-5 text-gray-500">
              Masonry supports uneven content without forcing every insight card into the same height.
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
