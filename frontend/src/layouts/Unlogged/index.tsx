import { Outlet } from "react-router-dom";

export default function Unlogged() {
  return (
    <div className="flex flex-col max-w-dvw w-screen max-h-dvh h-screen bg-[#000000] overflow-x-hidden overflow-y-auto">
      <header className="flex flex-1/12 justify-center items-center bg-[#141213]">
        <div className="flex justify-between w-full max-w-[1040px] px-[16px] sm:px-[24px]">
          <div className="flex items-center gap-[16px]">
            <img className="w-full max-w-[160px]" src="/assets/logos/cubos.svg" />
            <span className="text-white text-xl font-medium tracking-wider">Movies</span>
          </div>

          <div className="flex items-center">
            <button type="button" className="cursor-pointer py-[8px] px-[16px] bg-[#201526] rounded-[4px]">
              <img className="w-full max-w-[32px]" src="/assets/icons/sun.svg" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative flex flex-10/12 justify-center overflow-hidden border-y-1 border-[#3d3a3f]">
        <div className="z-1 absolute top-[-40%] left-0 w-full h-full mask-b-from-50% mask-b-to-100% bg-[url(/assets/images/layout_background.png)] bg-cover" />
        <div className="z-2 absolute top-0 left-0 w-full h-full bg-[#00000085]" />
        <div className="z-3 flex justify-center items-center w-full max-w-[1040px] px-[16px] sm:px-[24px]">
          <Outlet />
        </div>
      </main>

      <footer className="flex flex-1/12 justify-center items-center bg-[#141213]">
        <div className="flex justify-center w-full max-w-[1040px]">
          <p className="text-base text-[#b5b2bc] text-center">
            {new Date().getFullYear()} | Todos os direitos reservados à <b>Cubos Movies</b>
          </p>
        </div>
      </footer>
    </div>
  )
}