import AdminHeader from "../components/adminpanel/AdminHeader";


export default function AdminTemplate({
  children,
  className,
}) {
  return (
    <div>
      <AdminHeader />
      <main className={className}>{children}</main>
    </div>
  );
}
