import * as React from "react";
import {
  findRouteByPath,
  removeFromLast,
} from "@/docs/utils/find-route-by-path";
import docsSidebar from "@/data/docs-sidebar";
import coreSidebar from "@/data/core-sidebar";
import guidesSidebar from "@/data/guides-sidebar";
import componentsSidebar from "@/data/components-sidebar";

export function getRoutes(slug: string) {
  // for home page, use docs sidebar
  if (slug === "/") return docsSidebar.routes;

  if (slug === "/docs") return coreSidebar.routes;

  const configMap = {
    "/docs/guides": guidesSidebar,
    "/docs/components": componentsSidebar,
    "/changelog": { routes: [] },
    "/blog": { routes: [] },
  };

  const [, sidebar] =
    Object.entries(configMap).find(([path]) => slug.startsWith(path)) ?? [];

  return sidebar?.routes ?? [];
}

// export default function MDXLayout(props: MDXLayoutProps) {
//   const { frontmatter, children } = props;
//   const routes = getRoutes(frontmatter.slug);

//   const route = findRouteByPath(removeFromLast(frontmatter.slug, "#"), routes);
//   const routeContext = getRouteContext(route, routes);

//   return (
//     <PageContainer
//       frontmatter={frontmatter}
//       sidebar={routes?.length && <Sidebar routes={routes} />}
//       pagination={
//         <Pagination
//           next={routeContext.nextRoute}
//           previous={routeContext.prevRoute}
//         />
//       }
//     >
//       {children}
//     </PageContainer>
//   );
// }
