import { getServerSession } from "next-auth";

export default function Login() {
    const session = getServerSession();
    return (
        <>
        getServerSession Result
        {session?.user?.name ? (
            <div>{session?.user?.name}</div>
        ) : (
            <div>Not logged in</div>
        )}
        </>
    );
}