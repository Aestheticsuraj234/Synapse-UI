import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Synapse UI",
    url: "/",
  },
  links: [
    { type: "main", text: "Home", url: "/" },
    { type: "main", text: "Docs", url: "/docs" },
    { type: "main", text: "Pricing", url: "/pricing" },
  ],
};
