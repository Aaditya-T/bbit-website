import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[213.9px] pr-5 pl-6 box-border max-w-full text-center text-29xl text-daisy-bush-950 font-outfit mq1275:pb-[90px] mq1275:box-border mq450:pb-[58px] mq450:box-border ${className}`}
    >
      <div className="w-[1584px] flex flex-col items-start justify-start gap-[141px] max-w-full mq900:gap-[35px] mq1275:gap-[70px] mq450:gap-[18px]">
        <div className="self-stretch rounded-14xl bg-daisy-bush-200 flex flex-col items-center justify-start pt-[50.1px] px-5 pb-[60px] box-border gap-[25.9px] max-w-full z-[3] mq900:pt-[33px] mq900:pb-[39px] mq900:box-border">
          <div className="w-[1584px] h-[547px] relative rounded-14xl bg-daisy-bush-200 hidden max-w-full" />
          <div className="w-[1354px] flex flex-row items-start justify-center py-0 pr-[9px] pl-0 box-border max-w-full">
            <h3 className="m-0 w-[356.7px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq900:text-19xl mq450:text-10xl">
              OUR VISION
            </h3>
          </div>
          <div className="w-[1350px] h-[350px] relative text-21xl font-medium text-left inline-block shrink-0 max-w-full z-[1] mq900:text-13xl mq450:text-5xl">
            At BBIT our vision is to create a nurturing and innovative
            environment where every student can thrive academically, socially,
            and personally. We aspire to be a leading institution recognized for
            excellence in education, fostering a culture of inclusivity,
            critical thinking, and lifelong learning. Through cutting-edge
            research, community engagement, and a commitment to sustainability,
            we aim to empower our students to become compassionate leaders and
            impactful global citizens.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[2448px] w-[696px] absolute !m-[0] top-[-850px] left-[-289px] z-[2]"
            alt=""
            src="/bg-design.svg"
          />
          <div className="flex-1 rounded-14xl bg-daisy-bush-200 flex flex-col items-center justify-start pt-[37px] px-5 pb-[62px] box-border gap-[46px] max-w-full z-[3] mq900:gap-[23px] mq900:pt-6 mq900:pb-10 mq900:box-border mq450:pt-5 mq450:pb-[26px] mq450:box-border">
            <div className="w-[1584px] h-[835px] relative rounded-14xl bg-daisy-bush-200 hidden max-w-full" />
            <div className="w-[1354px] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border max-w-full">
              <h3 className="m-0 w-[400.5px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq900:text-19xl mq450:text-10xl">
                OUR MISSION
              </h3>
            </div>
            <div className="w-[1353.4px] h-[630px] relative text-21xl font-medium text-left inline-block shrink-0 max-w-full z-[1] mq900:text-13xl mq450:text-5xl">
              <ul className="m-0 font-inherit text-inherit pl-[53px]">
                <li className="mb-0">{`Prepare the student with strong fundamental concepts, analytical abilities & Problem solving skills.`}</li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 font-inherit text-inherit pl-[53px]">
                <li className="mb-0">{`Offer ambiance & Support to cultivate creativity & Innovation.`}</li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 font-inherit text-inherit pl-[53px]">
                <li className="mb-0">{`Disseminate quality training to enhance skills & Entrepreneurship for professional development.`}</li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 font-inherit text-inherit pl-[53px]">
                <li className="mb-0">
                  Establish opportunities for the students and teachers for
                  lifelong learning to meet the ever changing global
                  technological standards.
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 font-inherit text-inherit pl-[53px]">
                <li>
                  Foster students to seek excellence in technical education.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
