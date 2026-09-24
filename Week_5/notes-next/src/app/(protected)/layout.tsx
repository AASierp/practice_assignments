import AuthGuard from "@/components/UserAuthCheck";
import Link from "next/link";
import LogOutBtn from "@/components/LogOutBtn";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard>
            <>
                <nav>
                    <Link className="Link" href="/dashboard">Dashboard</Link>
                    <Link className="Link" href="/notes/new">New Note</Link>
                    <Link className="Link" href="/profile">Profile</Link>
                    <LogOutBtn />
                </nav>

                <main>{children}</main>
            </>
        </AuthGuard>
    );
}