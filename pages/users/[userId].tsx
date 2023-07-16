import Header from "@/components/Header"
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router"
import { ClipLoader } from "react-spinners";

const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;

    const { data: fetcherdUser, isLoading } = useUser(userId as string);

    if (isLoading || !fetcherdUser) {
        return (
            <div
                className="
                    flex
                    justify-center
                    items-center
                    h-full
                "
            >
                <ClipLoader color="lightblue" />

            </div>
        )
    }

    return (
        <>
            <Header showBackArrow label={fetcherdUser?.name} />
            <UserHero userId={userId as string} />
            <UserBio userId={userId as string} />
        </>
    )
}

export default UserView