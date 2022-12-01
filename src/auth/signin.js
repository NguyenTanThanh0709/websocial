import { getProviders, signIn } from "next-auth/react";


function SignIn({ providers }) {
    return (
        <>
            
           hello
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}

export default SignIn;
