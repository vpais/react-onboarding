import ResponsiveAppBar from '../components/responsiveAppBar';
import { Outlet } from "react-router-dom";

export default function TrendingMedia() {
    return (
        <>
            <ResponsiveAppBar />
            <Outlet/>
        </>
    )
}
