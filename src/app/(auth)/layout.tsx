import Image from 'next/image';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div className="h-screen flex justify-center items-center bg-one">
      <div className="hidden lg-block w-1/2 h-full">
        <Image
          src="/images/login.jpg"
          alt="login"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
