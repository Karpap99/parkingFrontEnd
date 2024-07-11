import "./PriceCardDesktop.css"
import PriceCardBackImage from "../../../../ParkingPriceBackground.png"
function PriceCardDesktop({Price, ZoneName, Title}){
    let ZoneNameStyle = {
        color: "black"
    }
    if(ZoneName === "Червона"){
        ZoneNameStyle.color = "#FF0000"
    }
    else if(ZoneName === "Жовта"){
        ZoneNameStyle.color = "#FFC700"
    }
    else if(ZoneName === "Зелена"){
        ZoneNameStyle.color = "#3EC300"
    }


    return(
        <div className="PriceCardBody">
            <div className="PriceCardBody-Price">{Price}₴</div>
            <div className="PriceCardBody-Underline"></div>
            <div className="PriceCardBody-Zonename" style={ZoneNameStyle}>{ZoneName} Зона</div>
            <div className="PriceCardBody-ZoneDescript">{Title}</div>
            <img src={PriceCardBackImage} className="PriceCardBackImage" alt=""></img>
        </div>

    )
}

export default PriceCardDesktop