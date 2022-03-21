import React, {useState} from "react";

function HookCounterThree() {

    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <input
                type="text"
                value={name.firstName}
                onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
             <input
                type="text"
                value={name.lasttName}
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first name is - {name.firstName} </h2>
            <h2>Your last name is - {name.lastName} </h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    );
}

export default HookCounterThree;


/**
 * '...' is the spread operator which is introduce in es6 javascript ...
 * what it does majorly is that ...retain what ever is existing before and the modify or overwrite the current one...
 */