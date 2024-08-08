import Breadcrumb from "@/components/Breadcrumb";

export default function Layout({ children }) {
  return (
    <>
      <Breadcrumb
        homeElement={'Home'}
        separator={<span> | </span>}
        capitalizeLinks
      />
      <main>{children}</main>
    </>
  )
}