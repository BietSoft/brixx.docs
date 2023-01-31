// Check decision table callback function (optional)
const checkDecisionTable = (output) => {
    console.log("Output:", output);
}

// Create a Brixx default element
Brixx.element = (
    <div>
        <p>HTML element &lt;brixx-check-age&gt; created with Brixx-Script.</p>
        <DecisionTable>
            <ul>
                <li>Baby (0 years old) - <i>It's still a baby!</i></li>
                <li>Preschool (under 5 years old) - <i>Unfortunately too young!</i></li>
                <li>Kids (under 13 years old) - <i>https://www.youtube.com/kids/</i></li>
                <li>Teens (13 years or older) - <i>https://www.youtube.com/</i></li>
            </ul>
            <Input name={"age"} type={"number"}>
                <div>Please enter age</div>
                <Field />
            </Input>
            <Output name={"info"}>
                <Field readonly />
            </Output>
            <Output name={"url"}>
                <Link />
            </Output>
            <Rule age={""} priority={30} info={"Please enter a valid age!"} url={"https://github.com/BietSoft/brixx.docs/"} />
            <Rule age={"0"} priority={40} info={"It's is still a baby!"} />
            <Rule age={"< 6"} priority={20} info={"Unfortunately too young!"} />
            <Rule age={">= 13"} url={"https://www.youtube.com/"} />
            <Rule age={"< 13"} priority={10} info={"Internet Safety for Kids"} url={"https://www.youtube.com/kids/"} />
            <Check button label={"Check age"} action={checkDecisionTable} />
        </DecisionTable>
    </div>
);

// Register a Brixx HTML-Element <brixx-check-age>
Brixx.registerElement({ name: "check-age" });
