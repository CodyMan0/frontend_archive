import { SaasProvider, ModalsProvider } from "@saas-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme";

import { NProgressNextRouter } from "@saas-ui/nprogress";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/layout/footer";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps<any>) => {
  const router = useRouter();
  return (
    <SaasProvider theme={theme} linkComponent={Link}>
      <ModalsProvider>
        <Layout
          header={pageProps.header}
          footer={pageProps.footer !== false ? <Footer /> : null}
        >
          <NProgressNextRouter router={router} />
          <Component {...pageProps} />;
        </Layout>
      </ModalsProvider>
    </SaasProvider>
  );
};

export default App;
