import Head from "next/head";

const Seo = ({ pageTitle, imageUrl }) => {
  return (
    <Head>
      <title>{pageTitle && `${pageTitle} | Binh Do-Cao`}</title>

      {/* Open Graph tags */}
      {pageTitle && <meta property="og:title" content={`${pageTitle} | Binh Do-Cao`} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {/* If you have a specific URL for the page, you can also add: */}
      {/* <meta property="og:url" content={pageUrl} /> */}
    </Head>
  );
};

export default Seo;
