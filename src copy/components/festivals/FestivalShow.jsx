import { useNavigate, useParams } from "react-router-dom"
import './FestivalShow.css'
import { useSelector } from "react-redux"
import { dateFormatter } from "../../utils/dateFormatter.js";
import { useEffect } from "react";

function FestivalShow() {
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    

  },[])

  function redirectBack() {
    navigate(-1); //바로 이전 페이지, -2는 두 페이지 전으로.
  }

  return (

    <>
    
    <div className="show-container">
      <button type="button" onClick={redirectBack}>되돌아가기</button>
      <p className="show-title">{festivalInfo.title}</p>
      <p className="show-period">{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
      <img  className="show-image" src={festivalInfo.firstimage} alt={`${festivalInfo.title}사진`} />
      <p className="show-addr">{`${festivalInfo.addr1}, ${festivalInfo.addr2}`}</p>
    </div>
    
    
    </>
  )
}


export default FestivalShow