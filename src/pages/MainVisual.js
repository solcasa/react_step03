import { useParams } from "react-router-dom";

const MainVisual = () => {
    const { id } = useParams();
    return (
        <section className="MainVisual">
            여기는 메인슬라이드 {id}
        </section>
    )
}

export default MainVisual;