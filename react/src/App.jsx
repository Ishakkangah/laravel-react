import "./App.css";
import { BeakerIcon } from "@heroicons/react/24/solid";

function App() {
    return (
        <>
            <div className="bg-red-400 text-center flex justify-center">
                <button className="bg-blue-400 flex px-10 py-2">
                    <BeakerIcon className="h-6 w-6 text-blue-500" />
                    Tombol
                </button>
            </div>
        </>
    );
}

export default App;
