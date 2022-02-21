import './index.scss';
import {Navigation} from "./Navigation";
import {Logo} from "./Logo";

export const Header = () => {
    return (
        <div className={'Header'}>
            <Logo />
            <Navigation />
        </div>
    )
}