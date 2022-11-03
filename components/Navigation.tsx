import { Container } from "@lib/types/ground";
import SectionContainer from "./SectionContainer";
import CLink from "./Link";
const Navigation = ({ children }: Container) => {
    return (
        <>
            <header>
                <nav>

                </nav>
            </header>
            <SectionContainer>
                <main>{children}</main>
                <CLink href="https://vahryiskandar.my.id">Old Website</CLink>
            </SectionContainer>
        </>
    );
};

export default Navigation;