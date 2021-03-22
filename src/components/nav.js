// import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import NavItems from "./navItems"
//
// function Nav(props) {
//   const data = useStaticQuery(graphql`
//     query NavQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//
//   if (typeof window !== "undefined" && window.location.pathname === "/") {
//     return(
//       <nav>
//         <div>
//           <h3 className="brand">
//           {`${data.site.siteMetadata.title}, LLC`}
//         </h3>
//         </div>
//         <div>
//           <NavItems />
//         </div>
//       </nav>
//
//     )
//   } else {
//     return (
//       <nav>
//         <div>
//           <h3 className="brand">
//             <Link to="/">{data.site.siteMetadata.title}, LLC</Link>
//           </h3>
//         </div>
//         <div>
//           <NavItems />
//         </div>
//       </nav>
//     )
//
//   }
//
//
// }
//
// export default Nav
