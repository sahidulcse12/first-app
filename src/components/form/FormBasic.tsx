import { FormEvent, useState } from "react";

const FormBasic = () => {

    const [name, setName] = useState<string>();
    const [age, setAge] = useState<number>();
    const [password, setPassword] = useState<string>();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    }

    // const handleResetButton = () => {
    //     console.log("handle reset button");
    //     // setName("");
    //     // setAge(0);
    //     // setPassword("");
    // }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(e);
            }}>
                <div className="rounded border-2 p-5 bg-gray-200 self-center w-[20rem]">
                    <div className="flex gap-2 mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="flex gap-2 mb-3">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" onChange={(e) => setAge(+e.target.value)} value={age} />
                    </div>

                    <div className="flex gap-2 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => { console.log("first") }}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default FormBasic;