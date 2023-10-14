import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className=" min-h-full w-full flex flex-col justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
