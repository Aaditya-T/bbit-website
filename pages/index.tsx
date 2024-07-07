import ContentBlock from "../components/content-block";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="w-full relative bg-daisy-bush-50 overflow-hidden flex flex-col items-end justify-start pt-[49px] px-0 pb-[50.4px] box-border gap-[102px] leading-[normal] tracking-[normal] mq900:gap-[25px] mq1275:gap-[51px]">
      <img
        className="w-full h-[786px] absolute !m-[0] top-[406px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/navigation-item.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[59px] pb-[181.8px] box-border max-w-full mq900:pb-[77px] mq900:box-border mq1275:pl-[29px] mq1275:pr-[29px] mq1275:pb-[118px] mq1275:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-full mq900:gap-[23px]">
          <ContentBlock />
          <FrameComponent3 />
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <img
        className="w-full h-[610.7px] absolute !m-[0] right-[0px] bottom-[0.5px] left-[0px] max-w-full overflow-hidden shrink-0 z-[3]"
        alt=""
        src="/navigation-item1.svg"
      />
      <Footer />
    </div>
  );
};

export default Home;
