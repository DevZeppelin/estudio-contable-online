import { SITE } from "@/lib/seo";

export default function robots() {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE.domain}/sitemap.xml`,
        host: SITE.domain,
    };
}
