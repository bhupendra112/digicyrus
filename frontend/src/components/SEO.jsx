import { useEffect } from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
    useEffect(() => {
        // Update document title
        document.title = title || 'Digi Cyrus - Build Scalable Digital Businesses';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Digi Cyrus builds scalable digital businesses through web development, mobile apps, SaaS platforms, automation & AI.');
        }

        // Update meta keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords);
        }

        // Update Open Graph tags
        const updateMetaTag = (property, content) => {
            if (content) {
                let metaTag = document.querySelector(`meta[property="${property}"]`);
                if (!metaTag) {
                    metaTag = document.createElement('meta');
                    metaTag.setAttribute('property', property);
                    document.head.appendChild(metaTag);
                }
                metaTag.setAttribute('content', content);
            }
        };

        if (title) updateMetaTag('og:title', title);
        if (description) updateMetaTag('og:description', description);
        if (image) updateMetaTag('og:image', image);
        if (url) updateMetaTag('og:url', url);

        // Update Twitter tags
        if (title) updateMetaTag('twitter:title', title);
        if (description) updateMetaTag('twitter:description', description);
        if (image) updateMetaTag('twitter:image', image);

        // Update canonical URL
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        const baseUrl = window.location.origin;
        canonicalLink.setAttribute('href', url || baseUrl + window.location.pathname);

    }, [title, description, keywords, image, url]);

    return null;
};

export default SEO;
