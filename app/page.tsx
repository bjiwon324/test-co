import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Image src={"/logo.jpg"} alt="로고" width={350} height={50} />
          <p className="text-lg break-keep leading-8  text-zinc-800 dark:text-zinc-200">
            현재 페이지 리뉴얼 중입니다. 곧 멋진 모습으로 찾아뵙겠습니다! 😉
            <br />
            감사합니다.
          </p>
          <p className="text-lg break-keep leading-8  text-zinc-800 dark:text-zinc-200">
            This page is currently under renovation. <br />
            We will be back soon with a great new look! 😉
            <br />
            Thank you.
          </p>
          <p className="pt-4 text-mg break-keep leading-8 font-bold text-zinc-800 dark:text-zinc-200">
            문의 사항은 032-523-7177 로 연락 부탁드립니다.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  );
}
