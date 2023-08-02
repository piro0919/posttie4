import AuthLayout, { AuthLayoutProps } from "@/components/AuthLayout";

export type LayoutProps = Pick<AuthLayoutProps, "children">;

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <AuthLayout>{children}</AuthLayout>;
}
