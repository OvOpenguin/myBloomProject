import { useMap } from "react-leaflet";

const LocateButton = () => {
    const map = useMap();

  const handleClick = () => {
    map.locate().on("locationfound", function (e) {
      map.setView(e.latlng, 16); // 移動到使用者位置，縮放 16
    });
  };
  return (
    <>
    <div onClick={handleClick}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        padding: "6px 12px",
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >我的定位
    </div>
    </>
  )
}

export default LocateButton