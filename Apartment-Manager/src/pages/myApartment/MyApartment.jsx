import { HOC } from "../../components/HOC"

const MyApartment = () => {

    return (
        <HOC>
            <div>
                <div className="grid grid-cols-9 gap-14 justify-center">
                    <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4 py-5 px-8">
                        Item One
                    </div>
                    <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4 py-5 px-8">
                        Item Two
                    </div>
                    <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4 py-5 px-8">
                        Item Three
                    </div>
                </div>

                <div className="w-full my-5 bg-white rounded shadow">
                    Grid space
                </div>

                <div className="w-full my-5 bg-white rounded shadow">
                    Another Grid space
                </div>
            </div>
        </HOC>
    )
}

export default MyApartment