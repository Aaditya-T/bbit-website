const Ellipse = ({
    width = "145",
    height = "145",
    color = "#EAE6FF",
    border = "2",
    radius = "70",
    left = "80",
    bottom = "10",
  }) => {
    return (
          <div
          className={`w-[${width}px] h-[${height}px] bg-[${color}] border-${border} rounded-[${radius}px] absolute left-[${left}vw] bottom-[${bottom}vh]`}
          ></div>
    );
  };
  
  export default Ellipse;