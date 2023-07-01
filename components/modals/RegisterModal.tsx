import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        registerModal.OnClose();
        loginModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            //TODO ADD REGISTER AND LOGIN

            registerModal.OnClose();

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }, [registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placehoder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placehoder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placehoder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
            <p>já tem uma conta?
                <span
                    onClick={onToggle}
                    className="
                        text-white 
                        cursor-pointer 
                        hover:underline
                    "
                > Sign in</span>
            </p>
        </div>
    )

    return (
        <Modal
            disable={isLoading}
            isOpen={registerModal.isOpen}
            title="Crie sua conta"
            actionLabel="Registre-se"
            onClose={registerModal.OnClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;