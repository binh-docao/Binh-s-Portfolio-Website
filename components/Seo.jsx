import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Binh Do-Cao`}
      </title>
    </Head>
  );
};

export default Seo;
