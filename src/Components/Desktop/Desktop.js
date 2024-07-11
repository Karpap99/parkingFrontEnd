import FunctionalCard from "./Components/FunctionalCardsDesktop/FunctionalCardsDesktop"
import "./Desktop.css"
import Image1 from "../../Img1.png";
import Image2 from "../../Img2.png";
import Image3 from "../../Img3.png";
import Image4 from "../../Img4.png";
import Image5 from "../../Img5.png";
import Image6 from "../../Img6.png";
import PriceCardDesktop from "./Components/PriceCardDesktop/PriceCardDesktop";
import AppPreview from "../../AppPreview.png"
import PlayStore from "../../downloadfromGoogle.png"
import AppStore from "../../downloadfromAppStore.png"
import logo from "../../logo.png"
import ProjectMap from "./Components/Map/Map";
function Desktop(){
    return(
        <div className="DesktopBody ">
            <img src={logo} className="logo"></img>
            <div className="slogan">Новий рівень розвитку міста! Швидке паркування в твоєму смартфоні</div>
            <h1 className="DesktopHeaders">Оплата паркування у місті Дніпро</h1>
                <div className="FunctionalCardGrid">
                    <div></div>
                    <FunctionalCard Image={Image1} Title={"Оплата паркування"}></FunctionalCard>
                    <FunctionalCard Image={Image2} Title={"Купівля абонементів"}></FunctionalCard>
                    <FunctionalCard Image={Image3} Title={"Додавання даних авто"}></FunctionalCard>
                    <div></div>
                    <div></div>
                    <FunctionalCard Image={Image4} Title={"Перегляд історії паркувань"}></FunctionalCard>
                    <FunctionalCard Image={Image5} Title={"Повернення автівки"}></FunctionalCard>
                    <FunctionalCard Image={Image6} Title={"Перегляд штрафів"}></FunctionalCard>
                    <div></div>
                </div>
            
            <h1 className="DesktopHeaders">Зони та вартість паркомісць</h1>
            <div className="PriceCardGrid DesktopMargin">
                <div></div>
                <PriceCardDesktop Price={18} ZoneName={"Червона"} Title={"Центральна частина міста, найвища вартість паркування"}/>
                <PriceCardDesktop Price={15} ZoneName={"Жовта"} Title={"Прилеглі до центру райони, середня вартість паркування"}/>
                <PriceCardDesktop Price={13} ZoneName={"Зелена"} Title={"Околиці міста, найнижча вартість паркування"}/>
                <div></div>
                <div></div>
                <div className="ParkingPricesDescript">
                    Нарахування здійснюється на початку першої години <br></br>
                    паркування і на початку кожних наступних 30 хвилин паркування.
                </div>
            </div>
            
            <h1 className="DesktopHeaders DesktopHeaders_right">Паркувальні<br></br>Зони на Мапі</h1>
            <ProjectMap></ProjectMap>
            <div className="DesktopMargin">Подивіться розташування паркувальних зон поряд з вами на карті</div>
            <h1 className="DesktopHeaders DesktopHeaders_left">Як Оплачувати<br></br>Паркування?</h1>
            <h1 className="DesktopHeaders DesktopHeaders_left">Завантажуй мобільний<br></br>застосунок</h1>
            <div className="AppDesktopBody">
                <div className="AppDesktopLeft">
                    <div>
                    Зручна оплата паркування та інші міські сервіси.<br/>
                    Потрібний паркувальний майданчик <br/>
                    визначається автоматично — або ви можете <br/>
                    обрати його самостійно зі списку.<br/>
                    Оплачуйте погодинно або придбайте абонемент.
                    </div>
                    <div>
                        <img src={AppStore}></img>
                        <img src={PlayStore}></img>
                        <div>Завантажуй безкоштовно на свій смартфон</div>
                    </div>
                </div>
                <img src={AppPreview} className="AppPreviewDesktop"></img>
            </div>
        </div>
    )
    
}

export default Desktop