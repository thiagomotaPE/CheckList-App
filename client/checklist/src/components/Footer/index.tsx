import { Link } from "react-router-dom"
import { Container, Rights, SocialMidia } from "./styles"
export function Footer(){
    return(
        <>
        <Container>
            <Rights>All rights reserved | Developed by Thiago Mota</Rights>
            <SocialMidia>
                <Link to="https://github.com/thiagomotaPE" target="_Blank"><i className="fa-brands fa-github" style={{color: "#ff1f1f",}}></i></Link>
                <Link to="https://www.linkedin.com/in/thiagomotape/" target="_Blank"><i className="fa-brands fa-linkedin" style={{color: "#ff1f1f",}}></i></Link>
                <Link to="https://www.instagram.com/eu_thiagomota/" target="_Blank"><i className="fa-brands fa-instagram" style={{color: "#ff1f1f",}}></i></Link>
            </SocialMidia>
        </Container>
        </>
    )
}