import MUITypography from "./components/MUITypography";
import MUIButtons from "./components/MUIButtons";
import MUITextField from "./components/MUITextField";
import MUISelect from "./components/MUISelect";
import MUIRadioButton from "./components/MUIRadioButton";
import { MUICheckbox } from "./components/MUICheckbox";
import MUISwitch from "./components/MUISwitch";
import { MUIRating } from "./components/MUIRating";
import { MUIAutocomplete } from "./components/MUIAutocomplete";
import { MUILayout } from "./components/MUILayout";
import MUICard from "./components/MUICard";
import MUIAccordion from "./components/MUIAccordion";
import { MUIImageList } from "./components/MUIImageList";
import MUINavbar from "./components/MUINavbar";

<link rel="stylesheet" href="App.css" />;

function App() {
    return (
        <div style={{ paddingBottom: '100px' }}>
            <div style={{ marginBottom: "50px" }}>
                <MUINavbar/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUITypography></MUITypography>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUIButtons></MUIButtons>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUITextField></MUITextField>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUISelect></MUISelect>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUIRadioButton/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUICheckbox/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUISwitch/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUIRating/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUIAutocomplete/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUILayout/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUICard/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUIAccordion/>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <MUIImageList/>
            </div>
            
        </div>
    );
}

export default App;
