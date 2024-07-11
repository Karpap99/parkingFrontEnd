import NumberBox from "./Components/NumberBox"
import "./PayingForParkingDesktop.css"
import ParkingPay from "../../../../ParkingPay.png"

function PayingForParkingDesktop(){
    return(
        <div className="PayingForParkingBody">
            <div className="PayingForParkingLeftSide">
                <div>
                    <NumberBox number={1}/>
                    <div className="AppStep">
                    Зареєструйтесь або увійдіть до <br></br>
                    міського додатку єДніпро
                    </div>
                </div>
                <div className="PayingUnderline"></div>
                <div>
                    <NumberBox number={2}/>
                    <div className="AppStep">
                        Перейдіть до "Сервісів" 
                        <br></br>виберіть іконку "Паркування"
                    </div>
                </div>
                <div className="PayingUnderline"></div>
                <div>
                    <NumberBox number={3}/>
                    <div className="AppStep">
                        Натисніть "Припаркуватись"
                    </div>
                </div>
                <div className="PayingUnderline"></div>
                <div>
                    <NumberBox number={4}/>
                    <div className="AppStep">
                    Оберіть паркомісце за 
                    <br></br>допомогою мапи та геолокації
                </div>
                <div className="PayingUnderline"></div>
                </div>
                <div>
                    <NumberBox number={5}/>
                    <div className="AppStep">
                    Сплачуйте погодинно або <br></br>
                    придбайте абонемент та <br></br>
                    отримуйте офіційну квитанцію
                    </div>
                </div>
            </div>
            <div className="PayingForParkingRightSide">
                <img src={ParkingPay} alt="" className="ParkingPayDesktop"></img>
            </div>
        </div>
    )
}

export default PayingForParkingDesktop