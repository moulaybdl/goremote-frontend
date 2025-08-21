export default function AuthGeneralCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center w-fit h-fit rounded-[22px] elevation-3 relative z-1000 bg-surface-dark">
      <div className="w-[101%] h-[101%] -z-1 absolute login-card-border-gradient rounded-[22px] opacity-30"></div>
      {children}
    </div>
  );
}
