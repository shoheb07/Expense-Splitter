function splitExpense(){

    const totalAmount =
        parseFloat(
            document.getElementById(
                "totalAmount"
            ).value
        );

    const people =
        parseInt(
            document.getElementById(
                "people"
            ).value
        );

    if(
        isNaN(totalAmount) ||
        isNaN(people) ||
        people <= 0
    ){

        alert("Please enter valid values");

        return;
    }

    const splitAmount =
        (totalAmount / people).toFixed(2);

    document.getElementById("result")
        .innerText =
        `Each Person Pays: ₹${splitAmount}`;
}
