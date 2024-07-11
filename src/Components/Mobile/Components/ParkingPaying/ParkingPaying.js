import "./ParkingPaying.css"
import TextBlock from "../TextBlock/TextBlock"

function ParkingPaying(){
    return(
        <div className="ParkingPayingBody">
            <TextBlock Title={"Зареєструйтесь або увійдіть до міського додатку єДніпро"}></TextBlock>
            <TextBlock Title={'Перейдіть до "Сервісів" виберіть іконку "Паркування"'} orientation="right"></TextBlock>
            <TextBlock Title={'Натисніть “Припаркуватись”'}></TextBlock>
            <TextBlock Title={'Оберіть паркомісце за допомогою мапи та геолокації"'} orientation="right"></TextBlock>
            <TextBlock Title={"Сплачуйте погодинно або придбайте абонемент та отримуйе офіційну квитанцію"}></TextBlock>
            </div>
    )
}

export default ParkingPaying 