import LeftMainSidebarData from "./LeftMainSidebarData";

function LeftMainSidebar({}) {
  const dataServices = [
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-info-circle circle_ico_orange",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_green",
      FigThree: "p_txt_left_green",
    },
    {
      data: "UTC08",
      figure1: "1784.79",
      figure2: "640.48",
      figure3: "102.78",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_blue",
      MainText: "p_main_txt_green",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_red",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC08",
      figure1: "1852.49",
      figure2: "156.44",
      figure3: "754.77",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_red",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_red",
      FigTwo: "p_txt_left_white",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-info-circle circle_ico_orange",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_green",
      FigThree: "p_txt_left_green",
    },
    {
      data: "UTC08",
      figure1: "1784.79",
      figure2: "640.48",
      figure3: "102.78",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_blue",
      MainText: "p_main_txt_green",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_red",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC08",
      figure1: "1852.49",
      figure2: "156.44",
      figure3: "754.77",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_red",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_red",
      FigTwo: "p_txt_left_white",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC08",
      figure1: "1852.49",
      figure2: "156.44",
      figure3: "754.77",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_red",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_red",
      FigTwo: "p_txt_left_white",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-info-circle circle_ico_orange",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_green",
      FigThree: "p_txt_left_green",
    },
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-info-circle circle_ico_orange",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_green",
      FigThree: "p_txt_left_green",
    },
    {
      data: "UTC08",
      figure1: "1784.79",
      figure2: "640.48",
      figure3: "102.78",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_blue",
      MainText: "p_main_txt_green",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_red",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC08",
      figure1: "1852.49",
      figure2: "156.44",
      figure3: "754.77",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-gg-circle circle_ico_red",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_red",
      FigTwo: "p_txt_left_white",
      FigThree: "p_txt_left_red",
    },
    {
      data: "UTC09",
      figure1: "1458.75",
      figure2: "800.83",
      figure3: "89.97",
      icon1: "fa fa-bookmark bookmark_ico",
      icon2: "fa fa-info-circle circle_ico_orange",
      MainText: "p_main_txt_white",
      FigOne: "p_txt_left_green",
      FigTwo: "p_txt_left_green",
      FigThree: "p_txt_left_green",
    },
  ];
  return (
    <div class="col-md-3">
      <div class="main_sidebar_left">
        <div class="nav_icon">NFT</div>
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
