import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  latitude: number,
  longitude: number,
  setCustomValue?: (id: string, value: any) => void,
  detailPage?: boolean
};

const KakaoMap: any = ({
  latitude,
  longitude,
  setCustomValue,
  detailPage=false
}: KakaoMapProps) => {
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    if (detailPage) return;
    setCustomValue!('latitude', mouseEvent.latLng.getLat());
    setCustomValue!('longitude', mouseEvent.latLng.getLng());
  };

  return (
    <>
      <div>
        <Map
          center={{lat: latitude, lng: longitude}}
          style={{ width: '100%', height: '360px'}}
          onClick={(_, mouseEvent) => handleClick(mouseEvent)}
        >
          <MapMarker
            position={{lat: latitude, lng: longitude}}
          >
            <div style={{
              color: '#000'
            }}></div>
          </MapMarker>
        </Map>
      </div>
    </>
  )
};

export default KakaoMap;