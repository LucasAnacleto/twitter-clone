import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        loginModal.OnClose();
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            //TODO ADD LOG IN 

            loginModal.OnClose();

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placehoder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placehoder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>primeira vez usando Twitter?
                <span
                    onClick={onToggle}
                    className="
                        text-white 
                        cursor-pointer 
                        hover:underline
                    "
                > Crie sua conta</span>
            </p>
        </div>
    )



    return (
        <Modal 
            disable={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={loginModal.OnClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;