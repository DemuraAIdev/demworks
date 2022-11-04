import { Container } from "@lib/types/ground";
import SectionContainer from "./SectionContainer";
import CLink from "./Link";
const Navigation = ({ children }: Container) => {
    return (
        <>
            <header className="w-full sticky z-20 top-0 flex items-center justify-between py-4">
                <nav className="flex items-center justify-between w-full max-w-2xl px-4 mx-auto sm:px-6 sm:py-2 xl:max-w-3xl xl:px-0">
                    <div className="flex items-center text-base leading-5">
                        <div className="hidden sm:block sm:space-x-8">
                            <h1>Vahry</h1>
                        </div>
                    </div>
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