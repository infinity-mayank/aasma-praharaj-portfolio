import {BsArrowUpRight} from "react-icons/bs";

const onReactOutClick = () => {
  window.open('https://www.linkedin.com/in/aasma-praharaj-293702114/', '_blank');
}

export const Home = () => (
  <div className="flex flex-col items-center justify-center p-4 h-screen bg-home-background bg-no-repeat bg-cover">
    <div className="text-[#836705] font-medium text-5xl">Good things take time. Great things take a little longer</div>
    <div className="pt-4 text-base font-normal">The secret of getting ahead is getting started - Mark Twain :)</div>
    <div className="pt-12">
      <button
        className="bg-[#FFC800] py-4 px-8 rounded-[116px] w-[175px] font-bold flex items-center"
        onClick={onReactOutClick}
      >
        <BsArrowUpRight />&nbsp;Reach Out
      </button>
    </div>
  </div>
);
