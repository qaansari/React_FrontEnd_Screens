import LeftMainSidebarData from "./LeftMainSidebarData";

function LeftMainSidebar({}) {
  const dataServices = [
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico",
      FigOne: "p_txt_left",
      FigTwo: "p_txt_left_two",
      FigThree: "p_txt_left_three",
    },
    {
      data: "UTC06",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-info-circle circle_ico3",
      FigOne: "p_txt_left_one",
      FigTwo: "p_txt_left_two_sec",
      FigThree: "p_txt_left_three_three",
    },
    {
      data: "UTC08",
      figure1: "1878.75",
      figure2: "974.83",
      figure3: "715.97",
      icon1: "fa fa-bookmark bookmark_ico2",
      icon2: "fa fa-circle circle_ico3",
      FigOne: "p_txt_left_one_sec",
      FigTwo: "p_txt_left_one_sec",
      FigThree: "p_txt_left_one_sec",
    },
    {
      data: "UTC08",
      figure1: "1200.55",
      figure2: "998.76",
      figure3: "125.98",
      icon1: "fa fa-bookmark bookmark_ico2",
      icon2: "fa fa-gg-circle circle_ico2",
      FigOne: "p_txt_left_one_sec",
      FigTwo: "p_txt_left_two",
      FigThree: "p_txt_left_three_three",
    },
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico",
      FigOne: "p_txt_left_one",
      FigTwo: "p_txt_left_two",
      FigThree: "p_txt_left_three",
    },
  ];
  return (
    <div class="col-md-3">
      <div class="main_sidebar_left">
        <a href="#">NFT</a>
        {dataServices.map((x) => (
          <LeftMainSidebarData
            data={x.data}
            figure1={x.figure1}
            figure2={x.figure2}
            figure3={x.figure3}
            icon1={x.icon1}
            icon2={x.icon2}
            MainText={x.MainText}
            FigOne={x.FigOne}
            FigTwo={x.FigTwo}
            FigThree={x.FigThree}
          />
        ))}
      </div>
    </div>
  );
}
export default LeftMainSidebar;
