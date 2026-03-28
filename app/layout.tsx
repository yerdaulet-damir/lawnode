import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entropy Engine — Граф противоречий в законодательстве РК",
  description: "AI-система автоматического обнаружения противоречий в 1,312 нормативных актах Казахстана. Граф-аналитика, NLI-модели, LLM-объяснения.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
