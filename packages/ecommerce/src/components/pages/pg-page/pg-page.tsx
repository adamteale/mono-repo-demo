import React from "react";

import { Layout } from "../layouts";
import { PgPageProps } from "./pg-page.types";

export const PgPage = ({ header, footer, children }: PgPageProps) => {
  return (
    <Layout header={header} footer={footer}>
      {children}
    </Layout>
  );
};
