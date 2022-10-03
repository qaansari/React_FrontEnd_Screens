function LeftMainSidebarData({
  data,
  figure1,
  figure2,
  figure3,
  MainText,
  FigOne,
  FigTwo,
  FigThree,
}) {
  return (
    <div class="main_sidebar_links">
      <ul>
        <li class={MainText}>
          <p>{data}</p>
        </li>
        <li class={FigOne}>
          <p>{figure1}</p>
        </li>
        <li class={FigTwo}>
          <p>{figure2}</p>
        </li>
        <li class={FigThree}>
          <p>{figure3}</p>
        </li>
      </ul>
    </div>
  );
}
export default LeftMainSidebarData;
