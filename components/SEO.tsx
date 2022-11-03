import Head from "next/head";
import { useRouter } from "next/router";


const CommonSEO = ({
    title,
    description,
    ogType,
    ogImage,
    twImage,
}: {
    title: string;
    description: string;
    ogType: string;
    ogImage: string | { url: string }[];
    twImage: string;
}) => {
    const router = useRouter();
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta
                property="og:url"
                content={`https://beta.vahryiskandar.my.id/${router.asPath}`}
            />
            <meta property="og:type" content={ogType} />
            <meta
                property="og:site_name"
                content={"VAHRY ISKANDAT"}
            />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {typeof ogImage === "string" ? (
                <meta property="og:image" content={ogImage} key={ogImage} />
            ) : (
                ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
            )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://twitter.com/Abdulvaiz2" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
        </Head>
    );
};

export const PageSEO = ({ title, description }: {
    title: string;
    description: string;
}) => {
    const ogImageUrl = "https://beta.vahryiskandar.my.id/static/images/twitter-card.png";
    const twImageUrl = "https://beta.vahryiskandar.my.id/static/images/twitter-card.png";
    return (
        <CommonSEO
            title={title}
            description={description}
            ogType="website"
            ogImage={ogImageUrl}
            twImage={twImageUrl}
        />
    );
};