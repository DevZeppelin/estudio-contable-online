import { SITE } from "@/lib/seo";

export default function sitemap() {
    const now = new Date();
    return [
        {
            url: SITE.domain,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
