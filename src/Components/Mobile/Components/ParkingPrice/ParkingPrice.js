import "./ParkingPrice.css"

function ParkingPrice({Price = 0, Title, ZoneName}){
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
        <div className="ParkingPrice-Body">
            <div className="ParkingPrice-Left">
                <div className="ParkingPrice-Price">
                    {Price}₴
                </div>
                <div className="ParkingPrice-currency">
                    година
                </div>
            </div>
            <div className="ParkingPrice-Right">
                <div className="ParkingPrice-ZoneName" style={ZoneNameStyle}>
                    {ZoneName} зона
                </div>
                <div className="ZoneTitle">
                    {Title}
                </div>
            </div>
        </div>
    )
}
export default ParkingPrice